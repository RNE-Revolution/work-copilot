/* fei website — hero. Navy photo section with gradient scrim + orbs + stats. */
function Hero() {
  const { Button, StatBlock } = window.FeiBRgerenergieDesignSystem_019dfe;
  const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
  );
  return (
    <section data-screen-label="Hero" style={{
      position: 'relative', overflow: 'hidden', background: 'var(--fei-navy)',
      padding: '6rem 0 5rem',
    }}>
      {/* photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="../../assets/img/solar-two-buildings.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'luminosity' }} />
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.92), rgba(20,83,45,0.78) 55%, rgba(176,89,58,0.55))' }} />
      </div>
      {/* orbs */}
      <div style={{ position:'absolute', width:'24rem', height:'24rem', borderRadius:'50%', filter:'blur(80px)', opacity:0.22, background:'var(--fei-green)', top:'2rem', left:'-7rem', zIndex:0 }} />
      <div style={{ position:'absolute', width:'16rem', height:'16rem', borderRadius:'50%', filter:'blur(80px)', opacity:0.16, background:'var(--fei-yellow)', top:'30%', right:'-3rem', zIndex:0 }} />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '52rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-sm)', fontWeight: 500,
            padding: '0.5rem 1rem', borderRadius: 'var(--radius-pill)', marginBottom: '1.75rem',
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{ width: 8, height: 8, background: 'var(--fei-green)', borderRadius: '50%' }} />
            Bamberg · Würzburg · Franken — 380 Mitglieder &amp; wachsend
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff',
            lineHeight: 1.05, margin: '0 0 1.25rem', fontSize: 'var(--text-hero)',
          }}>
            Energiewende<br/>
            <span style={{ color: 'var(--fei-yellow)', fontStyle: 'italic' }}>in demokratischen</span><br/>
            Händen.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-xl)', lineHeight: 1.7, maxWidth: '40rem', margin: '0 0 2.25rem' }}>
            Gestalte gemeinsam mit uns die Energieversorgung von morgen.
            Sozial. Regional. Demokratisch.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: '3.5rem' }}>
            <Button variant="primary" size="lg" iconRight={<Arrow/>}>Mitglied werden</Button>
            <Button variant="inverse" size="lg">Projektanfrage</Button>
            <Button variant="inverse" size="lg">Laufende Projekte</Button>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <StatBlock value="380" unit="+" label="Mitglieder" accent="yellow" onDark />
            <StatBlock value="257" unit="kWp" label="Installiert" accent="yellow" onDark />
            <StatBlock value="500" unit="kWp" label="In Planung" accent="yellow" onDark />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
