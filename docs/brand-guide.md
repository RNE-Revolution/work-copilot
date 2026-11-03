# fei Bürgerenergie eG — Design System

A design system for **fei Bürgerenergie eG**, a citizens' energy cooperative
(*Bürgerenergiegenossenschaft*) based in Franconia — Bamberg, Würzburg and the
surrounding region. The cooperative builds and operates renewable-energy projects
that are owned democratically by their members: ~380 members and growing, ~257 kWp
installed across 4 projects with ~500 kWp more in planning.

**Positioning line:** *Energiewende in demokratischen Händen* — "The energy
transition in democratic hands." Three brand values repeat everywhere:
**Sozial. Regional. Demokratisch.** (Social. Regional. Democratic.) The promise is
that the electricity comes from your own neighbourhood and the profit stays there —
"Kein Konzern, keine Gewinnmaximierung" (no corporation, no profit-maximising).

## Products & surfaces

The brand presents a family of renewable-energy offerings ("Energielösungen"):

| Offering | German | What it is |
|---|---|---|
| **Mieterstrom** | Mieterstrom | Rooftop solar feeding tenants directly — cheaper green power, no grid fees |
| **GGV** | Gemeinschaftliche Gebäudeversorgung | One system, many units; energy split virtually. For WEGs / owner communities |
| **Dach-PV** | Dach-Photovoltaik | Rooftop PV on commercial / residential buildings |
| **Freiflächen-PV** | Freiflächen-Photovoltaik | Ground-mounted solar parks in citizen hands |
| **Balkonkraftwerke** | Balkonkraftwerke | Plug-and-play balcony solar for renters |
| **Ladesäulen** | Ladesäulen | EV charging infrastructure |
| **Windkraftbeteiligungen** | Windkraftbeteiligungen | Citizen stakes in wind projects |
| **Kooperationspartner** | — | Partner / cooperation programme |

The public website is built on **Odoo** and styled through *Code Injection*
(a global `<style>` header + a `<script>` footer). The live marketing site leans
on a green-tech aesthetic (white/cream sections, `#16a34a` green, `#FFE600` yellow,
navy `#0F172A`, Inter). **This design system formalises and evolves that
direction into a clean, editorial cooperative identity** — white web surfaces with
soft shadows, navy/black ink, brand green + yellow as the working accents
(green acts, yellow sets accents) with lila reserved as a sparing highlight, and
warm cream reserved for documents/print — governed by strict
accessibility rules (below).

## Sources given
- **Codebase:** `HTML-Pages/` (read-only mount) — Odoo Code-Injection header/footer
  plus per-product page sections (`Landingpage.html`, `Dach-PV.html`,
  `Freiflächen-PV.html`, `Balkonkraftwerke.html`, `Ladesäulen.html`,
  `Windkraftbeteiligungen.html`, `kooperationspartner.html`).
- **Brand colour spec & A11y rules:** supplied as project notes (Sockel-Palette,
  Akzent-Palette, Funktionalfarben, WCAG contrast matrix, Pantone approximations).
- **Brandkit 07/2026 (Shannon Kruse):** `uploads/260807_style-guide_fei.pdf` — logo set,
  Inter as sole typeface, arrows / bolt / bubble elements. Adopted: font, logos, elements.
- **Assets:** 21 animated outline icons (GIF), 2 solar photos (PNG), 2 brand SVG
  illustrations, a Linktree QR code. Copied into `assets/`.
- Live site referenced in copy: `https://www.fei-eg.de`.

---

## CONTENT FUNDAMENTALS

**Language:** German throughout. UI labels, headlines and body are all German.

**Address form — informal "du".** The brand speaks to the reader as *du*, not the
formal *Sie*: "Gestalte gemeinsam mit uns…", "Du hast ein Dach oder eine Idee?",
"deine Region, deine Energie." This is a deliberate community/movement tone — warm,
peer-to-peer, activist-adjacent. (Note: a few legacy product sections slip into
*Sie* — "Sie müssen sich um nichts kümmern." Standardise on **du** for new copy.)

**Voice:** confident, plain-spoken, mission-driven. Short declarative fragments used
as rhythm and emphasis — "Alles aus einer Hand.", "Sozial. Regional. Demokratisch.",
"Die Mitglieder entscheiden." Three-beat triads are a signature device.

**Headlines** are often a rhetorical question or a value claim, set in Inter Bold/Black, often italic:
*"Was wäre, wenn dein Strom aus der Nachbarschaft kommt – und der Gewinn auch dort
bleibt?"* Key words inside a headline get colour or a gradient highlight
("Regionaler Wertschöpfung", "Energielösungen").

