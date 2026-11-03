import { Button, Logo } from '@fei/design-system';

const COLS = [
  { h: 'Energielösungen', links: ['Mieterstrom', 'GGV', 'Freiflächen-PV', 'Balkonkraftwerke', 'Ladesäulen'] },
  { h: 'Genossenschaft', links: ['Über uns', 'Mitglied werden', 'Projekte', 'Generalversammlung'] },
  { h: 'Service', links: ['Kontakt', 'Mitgliederportal', 'Kooperationspartner', 'FAQ'] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__grid">
          <div>
            <Logo inverse height={44} />
            <p className="site-footer__claim">Sozial. Regional. Demokratisch. Die Bürgerenergiegenossenschaft für Franken.</p>
            <Button size="sm" href="#mitglied">Mitglied werden</Button>
          </div>
          {COLS.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 fei Bürgerenergie eG · Bamberg · Würzburg</span>
          <span>Impressum · Datenschutz · Satzung</span>
        </div>
      </div>
    </footer>
  );
}
