import { Button, Eyebrow, StatBlock } from '@fei/design-system';

const STATS = [
  { value: '380', label: 'Mitglieder', sub: '↑ 90 in 2026' },
  { value: '257', unit: 'kWp', label: 'Installiert', sub: '4 Projekte' },
  { value: '142', unit: 't', label: 'CO₂ gespart', sub: 'seit Gründung' },
  { value: '500', unit: 'kWp', label: 'In Pipeline', sub: '5 Projekte geplant' },
];

/** Dark "Live Dashboard" data section. */
export function Dashboard() {
  return (
    <section className="site-section site-dash" aria-labelledby="dash-title">
      <div className="site-dash__glow" aria-hidden="true" />
      <div className="site-container site-dash__inner">
        <div className="site-dash__head">
          <div>
            <Eyebrow tone="inverse">Live Dashboard</Eyebrow>
            <h2 id="dash-title">fei Energie in Zahlen</h2>
          </div>
          <span className="site-live"><span className="site-dot site-pulse" />LIVE</span>
        </div>

        <div className="site-glass site-mb">
          <div className="site-dash__chartlbl">
            <span>Erzeugungsprofil — letzte 12 Stunden</span>
            <span>kWh/h</span>
          </div>
          <svg viewBox="0 0 600 150" preserveAspectRatio="none" style={{ width: '100%', height: 150, display: 'block' }} role="img" aria-label="Erzeugungskurve mit Spitze am Mittag">
            <defs>
              <linearGradient id="fei-ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120].map((y) => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,.06)" />)}
            <path d="M0 140 C 80 120, 130 50, 200 36 C 280 22, 330 30, 400 60 C 470 90, 520 130, 600 138 L600 150 L0 150 Z" fill="url(#fei-ag)" />
            <path d="M0 140 C 80 120, 130 50, 200 36 C 280 22, 330 30, 400 60 C 470 90, 520 130, 600 138" fill="none" stroke="var(--fei-green)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="200" cy="36" r="5" fill="var(--fei-green)" style={{ filter: 'drop-shadow(0 0 6px #22c55e)' }} />
          </svg>
        </div>

        <div className="site-grid-4 site-mb">
          {STATS.map((s) => (
            <div key={s.label} className="site-glass" style={{ textAlign: 'center' }}>
              <StatBlock value={s.value} unit={s.unit} label={s.label} sub={s.sub} accent="white" align="center" size="sm" onDark />
            </div>
          ))}
        </div>

        <div className="site-glass site-dash__example">
          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="site-dash__example-lbl">Beispiel: 5 Wohneinheiten in Bamberg</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <StatBlock value="4" unit="%" label="Rendite p.a." accent="white" size="sm" onDark />
              <StatBlock value="1.500" unit="€" label="Ersparnis p.a." accent="white" size="sm" onDark />
              <StatBlock value="25" unit="Jahre" label="Planungssicherheit" accent="white" size="sm" onDark />
            </div>
          </div>
          <Button href="#kontakt">Projektanfrage stellen</Button>
        </div>
      </div>
    </section>
  );
}
