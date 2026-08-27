# Teton Development & Design — tetondd.com

Marketing site for Teton Development & Design, a spec-home development partnership
in Teton Valley, Idaho (Victor · Driggs). Landowners contribute a lot, capital
partners fund the build, and the team runs design through closing.

## Stack

A single self-contained static page — no framework, no build step.

- `index.html` — the entire site. CSS and JS are inlined; the only external
  requests are Google Fonts (Newsreader, Archivo, IBM Plex Mono).
- `vercel.json` — static hosting config (`cleanUrls`, no `trailingSlash`).

## Editing

Edit `index.html` directly and commit. There is nothing to compile.

## Deploy (Vercel)

Static, no build command and no framework preset — Vercel serves `index.html`
as-is. Point the project's root at this repo and deploy. Custom domain: tetondd.com.

## Open content TODOs

Text placeholders are filled (timeline, ~4,000 sq ft per home, 10+ years of local
relationships). Still outstanding:

- **Photography** — the hero, interior, detail, aerial, and portrait slots are still
  placeholders marked in the markup, waiting on real images.
- **Per-home specs (optional)** — every home in the Selected work schedule currently
  reads "± 4,000 sq ft". Swap in exact square footage and bed/bath per home when
  available for stronger, non-templated proof.
