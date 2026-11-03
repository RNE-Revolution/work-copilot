/* fei website — sticky top navigation */
function SiteHeader() {
  const { Button } = window.FeiBRgerenergieDesignSystem_019dfe;
  const [open, setOpen] = React.useState(false);
  const links = ['Mieterstrom', 'GGV', 'Freiflächen-PV', 'Balkonkraftwerke', 'Über uns'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,239,227,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26,
            color: 'var(--fei-navy)', letterSpacing: '-0.02em',
          }}>fei</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.1 }}>
            Bürgerenergie<br/>eG
          </span>
        </a>
        <nav className="fei-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#" className="fei-nav-desktop" style={{
            fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-body)', textDecoration: 'none',
          }}>Login</a>
          <Button variant="primary" size="sm">Mitglied werden</Button>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
