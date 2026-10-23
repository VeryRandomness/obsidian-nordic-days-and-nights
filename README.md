# Nordic Days & Nights

A Nord-inspired theme for [Obsidian](https://obsidian.md) with light ("Days") and dark ("Nights") variants.

## Install (recommended): Theme Auto-Update

Install the [Theme Auto-Update](https://github.com/VeryRandomness/obsidian-theme-auto-update) plugin. It has this theme in its list by default, installs it on launch, and keeps it up to date.

1. In your vault, create the folder `.obsidian/plugins/theme-auto-update/`.
2. Copy `main.js` and `manifest.json` from [the plugin's repo](https://github.com/VeryRandomness/obsidian-theme-auto-update) into it.
3. In Obsidian: Settings → Community plugins → turn off Restricted mode, click the reload button, and enable **Theme Auto-Update**.
4. Restart Obsidian. The plugin downloads the theme on launch (you'll see a notice).
5. Settings → Appearance → Themes → select **Nordic Days & Nights**.

From then on the theme updates itself whenever Obsidian starts. To check immediately, run the command **Check for theme updates now**. If the computer is offline, it skips quietly and tries again next launch.

## Manual install

Copy `theme.css` and `manifest.json` into `<vault>/.obsidian/themes/Nordic Days & Nights/`.

## Releasing an update

1. Edit `theme.css`.
2. Bump the version in `manifest.json`, `package.json`, and `versions.json` (or run `npm version <x.y.z>` to bump all three).
3. `git push`. Vaults with Theme Auto-Update pick it up on their next launch.
