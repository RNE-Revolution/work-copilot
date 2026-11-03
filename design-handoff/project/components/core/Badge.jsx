import React from 'react';

/**
 * fei Badge — status pill for functional states. Uses the functional palette
 * (success / warning) plus neutral.
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--fei-cream-mid)', fg: 'var(--fei-navy)' },
    success: { bg: 'rgba(21,128,61,0.12)', fg: 'var(--fei-success)' },
    warning: { bg: 'rgba(217,119,6,0.14)', fg: 'var(--fei-warning)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      className="fei-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 1,
        padding: '0.35rem 0.7rem',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
      )}
      {children}
    </span>
  );
}
