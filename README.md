# Olha Tsurika — portfolio

Personal portfolio of Olha Tsurika, AI Architect & Senior Product Designer (Aarhus, Denmark).
Static site, no build step. Languages: English, Danish, Ukrainian.

## Folder structure

```
/
├── index.html          page markup + <head> (title, description, social tags, favicons)
├── 404.html            "Page not found" with a link back
├── .nojekyll           tells GitHub Pages to serve files as they are
├── robots.txt
├── README.md
└── assets/
    ├── css/styles.css  colours (design tokens), keyframes, responsive rules
    ├── js/main.js      image map, all texts (EN/DK/UA), case studies, animations, renderer
    ├── img/me/         olha-photo.webp, olha-avatar.webp, olha-about.webp
    ├── img/projects/   case covers (<project>.webp) and case images (<project>-01.webp …)
    ├── img/og/         og-image.jpg (1200×630, social sharing)
    ├── icons/          favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, contact icons
    └── files/          Olha_Tsurika_CV.pdf
```

Fonts load from Google Fonts and the renderer loads React 18 from unpkg.com, so the page needs an internet connection.

## Where to edit

- **Texts and translations:** `assets/js/main.js`. Search for `T6 = {` (hero, about, how I work, services) and `translations` (the rest). Each language is a block: `en`, `dk`/`da`, `ua`/`uk`.
- **Case studies:** `main.js`, search `cases = [`.
- **Order of cases in Selected work:** `main.js`, search `const featured = [`.
- **Live projects:** `main.js`, search `const liveList = [`.
- **Contacts:** `main.js`, search `contacts: [`.
- **Colours:** top of `assets/css/styles.css`. Accent: `--accent: #FA3600`.
- **New images:** put them in `assets/img/projects/` (lowercase, no spaces) and reference them as `assets/img/projects/name.webp`, or add a line to `window.OLHA_ASSETS` at the top of `main.js`.

## Deploy to GitHub Pages

1. Create a repository (for example `olha-portfolio`) and upload **the contents of this folder** to the root of the `main` branch. `index.html` and `.nojekyll` must be at the top level (on macOS press Cmd+Shift+. to see hidden files).
2. Settings → Pages → Source: *Deploy from a branch*, Branch `main`, folder `/ (root)` → Save.
3. After a minute the site is live at `https://<username>.github.io/olha-portfolio/`.

**Custom domain (optional):** add a file named `CNAME` with your domain on one line (e.g. `olhatsurika.com`), set the same domain in Settings → Pages, and point the DNS to GitHub Pages (A records 185.199.108.153, .109.153, .110.153, .111.153; CNAME `www` → `<username>.github.io`). Then also add `<link rel="canonical">` and absolute `og:image` URLs in `index.html`.

## Test locally

Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.
