import React from 'react';

/**
 * fei Tag — small label for project categories / topics. Brand-green wash by
 * default; can be solid green, or a neutral cream tone.
 */
export function Tag({ children, variant = 'soft', style = {}, ...rest }) {
  const variants = {
    soft:    { background: 'var(--fei-green-wash)', color: 'var(--fei-green-700)', border: '1px solid transparent' },
    solid:   { background: 'var(--action-primary)', color: 'var(--text-on-green)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--fei-green-700)', border: '1px solid var(--fei-green)' },
    neutral: { background: 'var(--fei-cream-mid)', color: 'var(--fei-navy)', border: '1px solid transparent' },
  };
  return (
    <span
      className="fei-tag"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 1,
        padding: '0.3rem 0.7rem',
        borderRadius: 'var(--radius-pill)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