**Eyebrows / kickers:** every section title is preceded by a small uppercase,
letter-spaced green label — "Angebote", "Stimmen", "Live Dashboard", "Dein Weg zu".

**Numbers carry the argument.** Stats are front-and-centre and animated counting up:
380 Mitglieder, 257 kWp, 142 t CO₂, 4 % Rendite p.a., 1.500 € Ersparnis. German
number formatting (`1.500`, `4 %` with thin space). Units sit beside the figure in a
smaller, accented weight ("257 **kWp**").

**Casing:** sentence case for body; headlines use normal capitalisation (German noun
capitalisation applies). Eyebrows and tiny labels are UPPERCASE with `0.1em`
tracking. No ALL-CAPS headlines.

**Emoji:** none. The brand never uses emoji. Iconography is carried by the
animated outline-icon set and inline stroke SVGs instead.

**Punctuation:** straight German quotes "…" appear in source; em-dashes and the
middle dot (·) are used as separators ("Bamberg · Würzburg · Franken"). The arrow
glyph "→" (as an inline SVG) follows CTAs.

**CTA copy:** verbs, direct, du-form — "Mitglied werden", "Projektanfrage stellen",
"Jetzt Projekt anfragen", "Mehr erfahren". Primary CTA almost always green pill.

---

## VISUAL FOUNDATIONS

**Overall feel:** warm, editorial, grounded — a cooperative that is local and human,
not a slick energy startup. **Inter is the only typeface** (Brandkit 07/2026 by
Shannon Kruse): display headlines in Inter Bold/Black — often *italic* — over body in
Inter Regular/Medium, on white surfaces with navy ink (warm cream paper is kept for
documents). Hand-drawn arrows, an outline bolt and speech/photo bubbles give the
static layouts their energy.

**Colour & palette.** The web surface is **white** (`--surface-page` / `--surface-card`
= `#FFFFFF`), with depth from soft neutral shadows and a faint cool sunken grey
(`#F5F6F7`) behind card groups; warm cream (`--fei-cream-soft #faf8f3` /
`--fei-cream-mid #F5EFE3`) is reserved for the **document / print context**
(`.fei-paper`). Ink is navy on web (`#0F172A`) or black in print (`#111`).
**Violett `#565CDE`** (Brandkit; token still named `--fei-lila`, alias `--fei-violet`; with **Lavendel `#C9CBF5`** as its soft tint) is a sparing
**highlight** — review/testimonial names and active form-field focus/borders only;
never body text below 18pt. Large display figures are **green** (yellow on green/navy).
**Brand yellow `#FFE600`** (the logo-bolt yellow, Brandkit 07/2026) is a
*surface*, never text: it carries black text (14.90:1) for highlight markers under
keywords and CTA fills, but must never be set as type on a light surface (1.19:1 —
forbidden). **Brand green `#16A34A`** is the impact/action accent: primary CTAs,
project tags, success indicators and eyebrows. The one colored **feature card** per group
uses the green→navy gradient (white text) — solid green is not a card fill (3.30:1). Deep navy (`#060D1A`) and a green→navy gradient drive full-bleed dark panels and
the "Live Dashboard". The full web-vs-document surface rule lives in
`docs/surfaces.md`.

**Three hard A11y rules (no compromise):**
1. Body text is **always** navy `#0F172A` (web) or black `#111` (print) — never
   lila, green or yellow.
2. Yellow is a **surface, not text.** It carries black text; it never writes on a light surface.
3. Lila is a **sparing highlight** — review names & active form-field focus.
   Large display figures are green (yellow on green/navy). Never body under 18pt.
   (Full WCAG contrast matrix lives in `docs/accessibility.md`.)

**Typography.** Inter for everything. Display & headlines in `--weight-bold`…`--weight-black`
(700–900), frequently italic (`--display-style`), tight leading (1.0–1.15) and tight tracking
(`--tracking-display: -0.03em`). Headlines may be set in green or violet (display size only).
Sub-lines and dates take a different colour than the title, set Medium italic. Body is
Inter Regular (1.125rem, leading 1.75), always black/navy. No ALL-CAPS headlines; eyebrows
stay uppercase. Fluid `clamp()` scales: hero `clamp(2.8rem,7vw,5.5rem)`, section
`clamp(2rem,5vw,3rem)`, card title `clamp(1.5rem,3.5vw,2.25rem)`.

**Spacing & layout.** Content max-width `72rem`, prose `48rem`, gutter `1.5rem`.
Sections breathe — vertical padding `5–6rem`. Generous whitespace; centred section
intros (eyebrow → headline → lead).

