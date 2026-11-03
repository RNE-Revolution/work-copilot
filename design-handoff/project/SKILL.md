---
name: fei-buergerenergie-design
description: Use this skill to generate well-branded interfaces and assets for fei Bürgerenergie eG (a citizens' energy cooperative in Franconia), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production
code, you can copy assets and read the rules here to become an expert in designing
with this brand.

If the user invokes this skill without any other guidance, ask them what they want
to build or design, ask some questions, and act as an expert designer who outputs
HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — brand context, content & visual foundations, iconography, index.
- `styles.css` — single entry point; `@import`s all tokens & fonts. Link this.
- `tokens/` — colors, typography, spacing/radii/shadows, fonts (Inter only — display AND body).
- `guidelines/accessibility.md` — the three hard A11y rules + WCAG contrast matrix.
- `guidelines/surfaces.md` — web (white + soft shadow) vs. document (cream paper)
  surface rule; colored feature cards used sparingly (max one per group).
- `guidelines/cards/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — React primitives (Button, ServiceCard, StatBlock, Tag,
  Badge, Card, Eyebrow, Input, Accordion, Avatar, BrandIcon). Each has a
  `.prompt.md` with usage.
- `ui_kits/website/` — full homepage recreation built from the system.
- `assets/brand/` — logo.svg + weiss/Bamberg/Würzburg variants; `assets/elements/` —
  Pfeile (pfeil-1…6), Blitz (outline, behind titles), Aufruf-Bubble, Foto-Bubble.
- `assets/icons/` animated brand outline icons (GIF), `assets/img/` solar photos.

## Three rules you must never break
1. Body text is always navy `#0F172A` (web) / black `#111` (print) — never an accent.
2. Brand yellow `#FFE600` is a *surface* carrying black text; never yellow text on cream.
3. Violett `#565CDE` is display-only (≥18pt): section numbers, big stats, italic markers.

**Two worlds.** WEB = white surfaces, navy headlines, photo scrims, no full-bleed colour.
KAMPAGNE (Plakat, Flyer, Social) = `<body class="fei-kampagne" data-ground="gelb|violett|gruen|schwarz">`:
full-colour grounds, coloured italic titles (green/violet), subline+date in a second colour,
arrows as highlighters, outline Blitz behind the title, Aufruf-Bubble, violet Foto-Bubble in a
bottom corner. Social canvas 1080×1350 (4:5) with the 3:4 grid-crop safe zone. Never mix the two.

**Surfaces:** the web is **white + soft shadow** (no cream). Colored feature cards
(solid green / green→navy gradient, white text) are a deliberate accent — **max one per
card group**. Warm cream is the document/print context only (`<body class="fei-paper">`).
See `guidelines/surfaces.md`.

Type: Inter only. Headlines Bold/Black, often italic, tight tracking; no ALL CAPS.
Use 1–2 arrows per layout as highlighters; the outline Blitz sits behind a title.

Voice: German, informal **du**, mission-driven, three-beat triads
("Sozial. Regional. Demokratisch."). No emoji.
