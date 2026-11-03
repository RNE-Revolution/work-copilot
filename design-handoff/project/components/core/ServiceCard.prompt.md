The fei offering tile — a brand icon, an Inter bold title, a description, and a "Mehr erfahren →" link. Lifts up and turns its border green on hover (the signature card interaction). Compose these in a 2-up grid.

```jsx
<ServiceCard icon="solar-panel" title="Mieterstrom" href="/mieterstrom"
  iconBase="../../assets/icons">
  Solaranlage aufs Dach, Strom direkt zu den Mietern – ohne Netzgebühren.
</ServiceCard>
```

`icon` accepts a BrandIcon name or any node. `accent` colours the CTA (`green | yellow`).

`surface` controls the card fill: `plain` (white + soft shadow, the web default), `feature` (solid brand-green, white text) or `feature-deep` (green→navy gradient). Colored surfaces are a deliberate accent — **use at most one per card group** (e.g. the highlighted option in a 3-up). Cream is never a web card surface; it belongs to the document/print context (`.fei-paper`).
