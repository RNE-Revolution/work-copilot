import { Avatar, Card, Eyebrow, StarIcon, type AvatarTone } from '@fei/design-system';

const ITEMS: Array<{ q: string; name: string; meta: string; ini: string; tone: AvatarTone }> = [
  { q: 'Endlich Strom, der wirklich regional ist. Als Mitglied habe ich das Gefühl, wirklich Teil der Energiewende zu sein — nicht nur Konsument.', name: 'Maria K.', meta: 'Mitglied seit 2022, Bamberg', ini: 'MK', tone: 'green' },
  { q: 'Wir haben unser Dach verpachtet und bekommen jetzt eine faire Beteiligung. Unkompliziert, transparent, regional.', name: 'Jürgen S.', meta: 'Eigentümer, Würzburg', ini: 'JS', tone: 'lila' },
  { q: 'Die Genossenschaft denkt langfristig und demokratisch. Genau so sollte die Energiewende laufen.', name: 'Anke B.', meta: 'Mitglied seit 2021, Forchheim', ini: 'AB', tone: 'navy' },
];

/** Member voices — the reviewer name is one of lila's two sanctioned uses. */
export function Testimonials() {
  return (
    <section className="site-section" aria-labelledby="voices-title">
      <div className="site-container">
        <div className="site-intro" style={{ marginBottom: '3rem' }}>
          <Eyebrow>Stimmen</Eyebrow>
          <h2 id="voices-title" className="site-h2">Unsere Mitglieder machen es vor</h2>
        </div>
        <div className="site-grid-3">
          {ITEMS.map((t) => (
            <Card key={t.name} as="figure" style={{ margin: 0 }}>
              <div className="site-stars" role="img" aria-label="5 von 5 Sternen">
                {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="site-quote-text">„{t.q}"</blockquote>
              <figcaption className="site-person">
                <Avatar initials={t.ini} tone={t.tone} alt="" />
                <div>
                  <div className="site-person__name">{t.name}</div>
                  <div className="site-person__meta">{t.meta}</div>
                </div>
              </figcaption>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
