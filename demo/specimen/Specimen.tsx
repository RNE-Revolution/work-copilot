import type { ReactNode } from 'react';
import {
  Accordion, ArrowRightIcon, Avatar, Badge, BRAND_ICON_NAMES, BrandIcon, Button, Card, Eyebrow,
  Input, Logo, Pfeil, ServiceCard, StatBlock, Tag,
} from '@fei/design-system';

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="sp-section">
      <Eyebrow>{kicker}</Eyebrow>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const Label = ({ children }: { children: ReactNode }) => <p className="sp-label">{children}</p>;

function Swatch({ token, name, hex, note }: { token: string; name: string; hex: string; note?: string }) {
  return (
    <div className="sp-sw">
      <div className="sp-sw__chip" style={{ background: `var(${token})` }} />
      <div className="sp-sw__meta">
        <b>{name}</b>
        {hex}{note && <> · {note}</>}<br />
        <code>{token}</code>
      </div>
    </div>
  );
}

const INK = [
  { token: '--fei-navy', name: 'Navy Anker', hex: '#0F172A', note: 'Web-Text' },
  { token: '--fei-black', name: 'Schwarz Anker', hex: '#111111', note: 'Print-Text' },
  { token: '--fei-ink-700', name: 'Ink 700', hex: '#334155', note: 'sekundär' },
  { token: '--fei-ink-500', name: 'Ink 500', hex: '#64748B', note: 'muted' },
  { token: '--fei-navy-900', name: 'Navy 900', hex: '#060D1A', note: 'Dashboard' },
];
const ACCENTS = [
  { token: '--fei-green', name: 'Marken-Grün', hex: '#16A34A', note: 'handelt' },
  { token: '--fei-green-700', name: 'Grün 700', hex: '#15803D', note: 'Hover · Success' },
  { token: '--fei-yellow', name: 'Marken-Gelb', hex: '#FFE600', note: 'Fläche, nie Text' },
  { token: '--fei-yellow-soft', name: 'Gelb Soft', hex: '#FFF48F', note: 'Outline-Blitz' },
  { token: '--fei-lila', name: 'Violett', hex: '#565CDE', note: 'hebt hervor' },
  { token: '--fei-lavender', name: 'Lavendel', hex: '#C9CBF5', note: 'Tint' },
];
const SURFACES = [
  { token: '--fei-white', name: 'Weiß', hex: '#FFFFFF', note: 'Web Page + Card' },
  { token: '--surface-sunken', name: 'Sunken', hex: '#F5F6F7', note: 'hinter Card-Gruppen' },
  { token: '--fei-cream-soft', name: 'Cream Soft', hex: '#FAF8F3', note: 'nur Dokument' },
  { token: '--fei-cream-mid', name: 'Cream Mid', hex: '#F5EFE3', note: 'nur Dokument' },
  { token: '--fei-success', name: 'Success', hex: '#15803D', note: 'funktional' },
  { token: '--fei-warning', name: 'Warning', hex: '#D97706', note: 'Hinweis + Fehler' },
];

const RULES = [
  ['Body-Text ist immer Ink.', 'Navy #0F172A (Web) oder Schwarz #111 (Print). Nie Grün, Gelb oder Violett.'],
  ['Gelb ist Fläche, kein Text.', '#FFE600 trägt schwarzen Text (14,9:1). Gelb auf Weiß/Cream ist verboten (1,19:1).'],
  ['Violett hebt nur hervor.', 'Rezensenten-Namen und aktive Formularfelder. Große Display-Zahlen sind grün (gelb auf Grün/Navy).'],
  ['Nie Violett auf Grün.', 'Auf grünem Grund übernimmt Gelb alle Akzente — Kennzahlen, CTAs, Banner.'],
];

const SPACES = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-10', '--space-12', '--space-16'];

