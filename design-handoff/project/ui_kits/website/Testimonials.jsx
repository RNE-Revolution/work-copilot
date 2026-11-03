/* fei website — testimonials + footer */
function Testimonials() {
  const { Eyebrow, Card, Avatar } = window.FeiBRgerenergieDesignSystem_019dfe;
  const Stars = () => (
    <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="var(--fei-yellow)">
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12l-2.8-2.03c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z"/>
        </svg>
      ))}
    </div>
  );
  const items = [
    { q: 'Endlich Strom, der wirklich regional ist. Als Mitglied habe ich das Gefühl, wirklich Teil der Energiewende zu sein — nicht nur Konsument.', name: 'Maria K.', meta: 'Mitglied seit 2022, Bamberg', ini: 'MK', tone: 'green' },
    { q: 'Wir haben unser Dach verpachtet und bekommen jetzt eine faire Beteiligung. Unkompliziert, transparent, regional.', name: 'Jürgen S.', meta: 'Eigentümer, Würzburg', ini: 'JS', tone: 'lila' },
    { q: 'Die Genossenschaft denkt langfristig und demokratisch. Genau so sollte die Energiewende laufen.', name: 'Anke B.', meta: 'Mitglied seit 2021, Forchheim', ini: 'AB', tone: 'navy' },
  ];
  return (
    <section data-screen-label="Testimonials" style={{ background: 'var(--surface-page)', padding: '5.5rem 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Eyebrow>Stimmen</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-display)', color: 'var(--text-body)', margin: '0.5rem 0 0', lineHeight: 1.15 }}>
            Unsere Mitglieder machen es vor
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {items.map(t => (
            <Card key={t.name} padding="var(--space-6)">
              <Stars />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 1.25rem' }}>„{t.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar initials={t.ini} tone={t.tone} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--accent-highlight)', fontSize: 'var(--text-sm)' }}>{t.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>{t.meta}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;

function SiteFooter() {
  const { Button } = window.FeiBRgerenergieDesignSystem_019dfe;
  const cols = [
    { h: 'Energielösungen', links: ['Mieterstrom', 'GGV', 'Freiflächen-PV', 'Balkonkraftwerke', 'Ladesäulen'] },
    { h: 'Genossenschaft', links: ['Über uns', 'Mitglied werden', 'Projekte', 'Generalversammlung'] },
    { h: 'Service', links: ['Kontakt', 'Mitgliederportal', 'Kooperationspartner', 'FAQ'] },
  ];
  return (
    <footer data-screen-label="Footer" style={{ background: 'var(--fei-navy)', color: 'var(--text-on-inverse)', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, color: '#fff' }}>fei</span>
              <span style={{ fontSize: 12, color: 'var(--fei-ink-400)', fontWeight: 600, lineHeight: 1.1 }}>Bürgerenergie<br/>eG</span>
            </div>
            <p style={{ color: 'var(--fei-ink-400)', fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: '20rem', margin: '0 0 1.25rem' }}>
              Sozial. Regional. Demokratisch. Die Bürgerenergiegenossenschaft für Franken.
            </p>
            <Button variant="primary" size="sm">Mitglied werden</Button>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fei-green)', marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" style={{ color: 'var(--fei-ink-400)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'var(--fei-ink-400)', fontSize: 'var(--text-xs)' }}>© 2026 fei Bürgerenergie eG · Bamberg · Würzburg</span>
          <span style={{ color: 'var(--fei-ink-400)', fontSize: 'var(--text-xs)' }}>Impressum · Datenschutz · Satzung</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
