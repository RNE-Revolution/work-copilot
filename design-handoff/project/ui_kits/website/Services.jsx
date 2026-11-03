/* fei website — quote band + services grid */
function Quote() {
  return (
    <section data-screen-label="Quote" style={{ background: 'var(--fei-cream-mid)', padding: '4.5rem 0' }}>
      <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: 'var(--text-body)', lineHeight: 1.35, margin: 0,
        }}>
          „Was wäre, wenn dein Strom aus der Nachbarschaft kommt — und der Gewinn auch dort bleibt?"
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', marginTop: '1.5rem', lineHeight: 1.75 }}>
          Genau das machen wir möglich. Die fei eG verbindet Häuser, Menschen und Energie zu einer
          selbstverwalteten Gemeinschaft. Kein Konzern, keine Gewinnmaximierung —
          nur <strong style={{ color: 'var(--fei-navy)' }}>deine Region, deine Energie.</strong>
        </p>
      </div>
    </section>
  );
}
window.Quote = Quote;

function Services() {
  const { Eyebrow, ServiceCard } = window.FeiBRgerenergieDesignSystem_019dfe;
  const items = [
    { icon: 'home', title: 'Mieterstrom', accent: 'green', body: 'Solaranlage aufs Dach, Strom direkt zu den Mietern. Vermieter profitieren, Mieter bekommen günstigeren Ökostrom — ohne Netzgebühren.' },
    { icon: 'rules', title: 'Gemeinschaftliche Gebäudeversorgung', accent: 'green', body: 'Mehrere Wohneinheiten, eine Anlage. Energie wird virtuell aufgeteilt — ideal für WEGs und Eigentümergemeinschaften.' },
    { icon: 'solar-panel', title: 'Freiflächen-PV', accent: 'green', body: 'Große Solarparks auf Freiflächen — in Bürgerhand. Kommunen, Landwirte und Bürger beteiligen sich gemeinsam.' },
    { icon: 'bicycle', title: 'Balkonkraftwerke', accent: 'green', body: 'Plug-and-Play-Solar für Mieter und Hauseigentümer. Selbst erzeugen, direkt einsparen — ganz ohne eigenes Dach.' },
  ];
  return (
    <section data-screen-label="Services" style={{ background: 'var(--surface-page)', padding: '5.5rem 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <Eyebrow>Angebote</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-display)', color: 'var(--text-body)', margin: '0.5rem 0 0.75rem', lineHeight: 1.15 }}>
            Unsere Energielösungen
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', maxWidth: '34rem', margin: '0 auto' }}>
            Nachhaltige Energieversorgung für eine grünere Zukunft — regional, demokratisch, günstig.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
          {items.map(it => (
            <ServiceCard key={it.title} icon={it.icon} iconBase="../../assets/icons" title={it.title} accent={it.accent} href="#">
              {it.body}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