**Backgrounds.** Mostly flat **white**, with a faint cool grey (`#F5F6F7`) for sunken
sections behind card groups. Colored **feature cards** (green→navy
gradient, white text) add emphasis — sparingly, **max one per card group**. Two photo
treatments: (1) full-bleed **photography** with a navy/green gradient scrim +
`mix-blend-mode: luminosity` for hero & community shots; (2) deep-navy data sections
with a faint 48px grid pattern and a single soft radial glow. Decorative blurred colour
"orbs" (`filter: blur(80px)`, ~0.12–0.22 opacity) float behind dark heroes. No heavy
gradients on light sections; where gradient appears it's a subtle green wash or a
green→yellow **text** clip on a keyword.

**Imagery vibe.** Real, warm, daylight photography — rooftop solar on Franconian
apartment blocks, members at the Generalversammlung, sunny streetscapes. Greenery
present. Not cool/blue, not b&w, no heavy grain. Photos sit in rounded cards or
behind gradient scrims.

**Corner radii.** Service cards `1rem`, large/sticky cards `1.5rem`, buttons & badges
fully pill (`9999px`), small chips/inputs `0.5–0.75rem`.

**Cards.** White fill, soft neutral shadow `0 10px 25px rgba(17,17,17,.07)`, radius
`1rem` (optionally a cool hairline). On hover they **lift** (`translateY(-8px)
scale(1.01)`), the border turns green, and the shadow deepens to a green-tinted
`--shadow-green`. A group may include **one** colored feature card
(`surface="feature"` / `<Card tone="feature">` — green→navy gradient, white text). In the document context
(`.fei-paper`) cards stay white on cream paper. "Sticky stacking" cards (the process
walkthrough) pin with increasing `top` offsets and z-index so they overlap as you scroll.

**Shadows.** Soft & neutral, never harsh black. Resting card ≈ 7% black; lifted ≈
green-tinted 12%; CTAs carry a coloured drop shadow (green or yellow).

**Borders.** Hairlines are a cool, low-contrast line on white (or the warm
`--fei-line #E2D9C6` on cream paper), and `rgba(255,255,255,.08–.2)` on dark. Cards may
use a hairline that animates to green on hover.

**Buttons.** Primary = solid green pill, white bold text, green drop shadow; hover
darkens to `#15803D` and scales up `1.05`. Secondary on dark = translucent white pill
with `backdrop-filter: blur(8px)` and a 1px white border. Highlight/CTA-yellow =
yellow fill with **black** text.

**Hover states.** Cards lift + green border + deeper shadow; buttons darken + scale
up; images inside cards `scale(1.03)`; links go green. Logos in the partner marquee
de-saturate→saturate on hover.

**Press / active states.** Buttons settle back toward resting scale; no hard color
inversion. Accordion toggles rotate their "+" icon 45° and flip its chip to green.

**Animation.** Signature easing `cubic-bezier(0.16, 1, 0.3, 1)`. Scroll-reveal
fade-ins (`opacity 0→1`, `translateY(30px)→0`, 0.8s) with staggered `data-delay`.
Counters ease-out over 2s. A shimmer gradient sweeps highlighted headline words
(4s linear). A live "pulse" dot (green) marks real-time data. SVG line charts
animate their stroke draw-on. Partner logos auto-scroll in an infinite marquee
(pauses on hover). **Brand outline icons are animated GIFs** (navy stroke, yellow
accent, looping line-draw). All decorative motion respects
`prefers-reduced-motion: reduce`.

**Transparency & blur.** Used on dark surfaces only: translucent white pills/cards
with `backdrop-filter: blur(8px)` for chips and secondary buttons over photos;
dashboard cards are `rgba(255,255,255,.04)` glass on navy.

**Fixed elements.** Hero scroll-indicator dot pinned bottom-centre. Sticky process
cards. Marquee. Otherwise standard document flow.

---

## THREE CONTEXTS

| | Web (default) | Dokument `.fei-paper` | Kampagne `.fei-kampagne` |
|---|---|---|---|
| Ground | white | warm cream | cream **or** full-bleed gelb / violett / grün / schwarz |
| Headlines | navy, Inter 800–900 | navy/black | **green or violet, Bold Italic**; subline + date in a second colour |
| Photos | gradient scrim + luminosity | rounded cards | **violet Foto-Bubble** in a bottom corner |
| Decoration | soft shadows, orbs | none | **Pfeile, outline Blitz, Aufruf-Bubble** |
| Used for | fei-eg.de, apps, dashboards | reports, PDFs, fact sheets | **Plakate, Flyer, Instagram/LinkedIn posts** |

