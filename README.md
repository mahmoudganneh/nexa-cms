# Nexa CMS — local prototype

A bilingual Arabic/English CMS dashboard built with HTML, CSS and vanilla JavaScript.

## Run
Open `index.html` in a modern browser. For best results, run a local static server (for example, VS Code Live Server).

## Demo accounts
- Admin: `admin@nexa.local` / `demo123`
- Editor: `editor@nexa.local` / `demo123`
- Author: `author@nexa.local` / `demo123`

## Included
- Arabic RTL / English LTR switch
- Demo sign-in and session state
- Dashboard statistics
- Create/edit/delete content (delete is admin-only)
- Content search, categories overview, media previews, users and settings
- LocalStorage persistence

## Important security note
This is a learning prototype only. Credentials and role data are stored client-side and are not secure. Never deploy it as a real multi-user system. For production, use a backend API, server-side authentication, password hashing, authorization checks on every API route, and a real database. LocalStorage is not a shared database. Media previews use temporary browser object URLs and do not upload files.
