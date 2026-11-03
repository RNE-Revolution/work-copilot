Base surface container — white fill, 2px hairline border, soft warm shadow, 1rem radius. The building block for most boxed content.

```jsx
<Card>…</Card>
<Card tone="cream" padding="var(--space-5)">…</Card>
<Card tone="navy">…</Card>
```

Tones: `white` (default), `cream`, `navy` (dark/inverse). Set `interactive` for the hover-lift + green-border behaviour (add the `.fei-card--interactive` hover rule in your CSS, or use `ServiceCard` which bakes it in).
