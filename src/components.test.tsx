import { fireEvent, render, screen } from '@testing-library/react';
import {
  Accordion, Badge, BrandIcon, Bubble, Button, Card, FeiAssets, Input, Kampagne, Logo, ServiceCard, StatBlock,
} from './index';

describe('Button', () => {
  it('renders a button with variant + size classes', () => {
    render(<Button variant="highlight" size="lg">Jetzt anfragen</Button>);
    const b = screen.getByRole('button', { name: 'Jetzt anfragen' });
    expect(b.className).toContain('fei-btn--highlight');
    expect(b.className).toContain('fei-btn--lg');
    expect(b).toHaveProperty('type', 'button');
  });
  it('renders an anchor when href is set and adds rel for _blank', () => {
    render(<Button href="/x" target="_blank">Link</Button>);
    const a = screen.getByRole('link', { name: 'Link' });
    expect(a.getAttribute('href')).toBe('/x');
    expect(a.getAttribute('rel')).toBe('noopener noreferrer');
  });
  it('does not fire onClick when disabled', () => {
    const fn = vi.fn();
    render(<Button disabled onClick={fn} href="/x">Aus</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Aus' }));
    expect(fn).not.toHaveBeenCalled();
  });
});

describe('Input', () => {
  it('links label, marks invalid and describes the error', () => {
    render(<Input label="E-Mail" error="Pflichtfeld" required />);
    const field = screen.getByLabelText(/E-Mail/);
    expect(field.getAttribute('aria-invalid')).toBe('true');
    const msg = document.getElementById(field.getAttribute('aria-describedby')!);
    expect(msg?.textContent).toBe('Pflichtfeld');
    expect(msg?.className).toContain('fei-field__msg--error');
  });
  it('renders a textarea', () => {
    render(<Input label="Nachricht" as="textarea" />);
    expect(screen.getByLabelText('Nachricht').tagName).toBe('TEXTAREA');
  });
});

describe('Accordion', () => {
  it('is single-open and toggles aria-expanded', () => {
    render(<Accordion items={[{ q: 'A', a: 'a' }, { q: 'B', a: 'b' }]} defaultOpen={0} />);
    const [a, b] = screen.getAllByRole('button');
    expect(a.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(b);
    expect(a.getAttribute('aria-expanded')).toBe('false');
    expect(b.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(b);
    expect(b.getAttribute('aria-expanded')).toBe('false');
  });
});

describe('assets', () => {
  it('resolves icon and logo paths from <FeiAssets>', () => {
    render(
      <FeiAssets base="/static/fei/">
        <BrandIcon name="solar-panel" alt="Solar" />
        <Logo inverse variant="bamberg" />
      </FeiAssets>,
    );
    expect(screen.getByAltText('Solar').getAttribute('src')).toBe('/static/fei/icons/solar-panel.gif');
    expect(screen.getByAltText('fei Bürgerenergie eG').getAttribute('src')).toBe('/static/fei/brand/logo-weiss-bamberg.svg');
  });
  it('per-component base overrides the context', () => {
    render(<BrandIcon name="home" base="/x" alt="Haus" />);
    expect(screen.getByAltText('Haus').getAttribute('src')).toBe('/x/icons/home.gif');
  });
});

describe('surfaces & accents', () => {
  it('ServiceCard maps surface and renders as link', () => {
    render(<ServiceCard title="GGV" surface="feature" href="#">Text</ServiceCard>);
    expect(screen.getByRole('link').className).toContain('fei-service-card--feature');
    expect(screen.getByRole('heading', { level: 3, name: 'GGV' })).toBeTruthy();
  });
  it('StatBlock defaults to the green display accent', () => {
    const { container } = render(<StatBlock value="380" unit="+" label="Mitglieder" />);
    expect(container.firstElementChild!.className).toBe('fei-stat');
  });
  it('Card and Badge tones become classes', () => {
    const { container } = render(<><Card tone="feature" interactive>x</Card><Badge tone="warning" dot>!</Badge></>);
    expect(container.querySelector('.fei-card--feature.fei-card--interactive')).toBeTruthy();
    expect(container.querySelector('.fei-badge--warning .fei-badge__dot')).toBeTruthy();
  });
  it('Kampagne sets data-ground (none for cream)', () => {
    const { container } = render(<><Kampagne ground="gruen">a</Kampagne><Kampagne>b</Kampagne></>);
    const [g, c] = container.querySelectorAll('.fei-kampagne');
    expect(g.getAttribute('data-ground')).toBe('gruen');
    expect(c.hasAttribute('data-ground')).toBe(false);
  });
  it('Bubble masks with the asset URL inline', () => {
    const { container } = render(<FeiAssets base="/a"><Bubble>Jetzt!</Bubble></FeiAssets>);
    expect(container.querySelector('.fei-bubble__shape')!.getAttribute('style')).toContain('/a/elements/aufruf-bubble.svg');
  });
});
