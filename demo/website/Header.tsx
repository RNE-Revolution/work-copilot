import { Button, Logo } from '@fei/design-system';

const LINKS = ['Mieterstrom', 'GGV', 'Freiflächen-PV', 'Balkonkraftwerke', 'Über uns'];

/** Sticky top navigation — translucent white with blur. */
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__bar">
        <a href="#" aria-label="fei Bürgerenergie eG — Startseite">
          <Logo height={40} alt="" />
        </a>
        <nav className="site-nav" aria-label="Hauptnavigation">
          {LINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </nav>
        <div className="site-header__actions">
          <a href="#" className="site-login">Login</a>
          <Button size="sm" href="#mitglied">Mitglied werden</Button>
        </div>
      </div>
    </header>
  );
}
