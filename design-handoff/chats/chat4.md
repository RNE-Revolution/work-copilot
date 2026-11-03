# Chat

_Started 2026-07-17 08:54 UTC_

---

## User

Continuing from "Farbregeln für Hintergründe".

## Assistant

We were consolidating the color hierarchy across the entire fei Design System — moving from three equal accent colors (green, yellow, purple) to a clear hierarchy: green handles actions, yellow sets accents (especially on green/navy backgrounds), and purple reserves for review names and form focus only.

Decisions made:
- Display figures (large numbers) turn green on white, yellow on green/navy backgrounds.
- Purple becomes `--accent-highlight` — only for testimonial author names and active form fields (focus rings, input borders).
- Removed purple as a selectable option from ServiceCard, Eyebrow, and StatBlock component types to enforce the rule going forward.
- Kept Avatar with purple (appears in testimonials), and the "Sozial · Regional · Demokratisch" triad retains purple in its final word as a brand lockup exception.
- Regenerated the standalone marketing site bundle from source since it contained frozen, pre-change tokens and component code.

Current state: All token-level changes (`--accent-display` → green, new `--accent-highlight` → purple) propagated automatically. Source components updated (StatBlock, Eyebrow, Avatar, ServiceCard, Input, Testimonials). Documentation refreshed (readme.md, accessibility guidelines, design system slides 4–5, color cards). The standalone website bundle was regenerated to pick up all edits and now shows consistent color usage across live and exported versions.

Open: Verify the full bundled site renders correctly with the new tokens and that no other hidden bundles or frozen exports remain.

Project files: tokens/colors.css, readme.md, fei Design System.html, fei Bürgerenergie - Website.html, components/core/StatBlock.jsx/.d.ts, components/core/Eyebrow.jsx/.d.ts, components/core/ServiceCard.jsx/.d.ts, components/core/Input.jsx, ui_kits/website/Testimonials.jsx, ui_kits/website/Services.standalone.jsx, guidelines/accessibility.md.

