import { ArrowRightIcon, Button, StatBlock } from '@fei/design-system';

/** Navy photo hero with gradient scrim (web photo treatment), orbs and hero stats. */
export function Hero() {
  return (
    <section className="site-hero" aria-labelledby="hero-title">
      <div className="site-hero__photo" aria-hidden="true">
        <img src="./assets/img/solar-two-buildings.png" alt="" />
        <div className="site-hero__scrim" />
      </div>
      <div className="site-orb" style={{ width: '24rem', height: '24rem', opacity: 0.22, background: 'var(--fei-green)', top: '2rem', left: '-7rem' }} />
      <div className="site-orb" style={{ width: '16rem', height: '16rem', opacity: 0.16, background: 'var(--fei-yellow)', top: '30%', right: '-3rem' }} />

      <div className="site-container site-hero__inner">
        <div style={{ maxWidth: '52rem' }}>
          <div className="site-hero__chip">
            <span className="site-dot" />
            Bamberg · Würzburg · Franken — 380 Mitglieder &amp; wachsend
          </div>
          <h1 id="hero-title">
            Energiewende<br />
            <em>in demokratischen</em><br />
            Händen.
          </h1>
          <p className="site-hero__lead">
            Gestalte gemeinsam mit uns die Energieversorgung von morgen. Sozial. Regional. Demokratisch.
          </p>
          <div className="site-hero__ctas">
            <Button size="lg" href="#mitglied" iconRight={<ArrowRightIcon />}>Mitglied werden</Button>
            <Button size="lg" variant="inverse" href="#kontakt">Projektanfrage</Button>
            <Button size="lg" variant="inverse" href="#projekte">Laufende Projekte</Button>
          </div>
          <div className="site-hero__stats">
            <StatBlock value="380" unit="+" label="Mitglieder" accent="yellow" onDark />
            <StatBlock value="257" unit="kWp" label="Installiert" accent="yellow" onDark />
            <StatBlock value="500" unit="kWp" label="In Planung" accent="yellow" onDark />
          </div>
        </div>
      </div>
    </section>
  );
}
