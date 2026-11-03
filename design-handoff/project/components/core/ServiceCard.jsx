import React from 'react';
import { BrandIcon } from './BrandIcon.jsx';

/**
 * fei ServiceCard — the offering tile from the marketing site. Icon, title,
 * description and a "Mehr erfahren →" link. Lifts + turns its border green on
 * hover (the signature interaction). Renders as an <a> when href is set.
 */
export function ServiceCard({
  icon,            // BrandIcon name OR a React node
  iconBase = 'assets/icons',
  title,
  children,
  cta = 'Mehr erfahren',
  href,
  accent = 'green',
  surface = 'plain',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accents = {
    green: 'var(--fei-green)',
    yellow: 'var(--fei-yellow-deep)',
  };
  const accentColor = accents[accent] || accents.green;

  // surface: 'plain' = white + soft shadow (default); 'feature' = solid green;
  // 'feature-deep' = green→navy gradient. Colored surfaces carry white text and
  // should be used sparingly — at most one per card group.
  const surfaces = {
    plain:          { bg: 'var(--surface-card)', title: 'var(--text-body)', body: 'var(--text-secondary)', border: 'var(--border-default)', shadow: 'var(--shadow-card)', onDark: false },
    feature:        { bg: 'var(--surface-feature)', title: 'var(--fei-white)', body: 'rgba(255,255,255,0.86)', border: 'transparent', shadow: 'var(--shadow-cta)', onDark: true },
    'feature-deep': { bg: 'var(--surface-feature-gradient)', title: 'var(--fei-white)', body: 'rgba(255,255,255,0.80)', border: 'transparent', shadow: 'var(--shadow-sticky)', onDark: true },
  };
  const sf = surfaces[surface] || surfaces.plain;
  const ctaColor = sf.onDark ? 'var(--fei-white)' : accentColor;

  const iconNode = typeof icon === 'string'
    ? <BrandIcon name={icon} base={iconBase} size={56} framed />
    : icon;

  const Comp = href ? 'a' : 'div';
  return (
    <Comp
      href={href}
      className="fei-service-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        background: sf.bg,
        border: `var(--border-width-card) solid ${hover && !sf.onDark ? 'var(--fei-green)' : sf.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        boxShadow: hover ? (sf.onDark ? 'var(--shadow-sticky)' : 'var(--shadow-green)') : sf.shadow,
        transform: hover ? 'translateY(-8px) scale(1.01)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
        cursor: href ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      <div>
        {iconNode && <div style={{ marginBottom: 'var(--space-4)' }}>{iconNode}</div>}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-2xl)',
          color: sf.title,
          lineHeight: 'var(--leading-snug)',
          margin: '0 0 0.5rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: sf.body,
          lineHeight: 'var(--leading-relaxed)',
          margin: 0,
        }}>
          {children}
        </p>
      </div>
      {cta && (
        <div style={{
          marginTop: 'var(--space-5)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: ctaColor,
        }}>
          {cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </Comp>
  );
}
