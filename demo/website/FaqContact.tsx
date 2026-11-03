import { useState, type FormEvent } from 'react';
import { Accordion, Badge, Button, Card, Eyebrow, Input } from '@fei/design-system';

const FAQ = [
  { q: 'Was ist Mieterstrom?', a: 'Strom vom eigenen Dach, direkt an die Mieter im Haus geliefert — günstiger als der Grundversorger und ohne Netzentgelte für den selbst verbrauchten Anteil.' },
  { q: 'Was ist GGV?', a: 'Gemeinschaftliche Gebäudeversorgung: eine Anlage, viele Wohneinheiten. Der Solarstrom wird virtuell aufgeteilt — ideal für WEGs und Eigentümergemeinschaften.' },
  { q: 'Wer kann Mitglied werden?', a: 'Alle, die die Energiewende in der Region mitgestalten wollen. Jedes Mitglied hat eine Stimme — unabhängig von der Zahl der Anteile.' },
];

/** FAQ + enquiry form. The form shows lila focus (highlight role) and amber errors. */
export function FaqContact() {
  const [error, setError] = useState<string>();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    if (!email || !String(email).includes('@')) {
      setError('Bitte gib eine gültige E-Mail-Adresse an.');
      return;
    }
    setError(undefined);
    setSent(true);
  }

  return (
    <section id="kontakt" className="site-section" style={{ background: 'var(--surface-sunken)' }} aria-labelledby="faq-title">
      <div className="site-container site-faq">
        <div>
          <Eyebrow>Fragen</Eyebrow>
          <h2 id="faq-title" className="site-h2" style={{ marginBottom: '1.5rem' }}>Häufige Fragen</h2>
          <Accordion items={FAQ} defaultOpen={0} />
        </div>
        <Card>
          <h3 style={{ margin: '0 0 0.25rem', fontWeight: 900, fontSize: 'var(--text-2xl)' }}>Projekt anfragen</h3>
          <p style={{ margin: '0 0 1.5rem', color: 'var(--text-muted)' }}>Du hast ein Dach oder eine Idee? Wir melden uns persönlich.</p>
          {sent ? (
            <Badge tone="success" dot>Danke! Wir melden uns innerhalb von 2 Werktagen.</Badge>
          ) : (
            <form className="site-form" onSubmit={onSubmit} noValidate>
              <Input label="Name" name="name" placeholder="Vor- und Nachname" />
              <Input label="E-Mail" name="email" type="email" required placeholder="name@beispiel.de" error={error} />
              <Input label="Nachricht" name="msg" as="textarea" hint="Erzähl uns von deinem Dach." />
              <div><Button type="submit">Anfrage senden</Button></div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
