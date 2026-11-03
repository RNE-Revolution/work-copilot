---
name: fei-buergerenergie-design
description: Use this skill to generate well-branded interfaces and assets for fei Bürgerenergie eG (a citizens' energy cooperative in Franconia), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `README.md` and `docs/brand-guide.md` within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production
code, you can copy assets and read the rules here to become an expert in designing
with this brand.

If the user invokes this skill without any other guidance, ask them what they want
to build or design, ask some questions, and act as an expert designer who outputs
HTML artifacts _or_ production code, depending on the need.

## Quick map
- `README.md` — package usage; `docs/brand-guide.md` — brand context, content & visual foundations, iconography.
- `src/styles/index.css` (built: `dist/styles.css`) — single entry point: tokens, fonts, base, component classes.
- `src/styles/tokens/` — colors, typography, spacing/radii/shadows, fonts (Inter only — display AND body).
- `docs/accessibility.md` — the hard A11y rules + WCAG contrast matrix.
- `docs/surfaces.md` — web (white + soft shadow) vs. document (`.fei-paper`) vs. Kampagne
  (`.fei-kampagne`); colored feature cards used sparingly (max one per group).
- `src/components/` — React/TS components (Button, ServiceCard, StatBlock, Tag, Badge, Card,
  Eyebrow, Input, Accordion, Avatar, BrandIcon, Logo + Kampagne elements Blitz, Bubble, FotoBubble, Pfeil).
- `demo/` — specimen page, full marketing website, Kampagne social post (`npm run dev`).
- `assets/brand/` — logos + illustrations; `assets/elements/` — Pfeile, Blitz, Bubbles;
  `assets/icons/` animated outline GIFs; `assets/img/` solar photos.

## Three rules you must never break
1. Body text is always navy `#0F172A` (web) / black `#111` (print) — never an accent.
2. Brand yellow `#FFE600` is a *surface* carrying black text; never yellow text on cream.
3. Violett `#565CDE` only highlights: testimonial/reviewer names and active form-field focus.
   Big display figures are green on white, yellow on green/navy. Never violet on green.

**Two worlds.** WEB = white surfaces, navy headlines, photo scrims, no full-bleed colour.
KAMPAGNE (Plakat, Flyer, Social) = `<body class="fei-kampagne" data-ground="gelb|violett|gruen|schwarz">`:
full-colour grounds, coloured italic titles (green/violet), subline+date in a second colour,
arrows as highlighters, outline Blitz behind the title, Aufruf-Bubble, violet Foto-Bubble in a
bottom corner. Social canvas 1080×1350 (4:5) with the 3:4 grid-crop safe zone. Never mix the two.

**Surfaces:** the web is **white + soft shadow** (no cream). Colored feature cards
(always the green→navy gradient, white text) are a deliberate accent — **max one per
card group**. Warm cream is the document/print context only (`<body class="fei-paper">`).
See `guidelines/surfaces.md`.

Type: Inter only. Headlines Bold/Black, often italic, tight tracking; no ALL CAPS.
Use 1–2 arrows per layout as highlighters; the outline Blitz sits behind a title.

Voice: German, informal **du**, mission-driven, three-beat triads
("Sozial. Regional. Demokratisch."). No emoji.
