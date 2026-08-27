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

The page ships with a few bracketed placeholders to fill in with real numbers:

- `[ADD RANGE]` — typical ground-break-to-closing timeline (Landowners lane).
- `[SQ FT] · [BD/BA]` — specs on each home in the Selected work schedule.
- `[ADD]` — years of local relationships (The valley section).
- Photo slots (hero, interior, detail, aerial, portrait) are placeholders marked
  in the markup, waiting on real photography.
