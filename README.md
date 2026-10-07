# Nordic Days & Nights

A Nord-inspired theme for [Obsidian](https://obsidian.md) with light ("Days") and dark ("Nights") variants.

The repo contains two things:

| Path | What it is |
| --- | --- |
| `theme.css`, `manifest.json` | The theme (version in `manifest.json`, mirrored in `package.json` and `versions.json`). |
| `plugin/` | **Theme Auto-Update**, a tiny Obsidian plugin that installs the theme and keeps it up to date on every launch. |

## Install (recommended): Theme Auto-Update

1. In your vault, create the folder `.obsidian/plugins/theme-auto-update/`.
2. Copy `plugin/main.js` and `plugin/manifest.json` from this repo into it.
3. In Obsidian: Settings → Community plugins → turn off Restricted mode, click the reload button, and enable **Theme Auto-Update**.
4. Restart Obsidian. The plugin downloads the theme on launch (you'll see a notice).
5. Settings → Appearance → Themes → select **Nordic Days & Nights**.

From then on the theme updates itself whenever Obsidian starts. To check immediately, run the command **Check for theme update now**. If the computer is offline, it skips quietly and tries again next launch.

## Manual install

Copy `theme.css` and `manifest.json` into `<vault>/.obsidian/themes/Nordic Days & Nights/`.

## Releasing an update

1. Edit `theme.css`.
2. Bump the version in `manifest.json`, `package.json`, and `versions.json` (or run `npm version <x.y.z>` to bump all three).
3. `git push`. Vaults with the plugin pick it up on their next launch.

The plugin's own version lives in `plugin/manifest.json` and is independent of the theme version.
