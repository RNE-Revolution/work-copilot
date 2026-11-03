import { Eyebrow, Tag } from '@fei/design-system';

const cx = (...c: Array<string | false>) => c.filter(Boolean).join(' ');

const STEPS = [
  { n: '01', tag: 'Schritt 1', title: 'Kontakt aufnehmen, Projekt besprechen', body: 'Du hast ein Dach oder eine Idee für ein Energieprojekt? Dann kontaktiere uns, wir besprechen alle Details persönlich mit dir.', img: './assets/img/solar-two-buildings.png' },
  { n: '02', tag: 'Schritt 2', title: 'Technische Machbarkeit prüfen', body: 'Unser Team analysiert die technische und wirtschaftliche Machbarkeit — transparent und kostenlos.', img: './assets/img/solar-angled-view.png' },
  { n: '03', tag: 'Schritt 3', title: 'Planung, Bau und Inbetriebnahme', body: 'Wir kümmern uns um Planung, Finanzierung, Bau und Inbetriebnahme — von der Auslegung bis zur Belieferung der Anwohner. Alles aus einer Hand.' },
  { n: '04', tag: 'Das Ergebnis', title: 'Sozial. Regional. Demokratisch.', body: 'Der Gewinn bleibt in der Region. Die Mitglieder entscheiden. Die Energie bleibt bezahlbar. Das ist Bürgerenergie.', result: true },
] as const;

/**
 * "Dein Weg zu" — four-step walkthrough. Steps are white; only the result is the one
 * feature card (green→navy). Display numbers green on white, yellow on the feature card.
 */
export function Process() {
  return (
    <section className="site-section site-process" aria-labelledby="process-title">
      <div className="site-container">
        <div className="site-intro">
          <Eyebrow>Dein Weg zu</Eyebrow>
          <h2 id="process-title" className="site-h2">Erneuerbarer Energie und<br />regionaler Wertschöpfung</h2>
        </div>
        <ol className="site-steps">
          {STEPS.map((s) => {
            return (
              <li key={s.n} className={cx('site-step', 'img' in s && 'site-step--img', 'result' in s && 'site-step--result')}>
                <div className="site-step__text">
                  <div className="site-step__head">
                    <span className="site-step__n">{s.n}</span>
                    <Tag variant={'result' in s ? 'solid' : 'soft'}>{s.tag}</Tag>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                {'img' in s && (
                  <div className="site-step__img"><img src={s.img} alt="" loading="lazy" /></div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
