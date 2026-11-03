/* fei website — process steps (the "Dein Weg zu" walkthrough) */
function Process() {
  const { Eyebrow, Tag } = window.FeiBRgerenergieDesignSystem_019dfe;
  const steps = [
    { n: '01', tag: 'Schritt 1', title: 'Kontakt aufnehmen, Projekt besprechen', body: 'Du hast ein Dach oder eine Idee für ein Energieprojekt? Dann kontaktiere uns, wir besprechen alle Details persönlich mit dir.', img: '../../assets/img/solar-two-buildings.png' },
    { n: '02', tag: 'Schritt 2', title: 'Technische Machbarkeit prüfen', body: 'Unser Team analysiert die technische und wirtschaftliche Machbarkeit — transparent und kostenlos.', img: '../../assets/img/solar-angled-view.png' },
    { n: '03', tag: 'Schritt 3', title: 'Planung, Bau und Inbetriebnahme', body: 'Wir kümmern uns um Planung, Finanzierung, Bau und Inbetriebnahme — von der Auslegung bis zur Belieferung der Anwohner. Alles aus einer Hand.', dark: true },
    { n: '04', tag: 'Das Ergebnis', title: 'Sozial. Regional. Demokratisch.', body: 'Der Gewinn bleibt in der Region. Die Mitglieder entscheiden. Die Energie bleibt bezahlbar. Das ist Bürgerenergie.', result: true },
  ];
  return (
    <section data-screen-label="Process" style={{ background: 'var(--fei-cream-mid)', padding: '5.5rem 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <Eyebrow>Dein Weg zu</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-display)', color: 'var(--text-body)', margin: '0.5rem 0 0', lineHeight: 1.15 }}>
            Erneuerbarer Energie und<br/>regionaler Wertschöpfung
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          {steps.map(s => (
            <div key={s.n} style={{
              display: 'grid', gridTemplateColumns: s.img ? '1.1fr 0.9fr' : '1fr',
              borderRadius: 'var(--radius-xl)', overflow: 'hidden',
              boxShadow: 'var(--shadow-sticky)', minHeight: 280,
              background: s.dark ? 'linear-gradient(135deg, var(--fei-green-900), var(--fei-navy))'
                : s.result ? 'linear-gradient(135deg, var(--fei-green), var(--fei-green-700))'
                : 'var(--fei-white)',
            }}>
              <div style={{ padding: '2.75rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, lineHeight: 1,
                    color: s.dark || s.result ? 'var(--fei-yellow)' : 'var(--accent-display)' }}>{s.n}</span>
                  <Tag variant={s.dark || s.result ? 'solid' : 'soft'}>{s.tag}</Tag>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-title)',
                  lineHeight: 1.15, margin: '0 0 0.75rem', color: s.dark || s.result ? '#fff' : 'var(--text-body)' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, margin: 0,
                  color: s.dark || s.result ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)' }}>
                  {s.body}
                </p>
              </div>
              {s.img && (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
