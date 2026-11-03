# fei Design System

Design System der **fei Bürgerenergie eG**: Design-Tokens, React-Komponenten (TypeScript),
Brand-Assets und Demo-Seiten. Umgesetzt aus dem Claude-Design-Handoff (`design-handoff/`)
auf dem finalen Stand vom 09/2026.

> **Grün handelt · Gelb setzt Akzente · Violett hebt hervor.**
> Web ist weiß mit soften Schatten. Cream gehört Dokumenten. Vollflächen nur in Kampagnen.

## Schnellstart

```bash
npm install
npm run dev        # Demo: Specimen, Website, Kampagne (http://localhost:5173)
npm test           # Komponenten-Tests (Vitest)
npm run build      # Bibliothek → dist/index.js, dist/styles.css, dist/types
npm run build:demo # statische Demo → dist-demo/
```

## Verwenden

```tsx
import '@fei/design-system/styles.css';
import { FeiAssets, ArrowRightIcon, Button, ServiceCard, StatBlock } from '@fei/design-system';

// den Ordner assets/ dieses Pakets z. B. nach /static/fei kopieren
<FeiAssets base="/static/fei">
  <Button iconRight={<ArrowRightIcon />}>Mitglied werden</Button>
  <ServiceCard icon="solar-panel" title="Mieterstrom" href="/mieterstrom">
    Solarstrom direkt zu den Mietern — ohne Netzgebühren.
  </ServiceCard>
  <StatBlock value="257" unit="kWp" label="Installiert" />
</FeiAssets>
```

Ohne React: `dist/styles.css` (oder nur die Tokens: `src/styles/tokens.css`) einbinden und die
`fei-*`-Klassen bzw. `--fei-*` / semantischen Custom Properties direkt nutzen.

### Drei Kontexte

| Kontext | Aktivierung | Wofür |
|---|---|---|
| **Web** (Default) | nichts | fei-eg.de, Apps, Dashboards — weiß, Navy-Headlines, Foto-Scrims |
| **Dokument** | `class="fei-paper"` | Berichte, PDFs, Datenblätter — warmes Cream-Papier, weiße Cards |
| **Kampagne** | `<Kampagne ground="gelb">` bzw. `class="fei-kampagne" data-ground="…"` | Plakat, Flyer, Social — Vollflächen, farbige kursive Titel, Pfeile, Blitz, Bubbles |

Gründe: `cream` (Default) · `gelb` · `violett` · `gruen` · `schwarz`. Social-Format 1080 × 1350 (4:5)
mit 3:4-Safe-Zone (`--social-safe-x/y`). Details: `docs/surfaces.md`.

## Inhalt

```
src/
  styles/tokens/     colors · typography · spacing · fonts (Inter)
  styles/index.css   Einstieg: Tokens + Base + Komponenten-Klassen
  components/        Accordion Avatar Badge BrandIcon Button Card Eyebrow Input Logo
                     ServiceCard StatBlock Tag · Kampagne (Kampagne, Blitz, Bubble, FotoBubble, Pfeil)
                     · Icons (ArrowRight, Plus, Star) · FeiAssets (Asset-Pfad)
assets/              brand/ (Logos, Illustrationen, QR) · elements/ (Pfeile, Blitz, Bubbles)
                     icons/ (21 animierte Outline-GIFs) · img/ (Solar-Fotos)
demo/                index (Specimen) · website (Marketing-Site) · kampagne (Social-Post)
docs/                brand-guide · surfaces · accessibility
design-handoff/      Original-Export aus Claude Design (Prototypen, Chats) — Referenz
SKILL.md             Agent-Skill-Einstieg für künftige Claude-Sessions
```

## Regeln, die die Komponenten erzwingen

1. Fließtext immer Navy `#0F172A` (Web) / Schwarz `#111` (Print).
2. Gelb `#FFE600` ist Fläche mit schwarzem Text — nie Textfarbe auf Hell.
3. Violett `#565CDE` nur für Rezensenten-Namen und aktive Formularfelder (Fokus); `StatBlock`,
   `Eyebrow`, `ServiceCard` bieten kein Lila an. Display-Zahlen: grün auf Weiß, gelb auf Grün/Navy.
4. Nie Violett auf Grün.
5. Funktionalfarben nur Success (Grün) und Warning (Orange, trägt auch Formularfehler).
6. Max. eine farbige Feature-Card pro Gruppe — immer im Grün→Navy-Verlauf (`surface="feature"`,
   `<Card tone="feature">`). Vollgrün ist keine Card-Fläche: Weiß auf Grün hat nur 3,30:1.

Bewegung respektiert `prefers-reduced-motion`; Fokus ist überall sichtbar (Violett-Ring).
