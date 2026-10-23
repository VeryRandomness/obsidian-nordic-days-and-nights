# Nordic Days & Nights

A Nord-inspired theme for [Obsidian](https://obsidian.md) with light ("Days") and dark ("Nights") variants.

## Install (recommended): Vault Management

The [Vault Management](https://github.com/VeryRandomness/obsidian-vault-management) plugin has this theme in its theme list by default, installs it on launch, and keeps it up to date.

1. In your vault, create the folder `.obsidian/plugins/vr-vault-management/`.
2. Copy `main.js`, `manifest.json` and `styles.css` from [the plugin's repo](https://github.com/VeryRandomness/obsidian-vault-management) into it.
3. In Obsidian: Settings → Community plugins → turn off Restricted mode, click the reload button, and enable **Vault Management**.
4. Restart Obsidian. The plugin downloads the theme on launch (you'll see a notice).
5. Settings → Appearance → Themes → select **Nordic Days & Nights**.

From then on the theme updates itself whenever Obsidian starts. To check immediately, run the command **Check for theme updates now**. If the computer is offline, it skips quietly and tries again next launch. Vault Management also has other tools; each can be switched off in its settings, under Features. The theme list is in its Theme updates section.

## Manual install

Copy `theme.css` and `manifest.json` into `<vault>/.obsidian/themes/Nordic Days & Nights/`.

## Releasing an update

1. Edit `theme.css`.
2. Bump the version in `manifest.json`, `package.json`, and `versions.json` (or run `npm version <x.y.z>` to bump all three).
3. `git push`. Vaults with Vault Management pick it up on their next launch.