export function Specimen() {
  return (
    <div className="sp">
      <div className="sp-top">
        <Logo height={48} />
        <nav aria-label="Seiten">
          <a href="#farben">Farben</a><a href="#typo">Typo</a><a href="#raum">Raum</a>
          <a href="#komponenten">Komponenten</a><a href="#marke">Marke</a>
          <a href="./website.html">Website →</a><a href="./kampagne.html">Kampagne →</a>
        </nav>
      </div>
      <Eyebrow>Design System</Eyebrow>
      <h1>fei Bürgerenergie eG</h1>
      <p className="sp-lead">
        Grün handelt · Gelb setzt Akzente · Violett hebt hervor. Web ist weiß mit soften Schatten,
        Cream gehört Dokumenten, Vollflächen nur Kampagnen (Plakat, Flyer, Social).
      </p>

      <Section id="farben" kicker="Foundations" title="Farben">
        <Label>Ink & Text</Label>
        <div className="sp-grid">{INK.map((s) => <Swatch key={s.token} {...s} />)}</div>
        <Label>Brand Accents</Label>
        <div className="sp-grid">{ACCENTS.map((s) => <Swatch key={s.token} {...s} />)}</div>
        <Label>Surfaces & Functional</Label>
        <div className="sp-grid">{SURFACES.map((s) => <Swatch key={s.token} {...s} />)}</div>
        <Label>Harte Regeln</Label>
        <div className="sp-grid-2">
          {RULES.map(([t, d], i) => (
            <div key={t} className="sp-rule">
              <span className="sp-rule__n">0{i + 1}</span>
              <p><b>{t}</b>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="typo" kicker="Foundations" title="Typografie — nur Inter">
        <div className="sp-type">
          <div><code>--text-hero · 900 italic</code><span style={{ fontSize: 'var(--text-hero)', fontWeight: 900, fontStyle: 'italic', letterSpacing: 'var(--tracking-display)', lineHeight: 1 }}>Strom von nebenan</span></div>
          <div><code>--text-display · 900</code><span style={{ fontSize: 'var(--text-display)', fontWeight: 900, letterSpacing: 'var(--tracking-display)' }}>Unsere Energielösungen</span></div>
          <div><code>--text-title · 900</code><span style={{ fontSize: 'var(--text-title)', fontWeight: 900 }}>Technische Machbarkeit prüfen</span></div>
          <div><code>--text-xl · 400</code><span style={{ fontSize: 'var(--text-xl)' }}>Gestalte gemeinsam mit uns die Energieversorgung von morgen.</span></div>
          <div><code>--text-base · 400 / 1.75</code><span style={{ lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>Die fei eG verbindet Häuser, Menschen und Energie zu einer selbstverwalteten Gemeinschaft. Kein Konzern, keine Gewinnmaximierung.</span></div>
          <div><code>Subline · 500 italic</code><span style={{ fontWeight: 500, fontStyle: 'italic', color: 'var(--text-secondary)' }}>Infoabend · 12. Oktober</span></div>
          <div><code>Eyebrow · 600 caps</code><Eyebrow>Dein Weg zu</Eyebrow></div>
          <div><code>Stat · 900</code><StatBlock value="1.500" unit="€" label="Ersparnis p.a." /></div>
        </div>
      </Section>

      <Section id="raum" kicker="Foundations" title="Abstände, Radien, Schatten">
        <div className="sp-grid-2">
          <div>
            {SPACES.map((t) => (
              <div key={t} className="sp-space"><span>{t}</span><i style={{ width: `var(${t})` }} /></div>
            ))}
          </div>
          <div className="sp-canvas sp-grid-2" style={{ gap: 16 }}>
            {['--shadow-xs', '--shadow-sm', '--shadow-card', '--shadow-lift', '--shadow-green', '--shadow-sticky'].map((t) => (
              <div key={t} className="sp-shadow" style={{ boxShadow: `var(${t})` }}>{t}</div>
            ))}
          </div>
        </div>
        <Label>Radien</Label>
        <div className="sp-row">
          {['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-pill'].map((t) => (
            <div key={t} style={{ width: 110, height: 64, borderRadius: `var(${t})`, background: 'var(--fei-green-wash)', border: '2px solid var(--fei-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{t.replace('--radius-', '')}</div>
          ))}
        </div>
      </Section>

      <Section id="komponenten" kicker="Komponenten" title="Core">
        <Label>Button</Label>
        <div className="sp-row">
          <Button iconRight={<ArrowRightIcon />}>Mitglied werden</Button>
          <Button variant="highlight">Jetzt Projekt anfragen</Button>
          <Button variant="secondary">Mehr erfahren</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Klein</Button>
          <Button disabled>Deaktiviert</Button>
        </div>
        <div className="sp-row" style={{ background: 'var(--fei-navy)', padding: 16, borderRadius: 'var(--radius-lg)', marginTop: 12 }}>
          <Button>Primary auf Navy</Button>
          <Button variant="inverse">Inverse</Button>
          <Button variant="highlight">Highlight</Button>
        </div>

        <Label>Tag · Badge · Avatar</Label>
        <div className="sp-row">
          <Tag>Mieterstrom</Tag><Tag variant="solid">Neu</Tag><Tag variant="outline">Freiflächen-PV</Tag><Tag variant="neutral">Bamberg</Tag>
          <Badge tone="success" dot>Bestätigt</Badge><Badge tone="warning" dot>Achtung</Badge><Badge>Entwurf</Badge>
          <Avatar initials="MK" /><Avatar initials="JS" tone="lila" /><Avatar initials="AB" tone="navy" /><Avatar initials="UL" tone="cream" />
        </div>

        <Label>StatBlock</Label>
        <div className="sp-row" style={{ gap: '2.5rem' }}>
          <StatBlock value="380" unit="+" label="Mitglieder" sub="↑ 90 in 2026" />
          <StatBlock value="257" unit="kWp" label="Installiert" accent="navy" />
          <div style={{ background: 'var(--fei-green)', padding: '16px 20px', borderRadius: 'var(--radius-lg)' }}>
            <StatBlock value="4" unit="%" label="Rendite p.a." accent="yellow" onDark />
          </div>
          <div style={{ background: 'var(--fei-navy)', padding: '16px 20px', borderRadius: 'var(--radius-lg)' }}>
            <StatBlock value="142" unit="t" label="CO₂ gespart" accent="white" onDark />
          </div>
        </div>

        <Label>ServiceCard — max. eine farbige Card pro Gruppe</Label>
        <div className="sp-canvas sp-grid-3">
          <ServiceCard icon="home" title="Mieterstrom" href="#">Solarstrom direkt zu den Mietern — ohne Netzgebühren.</ServiceCard>
          <ServiceCard icon="solar-panel" title="GGV" surface="feature" href="#">Eine Anlage, viele Wohneinheiten — virtuell aufgeteilt.</ServiceCard>
          <ServiceCard icon="bicycle" title="Balkonkraftwerke" accent="yellow" href="#">Plug-and-Play-Solar, ganz ohne eigenes Dach.</ServiceCard>
        </div>

        <Label>Card</Label>
        <div className="sp-canvas sp-grid-3">
          <Card interactive><b>white</b><p style={{ margin: '6px 0 0', color: 'var(--text-secondary)' }}>Default, mit Hover-Lift.</p></Card>
          <Card tone="feature"><b>feature</b><p style={{ margin: '6px 0 0', opacity: .82 }}>Grün→Navy, die eine farbige Card.</p></Card>
          <Card tone="navy"><b>navy</b><p style={{ margin: '6px 0 0', color: 'var(--text-on-inverse-muted)' }}>Invers.</p></Card>
        </div>

        <Label>Input · Accordion</Label>
        <div className="sp-grid-2">
          <div style={{ display: 'grid', gap: 16 }}>
            <Input label="E-Mail" type="email" required placeholder="name@beispiel.de" />
            <Input label="PLZ" defaultValue="9604" error="Bitte gib eine fünfstellige PLZ an." />
            <Input label="Nachricht" as="textarea" hint="Erzähl uns von deinem Dach." />
          </div>
          <Accordion defaultOpen={0} items={[
            { q: 'Was ist GGV?', a: 'Gemeinschaftliche Gebäudeversorgung — eine Anlage, viele Wohneinheiten.' },
            { q: 'Wer kann mitmachen?', a: 'WEGs, Eigentümergemeinschaften und alle, die Mitglied werden wollen.' },
            { q: 'Was kostet ein Anteil?', a: 'Details findest du in unserer Satzung.' },
          ]} />
        </div>
      </Section>

      <Section id="marke" kicker="Brand" title="Logo, Icons, Elemente">
        <Label>Logo — Schutzzone ≥ ½ Logohöhe, Blitz nie umfärben</Label>
        <div className="sp-grid-3">
          <div className="sp-asset"><Logo height={56} />logo.svg</div>
          <div className="sp-asset"><Logo variant="bamberg" height={72} />logo-bamberg.svg</div>
          <div className="sp-asset"><Logo variant="wuerzburg" height={72} />logo-wuerzburg.svg</div>
          <div className="sp-asset sp-asset--dark"><Logo inverse height={56} />logo-weiss.svg</div>
          <div className="sp-asset sp-asset--green"><Logo inverse variant="bamberg" height={72} />logo-weiss-bamberg.svg</div>
          <div className="sp-asset sp-asset--dark"><Logo inverse variant="wuerzburg" height={72} />logo-weiss-wuerzburg.svg</div>
        </div>

        <Label>Animated Outline Icons (GIF, 21)</Label>
        <div className="sp-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))' }}>
          {BRAND_ICON_NAMES.map((n) => (
            <div key={n} className="sp-icon"><BrandIcon name={n} size={56} />{n}</div>
          ))}
        </div>

        <Label>Pfeile — nur Kampagne, 1–2 pro Layout</Label>
        <div className="sp-pfeile">
          <Pfeil nr={1} color="gelb" height={120} />
          <Pfeil nr={2} color="violett" height={120} />
          <Pfeil nr={3} color="gruen" height={120} />
          <Pfeil nr={4} color="violett" height={120} />
          <Pfeil nr={5} color="gelb" height={100} />
          <Pfeil nr={6} color="violett" height={100} />
        </div>

        <Label>Illustrationen</Label>
        <div className="sp-grid-2">
          <div className="sp-asset"><img src="./assets/brand/drei-icons-pv-emobility-kreislauf.svg" alt="PV, E-Mobilität, Kreislauf" style={{ width: '100%', height: 160, objectFit: 'contain' }} />drei-icons-pv-emobility-kreislauf.svg</div>
          <div className="sp-asset"><img src="./assets/brand/unsere-leistungen.svg" alt="Unsere Leistungen" style={{ width: '100%', height: 160, objectFit: 'contain' }} />unsere-leistungen.svg</div>
        </div>
      </Section>
    </div>
  );
}
