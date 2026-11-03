# Accessibility — fei Bürgerenergie eG

Three hard rules, then the full WCAG 2.1 contrast matrix. These are **not**
negotiable; they are baked into the semantic colour tokens.

## Three hard rules

1. **Body text is always ink.** Navy `#0F172A` (web) or black `#111` (print).
   Never lila, green or yellow for running text.
2. **Yellow is a surface, not text.** Brand yellow `#FFE600` carries **black** text
   on top (14.90:1). It must never be set as type on cream (1.19:1 — illegal).
3. **Lila is the highlight accent.** Reserved for review/testimonial names and
   active form-field focus/borders — sparingly. Large display figures are green
   (yellow on green/navy). Never body text under 18pt.

## Contrast matrix (WCAG 2.1)

Ratios. AA body needs ≥ 4.5:1 · AA Large (≥ 18pt / 14pt-bold) needs ≥ 3.0:1.

| Combination | Ratio | AA Body | AA Large |
|---|---|---|---|
| Black on Cream Soft | **16.49:1** | ✓ AAA | ✓ AAA |
| Navy on Cream Soft | **15.59:1** | ✓ AAA | ✓ AAA |
| Cream on Black | **16.49:1** | ✓ AAA | ✓ AAA |
| Cream on Navy | **15.59:1** | ✓ AAA | ✓ AAA |
| Black on Brand-Yellow | **14.90:1** | ✓ AAA | ✓ AAA |
| Black on Brand-Green | **5.73:1** | ✓ AA | ✓ AAA |
| White on Violett | **5.27:1** | ✓ AA | ✓ AAA |
| Cream on Violett | **4.97:1** | ✓ AA | ✓ AAA |
| Violett on Cream | **4.97:1** | ✓ AA | ✓ AAA |
| Violett on Brand-Yellow | 4.16:1 | ✗ | ✓ AA (titles only) |
| Brand-Yellow on Violett | 4.16:1 | ✗ | ✓ AA (titles only) |
| Brand-Yellow on Black | **14.90:1** | ✓ AAA | ✓ AAA |
| White on Brand-Green | 3.30:1 | ✗ | ✓ AA (buttons ≥14pt bold) |
| Brand-Green on Cream | 3.11:1 | ✗ forbidden | ✓ AA (titles only) |
| Brand-Yellow on Brand-Green | 2.60:1 | ✗ forbidden | ✗ forbidden |
| Brand-Yellow on Cream | 1.19:1 | ✗ forbidden | ✗ forbidden |

Brandkit 07/2026 colours (`#FFE600`, `#565CDE`) measured 2026-09. Coloured
**titles** (green / violet on cream, yellow on violet / black) are display-size only —
never below 24pt. On a green ground titles are **black**, not yellow.

**Consequences for components**
- Green is fine as a *surface* under white text (primary buttons), or as a tiny
  bold accent ≥ 14pt-bold (eyebrows, tags). Do not use green for paragraph text.
- Lila stays a rare **highlight** (review names, form focus) — solid on cream
  (4.97:1) at ≥14pt-bold; never long running paragraphs.
- White text on green/navy/lila is safe. Black text on yellow is safe.

## Other a11y notes
- Focus ring: 2px `--focus-ring` (lila) offset 2px. Keep it visible.
- Hit targets ≥ 44px on touch.
- All decorative motion is gated behind `@media (prefers-reduced-motion: reduce)`
  (counters, fades, shimmer, marquee, pulse dots all stop).
- Brand outline GIF icons are decorative; give them empty `alt=""` or an
  `aria-label` if they carry meaning. They are raster — they do not recolour, so
  never rely on colour-only meaning from them.

## Pantone approximations (spot-colour print only)
Standard print uses the CMYK values from the colour spec. Pantone only matters for
business cards / letterhead / premium stock: Black 6, 532 (Navy), 9184 / Warm Gray 1
(Cream Soft), 7527 (Cream Mid), 2096 (Lila), 7549 (Yellow), 354 (Green).
