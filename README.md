# macmin.studiographic.ca

The MacMin website. Plain HTML, CSS and a little JS, served by GitHub Pages.

```
index.html     the page
style.css
app.js         plays clips on screen, fills version/checksum from version.json
version.json   latest release; the app reads this for "Check for Updates"
media/         clips, posters, GIFs, icon (made by macmin/site-tools/clips.sh)
CNAME          the custom domain
```

## One-time setup

1. **Repo**: create a public repo (e.g. `macmin-site`) and push this folder to `main`.
2. **Pages**: repo › Settings › Pages › Source: *Deploy from a branch*, `main`, `/ (root)`.
3. **DNS**: at whoever runs DNS for studiographic.ca, add:

   | Type  | Name     | Value                    |
   |-------|----------|--------------------------|
   | CNAME | `macmin` | `<github-username>.github.io` |

4. Back in Settings › Pages, the custom domain should read `macmin.studiographic.ca`. Once the DNS check passes (minutes to an hour), tick **Enforce HTTPS**.
5. Optional but recommended: GitHub › Settings (your account) › Pages › **Verified domains** › add `studiographic.ca`, so nobody else can claim the subdomain.

## Each release

1. In `macmin`: bump `CFBundleShortVersionString` in `Resources/Info.plist`, then `./build.sh release`.
2. Put `build/MacMin-<version>.dmg` where the Download button points: `download/MacMin-<version>.dmg` (`app.js` builds that link from `file` in `version.json`).
3. Here, update `version.json`: `version`, `notes`, `date`, `file`, and `sha256` from `build/MacMin-<version>.dmg.sha256`. Push.
   Everyone with automatic checks on hears about it within a day.

## Re-recording the clips

```
cd ../macmin && site-tools/clips.sh ../macmin-site
```

Uses the current desktop picture; `CLIPS_BG=/path/to/image site-tools/clips.sh ../macmin-site` for another.