The Brandkit (07/2026) direction is adopted for **Kampagne only**; the website keeps its
current state. Full details and the ground/colour table: `docs/surfaces.md` §4.

**Social formats (researched 09/2026).** Design feed posts at **1080 × 1350 px (4:5)** — the
size both Instagram and LinkedIn recommend and that takes the most mobile screen space. The
Instagram profile grid previews at **3:4**, so a 4:5 post loses ~7 % top/bottom there (and squares
get side-cropped) — keep text and logo inside the centred 3:4 window (`--social-safe-x/y`). Carousels:
all slides one ratio. Stories / Reel covers 1080 × 1920. Instagram also accepts native 3:4
(1080 × 1440) uploads; use it only for grid-puzzle posts, otherwise stay on one 4:5 master for both networks.

## ICONOGRAPHY

The brand has **two icon registers**:

1. **Animated outline icons (the brand set).** A library of looping **GIF** icons
   (`400×400`, ~62 frames) drawn as rounded **navy outlines with a yellow accent**
   element that animates a line-draw / wiggle loop. These are the distinctive brand
   icons — used for service tiles, feature bullets, impact stats. 21 are bundled in
   `assets/icons/` (solar-panel, electric-car, bar-chart-growth, dividends, home,
   location-pin, approve-checked, clock-time, consultation, growing-plant, recycling,
   water-drop, cloud, magnifier-search, bicycle, person-protest, privacy-policy,
   rules, glasses-eye, desert, melting-glacier). Use them at 40–96px; place on white
   or any light surface, never on yellow (the brand-yellow accent would disappear).
   They are raster GIFs (navy stroke + brand-yellow `#FFE600`) — use as-is.

2. **Inline stroke SVGs (UI utility icons).** The live site uses Heroicons-style
   2px-stroke line icons inline (`fill:none; stroke:currentColor; stroke-width:2`)
   for arrows (→ on CTAs), checkmarks in benefit lists, the bolt/home/sun service
   glyphs, and stars in testimonials. These inherit `currentColor`, so they take the
   accent colour of their context (green, yellow, white). For UI work, use
   **[Heroicons](https://heroicons.com)** (outline, 2px) as the matching CDN set —
   this is the closest match to the inline SVGs already in the codebase. *(Flagged
   substitution: the codebase hand-inlines individual Heroicons paths rather than
   loading a named library; Heroicons outline is the documented match.)*

**Logo.** `assets/brand/logo.svg` — yellow bolt `#FFE600` + black "fei" wordmark, slightly
rotated. Variants: `logo-weiss.svg` (white wordmark for dark/coloured grounds), Lokalgruppen
`logo-bamberg.svg`, `logo-wuerzburg.svg` (+ `-weiss-` versions). Placement: centred or in a
free corner, preferably bottom. Clear space = at least half the logo height on all sides.
Never recolour the bolt.

**Brandkit elements** (`assets/elements/`, from the 07/2026 Brandkit):
- **Pfeile** `pfeil-1…6.svg` — hand-drawn curved arrows with rounded caps, in yellow `#FFE600`
  or violet `#565CDE` (green also allowed). Highlighters that point at the key line or CTA
  and add motion to a static layout. Scale the stroke with the format; 1–2 per layout.
- **Blitz** `blitz.svg` — outline-only bolt in soft yellow `#FFF48F`. Sits *behind* a title,
  deliberately subtle so it doesn't repeat the logo bolt.
- **Aufruf-Bubble** `aufruf-bubble.svg` — yellow speech bubble (violet/green possible) for
  calls-to-action and extra info. Text centred, Bold Italic, no caps, 90 % leading, generous
  inset from the edge. Text in black on yellow (or warm white on violet/green).
- **Foto-Bubble** `foto-bubble.svg` — circle mask for a photo, tinted violet (screen blend over
  a desaturated photo), placed in a bottom corner and cropped by the edge.

**Brand illustrations.** Two flat vector SVGs in `assets/brand/`:
`drei-icons-pv-emobility-kreislauf.svg` (PV array / e-mobility / energy-cycle trio,
soft pastel flat style) and `unsere-leistungen.svg` (services overview). Plus the
`linktree-qr.png`.

**Emoji / unicode:** no emoji anywhere. Unicode used only as typographic separators
(`·`, `–`, `→`, thin spaces in numbers), not as icons.

---

## INDEX

See the repository `README.md` for the package layout, components and usage.
The original Claude Design handoff (HTML prototypes, specimen cards, chats) lives in
`design-handoff/`.
