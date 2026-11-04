# Skullbound Pocket Studio — Recovery Snapshot
Date: 2026-11-04
Latest editable version: Beta 0.1.0
Status: Source packaged; GitHub Pages not deployed; iPhone installation not independently tested.

## Features complete in source
- PWA shell and icons; offline service-worker cache; iPhone Home Screen manifest.
- Responsive dark/light dashboard.
- Project CRUD, status, task add/check/delete.
- Notes CRUD and search.
- Local JSON backup and restore; two-step local data erase confirmation.

## Known risks / remaining QA
- Test Safari iOS 27 Home Screen install and offline cache following GitHub Pages publication. Chromium browser validation was blocked by execution environment policy; only static validation completed.
- Test file download/upload and storage persistence in standalone mode; user must periodically export JSON to Drive.
- No remote sync, multi-device sync, account, push notifications, or native IPA packaging.
- App data stored in localStorage may be lost when website data is cleared or iOS evicts it.
- Validate complete source upload to GitHub Pages and live site before declaring release stable.

## Location
Source package: Skullbound Studios / Reusable Code and Systems / Skullbound Pocket Studio / Current Beta and Builds (once backup upload verified).
Other folders: Source and Assets; QA and Recovery; Stable Releases (reserved until stable verified).

## Recovery steps
1. Extract the zip, check source, manifest, service worker, icons.
2. Upload the contents to a public GitHub repository and turn on GitHub Pages from main/root.
3. Visit the published HTTPS URL, install from Safari Share > Add to Home Screen.
4. Test CRUD, backup import/export, offline launch; document any failures.
