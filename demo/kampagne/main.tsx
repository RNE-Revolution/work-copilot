import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Blitz, Bubble, Eyebrow, FeiAssets, FotoBubble, Kampagne, Logo, Pfeil, type KampagneGround, type PfeilColor,
} from '@fei/design-system';
import './kampagne.css';

const GROUNDS: KampagneGround[] = ['cream', 'gelb', 'violett', 'gruen', 'schwarz'];
const LABEL: Record<KampagneGround, string> = { cream: 'Cream', gelb: 'Gelb', violett: 'Violett', gruen: 'Grün', schwarz: 'Schwarz' };
/* yellow arrows on dark/violet, violet on cream/yellow; green ground → yellow (Rule 4: no violet on green) */
const ARROW: Record<KampagneGround, PfeilColor> = { cream: 'violett', gelb: 'violett', violett: 'gelb', gruen: 'gelb', schwarz: 'gelb' };
const darkGround = (g: KampagneGround) => g === 'violett' || g === 'gruen' || g === 'schwarz';

function SocialPost({ ground, safe }: { ground: KampagneGround; safe: boolean }) {
  return (
    <div className="kp-frame">
      <Kampagne ground={ground} className="kp-post" as="article">
        {safe && <div className="kp-safe"><span>3:4 Safe-Zone</span></div>}
        <Blitz height={520} strokeWidth={9} />
        <div className="kp-content">
          <h2 className="kp-title">Strom<br />von nebenan</h2>
          <p className="kp-sub">Infoabend · 12. Oktober · Bamberg</p>
          <p className="kp-body">Wie dein Dach zur Energiequelle für die ganze Nachbarschaft wird — und der Gewinn in der Region bleibt.</p>
        </div>
        <Pfeil nr={5} color={ARROW[ground]} height={170} rotate={-20} />
        <Bubble width={330} fontSize={42}>Jetzt anmelden!</Bubble>
        <FotoBubble src="./assets/img/solar-angled-view.png" size={620} corner="bottom-right" bleed={0.22} />
        <div className="kp-logo"><Logo inverse={darkGround(ground)} height={110} /></div>
      </Kampagne>
    </div>
  );
}

function App() {
  const [ground, setGround] = useState<KampagneGround>('cream');
  const [safe, setSafe] = useState(true);
  return (
    <div className="kp">
      <a href="./index.html" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)' }}>← Design System</a>
      <Eyebrow style={{ marginTop: '1.5rem' }}>Kampagne · Plakat · Flyer · Social</Eyebrow>
      <h1>Social-Post 1080 × 1350</h1>
      <p className="kp-lead">
        Der Kampagnen-Kontext (<code>.fei-kampagne</code>) aus dem Brandkit 07/2026 — farbige kursive Titel,
        Subline in einer zweiten Farbe, Outline-Blitz hinter dem Titel, Aufruf-Bubble, ein Pfeil und die
        violette Foto-Bubble in einer unteren Ecke. Nur für Print und Social, nie fürs Web.
      </p>
      <div className="kp-layout">
        <SocialPost ground={ground} safe={safe} />
        <div className="kp-controls">
          <fieldset>
            <legend>Grund</legend>
            {GROUNDS.map((g) => (
              <button key={g} type="button" className="kp-chip" aria-pressed={g === ground} onClick={() => setGround(g)}>{LABEL[g]}</button>
            ))}
          </fieldset>
          <fieldset>
            <legend>Hilfslinien</legend>
            <button type="button" className="kp-chip" aria-pressed={safe} onClick={() => setSafe(!safe)}>3:4 Safe-Zone</button>
          </fieldset>
          <p className="kp-note">
            Feed-Format 4:5 (1080 × 1350) für Instagram und LinkedIn. Das Instagram-Profilgrid zeigt 3:4 —
            Text und Logo bleiben in der Safe-Zone (<code>--social-safe-x</code> 34 px, <code>--social-safe-y</code> 80 px).
            Logo-Schutzzone ≥ ½ Logohöhe. Auf grünem Grund sind Titel schwarz und Akzente gelb — nie Violett auf Grün.
          </p>
        </div>
      </div>

      <div className="kp-grounds">
        {GROUNDS.map((g) => (
          <Kampagne key={g} ground={g} className="kp-g">
            <Blitz height={130} strokeWidth={8} />
            <h3>Strom von nebenan</h3>
            <p className="s">Infoabend · 12. Oktober</p>
            <p className="b">Fließtext folgt dem Grund.</p>
            <Bubble width={74} fontSize={10}>Jetzt anmelden!</Bubble>
            <span className="t">{LABEL[g]}</span>
          </Kampagne>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <FeiAssets base="./assets"><App /></FeiAssets>
  </StrictMode>,
);
