import React from 'react';

/**
 * fei Eyebrow — the small uppercase kicker that sits above every section
 * headline. Green by default; accepts other accent tones.
 */
export function Eyebrow({ children, tone = 'green', style = {}, ...rest }) {
  const tones = {
    green: 'var(--action-primary)',
    muted: 'var(--text-muted)',
    inverse: 'var(--fei-green)',
  };
  return (
    <p
      className="fei-eyebrow"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--eyebrow-size)',
        fontWeight: 'var(--eyebrow-weight)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-eyebrow)',
        color: tones[tone] || tones.green,
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}
