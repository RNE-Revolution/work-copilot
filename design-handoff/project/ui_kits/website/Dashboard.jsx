/* fei website — dark "Live Dashboard" data section */
function Dashboard() {
  const { Eyebrow, StatBlock, Button } = window.FeiBRgerenergieDesignSystem_019dfe;
  const stats = [
    { value: '380', label: 'Mitglieder', sub: '↑ 90 in 2026' },
    { value: '257', unit: 'kWp', label: 'Installiert', sub: '4 Projekte' },
    { value: '142', unit: 't', label: 'CO₂ gespart', sub: 'seit Gründung' },
    { value: '500', unit: 'kWp', label: 'In Pipeline', sub: '5 Projekte geplant' },
  ];
  return (
    <section data-screen-label="Dashboard" style={{ background: 'var(--fei-navy-900)', padding: '5.5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 360,
        borderRadius: '50%', opacity: 0.08, background: 'radial-gradient(ellipse, var(--fei-green) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow tone="inverse">Live Dashboard</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.5rem,4vw,2.25rem)', color: '#fff', margin: '0.4rem 0 0' }}>
              fei Energie in Zahlen
            </h2>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(22,163,74,0.12)', border: '1px solid rgba(22,163,74,0.25)',
            padding: '0.5rem 1rem', borderRadius: 'var(--radius-pill)' }}>
            <span className="fei-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fei-green)' }} />
            <span style={{ color: 'var(--fei-green)', fontSize: 'var(--text-sm)', fontWeight: 700 }}>LIVE</span>
          </div>
        </div>

        {/* chart card */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: 'var(--space-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ color: '#cbd5e1', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Erzeugungsprofil — letzte 12 Stunden</span>
            <span style={{ color: 'var(--fei-ink-500)', fontSize: 'var(--text-xs)' }}>kWh/h</span>
          </div>
          <svg viewBox="0 0 600 150" preserveAspectRatio="none" style={{ width: '100%', height: 150 }}>
            <defs>
              <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,.06)"/>
            <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,.06)"/>
            <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,.06)"/>
            <path d="M0 140 C 80 120, 130 50, 200 36 C 280 22, 330 30, 400 60 C 470 90, 520 130, 600 138 L600 150 L0 150 Z" fill="url(#ag)"/>
            <path d="M0 140 C 80 120, 130 50, 200 36 C 280 22, 330 30, 400 60 C 470 90, 520 130, 600 138" fill="none" stroke="var(--fei-green)" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="200" cy="36" r="5" fill="var(--fei-green)" style={{ filter: 'drop-shadow(0 0 6px #22c55e)' }}/>
          </svg>
        </div>

        {/* stat row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center' }}>
              <StatBlock value={s.value} unit={s.unit} label={s.label} sub={s.sub} accent="white" align="center" size="sm" onDark />
            </div>
          ))}
        </div>

        {/* example row */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ color: 'var(--fei-ink-400)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
              Beispiel: 5 Wohneinheiten in Bamberg
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <StatBlock value="4" unit="%" label="Rendite p.a." accent="white" size="sm" onDark />
              <StatBlock value="1.500" unit="€" label="Ersparnis p.a." accent="white" size="sm" onDark />
              <StatBlock value="25" unit="Jahre" label="Planungssicherheit" accent="white" size="sm" onDark />
            </div>
          </div>
          <Button variant="primary">Projektanfrage stellen</Button>
        </div>
      </div>
    </section>
  );
}
window.Dashboard = Dashboard;
