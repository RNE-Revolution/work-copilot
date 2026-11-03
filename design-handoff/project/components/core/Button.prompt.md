Pill-shaped action button — use for any CTA or form submit; green `primary` is the default, `highlight` (yellow) is reserved for the single most important conversion action.

```jsx
<Button variant="primary" iconRight={<Arrow />}>Mitglied werden</Button>
<Button variant="highlight">Jetzt Projekt anfragen</Button>
<Button variant="inverse" href="/projekte">Laufende Projekte</Button>
```

Variants: `primary` (green, white text), `highlight` (yellow fill, **black** text — never put yellow text on cream), `secondary` (white, navy text, hairline), `ghost` (text-only green), `inverse` (translucent glass for dark/photo heroes). Sizes `sm | md | lg`. Pass `href` to render an anchor. Hover lifts + darkens; respects disabled.
