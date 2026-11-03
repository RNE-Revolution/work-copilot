# Surfaces — Web vs. Dokument vs. Kampagne

Three surface contexts share one token set. The semantic surface tokens
(`--surface-page`, `--surface-card`, `--surface-sunken`, `--surface-card-soft`)
resolve differently per context — **components never hard-code a surface colour**,
so the same component works in both.

## 1 · Web (default)

The web is **white**. No cream.

- **Page** — white (`--surface-page` = `#FFFFFF`).
- **Cards** — white (`--surface-card`) lifted off the page by a **soft, neutral
  shadow** (`--shadow-card` = `0 10px 25px rgba(17,17,17,.07)`), optionally a
  cool hairline. On hover they lift + the border turns green + shadow deepens
  (`--shadow-green`).
- **Sunken canvas** — a faint cool grey (`--surface-sunken` = `#F5F6F7`) for the
  section background *behind* a group of white cards, so the elevation reads.
- **Icon tiles / subtle fills** — `--surface-card-soft` (= sunken grey on web).

Depth comes from **light and shadow, not from tinting the surface.** This keeps
green / yellow / lila as the only colours on the page.

## 2 · Colored feature cards — allowed, but sparing

Colour on a card surface is a deliberate accent, never the default. Use it to
**highlight one option** in a group or for an **editorial result panel**.

- `--surface-feature` — solid brand green, white text. (`<ServiceCard surface="feature">`, `<Card tone="green">`)
- `--surface-feature-gradient` — green→navy gradient, premium dark card. (`surface="feature-deep"`, `<Card tone="gradient">`)
- `--surface-feature-soft` — a green wash on white, for the quietest emphasis.

**The rule: at most one colored card per card group.** In a 3-up, the middle/
recommended option is the feature card; the rest stay white. Feature cards carry
white text and follow the A11y rules (white on green = 5.73:1, white on the dark
gradient ≫ AA). Stat figures on a feature card use `<StatBlock onDark>`.

Do **not** tint every card, and do not stack two feature cards side by side —
that is the “überladen” look this rule exists to prevent.

## 3 · Document / print context — warm cream paper

The original warm editorial paper is **not gone** — it is reserved for documents:
reports, fact sheets, printed leaflets, PDF exports.

Opt in by adding `class="fei-paper"` (or `data-surface="paper"`) to `<body>` or a
container. That single switch remaps the surfaces:

| Token | Web (default) | `.fei-paper` (document) |
|---|---|---|
| `--surface-page` | `#FFFFFF` white | `#faf8f3` cream-soft |
| `--surface-sunken` | `#F5F6F7` cool grey | `#F5EFE3` cream-mid |
| `--surface-card` | `#FFFFFF` white | `#FFFFFF` white |
| `--surface-card-soft` | `#F5F6F7` cool grey | `#F5EFE3` cream-mid |

Cards stay white so they lift off the cream paper, exactly like the editorial
look the brand started from.

```html
<!-- Web page: nothing to do, white by default -->
<body> … </body>

<!-- A document / PDF: warm cream paper -->
<body class="fei-paper"> … </body>
```

## 4 · Kampagne — Plakat, Flyer, Social (Brandkit 07/2026)

The Brandkit's loud layouts live **only here** — never on the website.
Opt in with `class="fei-kampagne"` and pick a ground:

```html
<body class="fei-kampagne" data-ground="gelb">     <!-- gelb | violett | gruen | schwarz | (none = cream) -->
```

| Ground | Title | Body | Subline / Datum | Bubble | Blitz |
|---|---|---|---|---|---|
| cream (default) | green **or** violet, Bold Italic | black | violet, Medium Italic | yellow / black text | soft yellow outline |
| gelb | black | black | violet | violet / cream text | white outline |
| violett | yellow | cream | cream | yellow / black text | lavender outline |
| gruen | black | white | white | yellow / black text | white outline @55 % |
| schwarz | yellow | cream | violet | yellow / black text | soft yellow outline |

Rules that come with the context:
- **Title and Datum** — one of them italic, in **different** colours. Body always black/ink.
- **Pfeile** (`assets/elements/pfeil-*.svg`) — 1–2 per layout, pointing at the key line or CTA.
  Recolour via `currentColor`-free swap: use the yellow set on dark/violet, the violet set on cream/yellow.
- **Blitz** — outline only, *behind* the title, low-contrast (`--blitz-stroke`). Never the filled logo bolt.
- **Aufruf-/Info-Bubble** — Bold Italic (Aufruf) or Medium Italic (Info), no caps, 90 % leading, centred,
  ≥ 8 % inset from the bubble edge.
- **Foto-Bubble** — desaturated photo, `--photo-tint` (violet by default) via screen blend, circle-masked,
  in a **bottom corner** and cropped by the page edge. Web keeps its gradient scrims instead.
- **Logo** — centred or in a free bottom corner; clear space ≥ ½ logo height; on colour use `logo-weiss.svg`.
- **Formats** — Social: **1080 × 1350 (4:5)** canvas, all text/logo inside the **3:4 grid-crop safe zone**
  (`--social-safe-x` 34 px each side, `--social-safe-y` 80 px top/bottom). Story/Reel cover 1080 × 1920.
  LinkedIn takes the same 4:5 asset. Print: bleed 3 mm, safety A6 5 mm · A4 10 mm · A2 20 mm.
- Full-bleed colour grounds are a **print & social** device. On the web the page stays white.
