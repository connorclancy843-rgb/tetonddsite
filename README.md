# Teton Development & Design — tetondd.com

Marketing site for Teton Development & Design, a spec-home development partnership
in Teton Valley, Idaho (Victor · Driggs). Landowners contribute a lot, capital
partners fund the build, and the team runs design through closing.

## Stack

A small static site — no framework, no build step. The only external requests are
Google Fonts (Newsreader, Archivo, IBM Plex Mono).

### Pages

- `index.html` — homepage (video hero, partner lanes, selected work, process, valley,
  team, contact form).
- `landowners.html` → `/landowners` — the landowner pitch + FAQ.
- `investors.html` → `/investors` — the capital-partner pitch + FAQ.
- `projects.html` → `/projects` — the project grid.

Clean URLs (`/landowners`, not `/landowners.html`) come from `vercel.json`
(`cleanUrls: true`, `trailingSlash: false`).

### Shared assets

- `css/tdd.css` — the shared stylesheet: reset, type scale, nav, buttons, dark
  sections, footer, scroll-reveal. **Every page links it**, so a change to the nav
  or footer here updates all four pages at once.
- `js/tdd.js` — the shared script: footer year, mobile-nav toggle (with
  Escape-to-close), the topographic contour hero, scroll-reveal, and — guarded so
  they no-op on interior pages — the homepage hero-video and Formspree inquiry form.
- `index.html` links both shared files and keeps a small inline `<style>` for its
  homepage-only sections plus a few deliberate overrides (larger display type,
  airier band spacing). Interior page styling lives entirely in `css/tdd.css`.

### Other files

- `img/` — hero, interior, detail, exterior, portrait, team, logo, and per-project
  renderings. `media/home.mp4` + `media/home-poster.jpg` — the hero video.
- `og.png`, `favicon*.png`, `apple-touch-icon.png` — social/preview and icon assets.
- `sitemap.xml`, `robots.txt` — reference the canonical **www** host
  (`https://www.tetondd.com`), matching the `<link rel="canonical">` on every page.

## Editing

Edit the HTML/CSS/JS directly and commit. There is nothing to compile.

- Shared look and behaviour (nav, footer, buttons, contour, reveal) → `css/tdd.css`
  / `js/tdd.js` — changes propagate to all pages.
- Homepage-only sections → the inline `<style>` in `index.html`.
- Per-page copy, meta tags, and JSON-LD → that page's HTML `<head>`/`<body>`.

## Deploy (Vercel)

Static, no build command and no framework preset — Vercel serves the files as-is.
Point the project's root at this repo and deploy. Custom domain: tetondd.com.
Canonical host is `www.tetondd.com`; the bare apex should redirect to it.

## Open content TODOs

- **Per-home specs (optional)** — homes in the Selected work schedule are labelled by
  address and status. Add exact square footage and bed/bath per home when available
  for stronger, non-templated proof.
- **Remaining project renderings** — 475 Silver Fox Lane, 6192 Peregrine Drive and
  5441 Painted Pony Drive still show "Renderings coming soon" placeholders on
  `/projects`; drop in `img/projects/*.jpg` captures as they're ready.
