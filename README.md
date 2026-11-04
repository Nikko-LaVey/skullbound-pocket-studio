# Skullbound Pocket Studio — Beta 0.1.0

A reusable, free, offline-first iPhone Home Screen web app for Skullbound Studios. This is a **PWA, not a native IPA**, so no Apple Developer subscription is required.

## What's included
- Native-feeling iPhone UI, independent Home Screen icon, responsive design.
- Local projects, descriptions, statuses, task checklists.
- Local notes and search.
- Manual JSON data backup / import with confirmation.
- Dark/light theme; first-visit caching for offline use.
- No tracking, ads, user accounts, API keys, or recurring fees.

## Host for free from an iPhone with GitHub Pages

1. In Safari, open https://github.com/new and sign in. Create a **Public** repository named `skullbound-pocket-studio` (GitHub Pages is free for public repositories).
2. In the Files app on your iPhone, extract `Skullbound-Pocket-Studio-v0.1.0.zip`.
3. Open your new GitHub repository in Safari. Tap **Add file → Upload files** (request desktop website if needed).
4. Upload the **contents** of the `skullbound-pocket-studio-v0.1.0` folder to the repository root. Keep the `icons/` subfolder structure. You can select files individually or in batches; ensure all ten files (including the three icons) are there.
5. Commit the uploads.
6. Open repository **Settings → Pages**. Choose **Deploy from a branch**, `main`, `/(root)`, then **Save**.
7. After deployment, open the **actual Pages URL shown in GitHub Settings → Pages** in Safari (typically `https://YOURNAME.github.io/skullbound-pocket-studio/`).
8. Tap **Share → Add to Home Screen → Open as Web App → Add**.
9. Open the icon while connected once, then test offline by enabling Airplane Mode. Allow the offline files to finish caching.

If iOS Safari cannot upload an `icons` directory correctly, upload its 3 PNGs individually under an `icons` folder created in GitHub. GitHub's mobile upload controls may differ from desktop.

## Reusing this starter
- Edit HTML/CSS in `index.html`, the feature logic in `app.js`, and name and app icon settings in `manifest.webmanifest`.
- For new versions update the cache version constant in `sw.js` and app labels, commit to GitHub, and reopen the app online once.
- IMPORTANT: Offline user data is browser localStorage: **NOT** automatically backed up to Google Drive. Use Settings → Export backup and save the JSON in Drive or Files regularly.
- Never publicly upload backups containing private notes; a public GitHub Pages repository exposes its contents.

## Expected browser support
- Install by Safari from an HTTPS URL. Offline only after caching succeeds following an online visit.
- If the user deletes the Home Screen app, clears website storage, or storage is evicted, data may be lost without an exported backup.
- Files opened directly using `file://` may not register a service worker; use HTTPS for PWA/offline features.
- No native iOS APIs unavailable to web apps, no App Store listing, no IPA file.

## License
Personal reusable Skullbound Studios starter. All starter source in this package was authored for this project.
