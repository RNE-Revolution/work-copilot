import { Eyebrow, ServiceCard, type BrandIconName } from '@fei/design-system';

/** Quote band — the brand's rhetorical-question headline. */
export function Quote() {
  return (
    <section className="site-quote" aria-label="Unser Versprechen">
      <div className="site-prose">
        <p className="site-quote__q">
          „Was wäre, wenn dein Strom aus der Nachbarschaft kommt — und der Gewinn auch dort bleibt?"
        </p>
        <p className="site-quote__p">
          Genau das machen wir möglich. Die fei eG verbindet Häuser, Menschen und Energie zu einer
          selbstverwalteten Gemeinschaft. Kein Konzern, keine Gewinnmaximierung — nur{' '}
          <strong>deine Region, deine Energie.</strong>
        </p>
      </div>
    </section>
  );
}

const ITEMS: Array<{ icon: BrandIconName; title: string; body: string }> = [
  { icon: 'home', title: 'Mieterstrom', body: 'Solaranlage aufs Dach, Strom direkt zu den Mietern. Vermieter profitieren, Mieter bekommen günstigeren Ökostrom — ohne Netzgebühren.' },
  { icon: 'rules', title: 'Gemeinschaftliche Gebäudeversorgung', body: 'Mehrere Wohneinheiten, eine Anlage. Energie wird virtuell aufgeteilt — ideal für WEGs und Eigentümergemeinschaften.' },
  { icon: 'solar-panel', title: 'Freiflächen-PV', body: 'Große Solarparks auf Freiflächen — in Bürgerhand. Kommunen, Landwirte und Bürger beteiligen sich gemeinsam.' },
  { icon: 'bicycle', title: 'Balkonkraftwerke', body: 'Plug-and-Play-Solar für Mieter und Hauseigentümer. Selbst erzeugen, direkt einsparen — ganz ohne eigenes Dach.' },
];

export function Services() {
  return (
    <section className="site-section" aria-labelledby="services-title">
      <div className="site-container">
        <div className="site-intro">
          <Eyebrow>Angebote</Eyebrow>
          <h2 id="services-title" className="site-h2">Unsere Energielösungen</h2>
          <p className="site-lead">
            Nachhaltige Energieversorgung für eine grünere Zukunft — regional, demokratisch, günstig.
          </p>
        </div>
        <div className="site-grid-2">
          {ITEMS.map((it) => (
            <ServiceCard key={it.title} icon={it.icon} title={it.title} href="#">
              {it.body}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
