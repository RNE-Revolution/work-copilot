# UI Kit — fei Marketing Website

A high-fidelity recreation of the **fei Bürgerenergie eG** public homepage,
rebuilt from the live Odoo site (`HTML-Pages/Landingpage.html`) using this design
system's tokens and `core/` components — rendered in the system's warm cream
editorial palette.

## Run
Open `index.html`. It loads React UMD + Babel, the compiled `_ds_bundle.js`
(two levels up), `styles.css`, then each section file.

## Sections (one file each)
| File | Component | Source section |
|---|---|---|
| `Header.jsx` | `SiteHeader` | sticky nav |
| `Hero.jsx` | `Hero` | navy photo hero + hero stats |
| `Services.jsx` | `Quote`, `Services` | quote band + 4 service cards |
| `Process.jsx` | `Process` | "Dein Weg zu" step walkthrough |
| `Dashboard.jsx` | `Dashboard` | dark "Live Dashboard" data section |
| `Testimonials.jsx` | `Testimonials`, `SiteFooter` | member voices + footer |

Each file attaches its component(s) to `window`; `index.html` composes them.

## Components used from the system
`Button`, `Eyebrow`, `Tag`, `Card`, `ServiceCard`, `StatBlock`, `Avatar`,
`BrandIcon` (via ServiceCard). Asset paths point at `../../assets/`.

## Fidelity notes
- Structure, copy and stats are faithful to the live site (380 members, 257 kWp,
  142 t CO₂, the four offerings, the 4-step process, member quotes).
- Palette is the **evolved cream editorial system** (the live site uses
  white/green) — this kit demonstrates the brand in the design system.
- The hero/process/dashboard photography uses the two bundled solar PNGs; the live
  site additionally pulls Generalversammlung and community photos from its CMS.
- Live counters, scroll-reveal and the animated SVG chart are shown in static
  end-state here; the live `Code-Injection-Footer.html` drives the JS versions.
