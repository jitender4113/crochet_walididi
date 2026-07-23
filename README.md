# Crochet Wali Didi — Home Page

## Setup
```bash
npm install
npm run dev
```

## Notes
- Images use picsum.photos placeholders (seeded, so they're stable) — swap the `image` URLs in `src/data/homeData.js` for real product photography.
- Fonts (Fraunces, Manrope, Caveat) load from Google Fonts in `index.html`.
- Signature element: `src/components/ui/StitchDivider.jsx` — an animated chain-stitch SVG divider used between sections.
- This sandbox has no network access, so `npm install` / build could not be run here to verify — the code was reviewed manually for import/export and Tailwind-token consistency, but please run `npm install && npm run dev` locally as a first check.
