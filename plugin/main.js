const { Plugin, Notice, requestUrl } = require("obsidian");

const REPO = "VeryRandomness/obsidian-nordic-days-and-nights";
const BRANCH = "main";
const THEME = "Nordic Days & Nights";

module.exports = class ThemeAutoUpdate extends Plugin {
	async onload() {
		this.addCommand({
			id: "check-theme-update",
			name: "Check for theme update now",
			callback: () => this.check(true),
		});
		this.app.workspace.onLayoutReady(() => this.check(false));
	}

	// Resolve the branch to an exact commit so we never read a stale CDN copy of "main".
	async latestRef() {
		try {
			const res = await requestUrl({
				url: `https://api.github.com/repos/${REPO}/commits/${BRANCH}`,
				headers: { Accept: "application/vnd.github+json", "Cache-Control": "no-cache" },
			});
			if (res.json && res.json.sha) return res.json.sha;
		} catch (e) {
			console.warn("Theme Auto-Update: commit lookup failed, falling back to branch", e);
		}
		return BRANCH;
	}

	async fetchText(ref, file) {
		const url = `https://raw.githubusercontent.com/${REPO}/${ref}/${file}?t=${Date.now()}`;
		const res = await requestUrl({ url, headers: { "Cache-Control": "no-cache" } });
		return res.text;
	}

	async check(manual) {
		const adapter = this.app.vault.adapter;
		const dir = `${this.app.vault.configDir}/themes/${THEME}`;
		try {
			const ref = await this.latestRef();
			const [css, manifest] = await Promise.all([
				this.fetchText(ref, "theme.css"),
				this.fetchText(ref, "manifest.json"),
			]);
			const version = JSON.parse(manifest).version;
			if (!css.trim()) throw new Error("downloaded theme.css is empty");

			const read = async (f) => {
				try { return await adapter.read(`${dir}/${f}`); } catch { return null; }
			};
			const norm = (s) => (s || "").replace(/\r\n/g, "\n");
			if (norm(await read("theme.css")) === norm(css) && norm(await read("manifest.json")) === norm(manifest)) {
				console.log(`Theme Auto-Update: up to date (${version}, ${String(ref).slice(0, 7)})`);
				if (manual) new Notice(`${THEME} is up to date (version ${version}).`);
				return;
			}

			if (!(await adapter.exists(dir))) await adapter.mkdir(dir);
			await adapter.write(`${dir}/theme.css`, css);
			await adapter.write(`${dir}/manifest.json`, manifest);

			let reloaded = false;
			try {
				if (this.app.customCss.theme === THEME) {
					this.app.customCss.setTheme(THEME);
					reloaded = true;
				}
			} catch (e) { console.warn("Theme Auto-Update: reload failed", e); }
			new Notice(`${THEME} updated to ${version}${reloaded ? "" : " (restart Obsidian to apply)"}.`);
		} catch (e) {
			console.error("Theme Auto-Update:", e);
			if (manual) new Notice(`Theme update check failed: ${e.message}`);
		}
	}
};
