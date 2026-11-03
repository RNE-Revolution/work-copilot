# Chat

_Started 2026-09-21 06:21 UTC_

---

## User

Continuing from "Fei-Brand-Design Übernahme".

## Assistant

Wir haben das fei-Design-System um die neue Brand-Grafik deiner Freundin erweitert – Schrift (Inter), Pfeile, Logos, Blitze und Bubbles sind jetzt integriert.

**Entscheidungen:**

- Gelb von `#EAB308` → `#FFE600`, Violett von `#6544D1` → `#565CDE` – beide Farben neu als Tokens mit Hover/Tint-Derivaten.
- Headline-Styling (kursiv, farbig) nur für Kampagnen (Plakat, Flyer, Social) – Web bleibt bei Navy, weiß, Scrims.
- Foto-Bubble (Violett, Kreis) für Social/Print; Web bleibt bei Gradient-Scrims.
- Cream bleibt als Warm-Weiß.
- Social-Standard: 1080 × 1350 px (4:5 Hochformat), Safe-Zone für 3:4-Grid-Zuschnitt; LinkedIn/Instagram nutzen dasselbe Format mit höchstem Engagement.
- Vollflächen-Hintergründe nur im Druck, nicht im Web.

**Aktueller Stand:**

- Tokens aktualisiert (Farben, Spacing, Accessibility-Ratios gerechnet).
- Neue Karte „Kampagne – Gründe & Social-Format" mit vier farbigen Beispielkacheln (Titel gekürzt auf „Strom von nebenan", passt jetzt in alle vier).
- Dokumentation in `guidelines/surfaces.md`, `accessibility.md`, `SKILL.md` und readme.
- Verifier-Agent hat Issues gefunden und Beispieltitel angepasst.

**Nächste Schritte offen:**

- Social-Post-Template (1080 × 1350 px) mit Kampagnen-Elementen erzeugen?
- Plakat-Template auf dieser Basis?

**Projektdateien:** `fei Design System.html`, `tokens/colors.css`, `tokens/spacing.css`, `guidelines/surfaces.md`, `guidelines/accessibility.md`, `guidelines/cards/kampagne-gruende.html`, `SKILL.md`, `readme.md`, Components (`BrandIcon.jsx`), `thumbnail.html`.

