import React from 'react';

/**
 * fei StatBlock — a big Inter-900 number with a label. The hero/dashboard stat.
 * Figure is a GREEN display accent by default (yellow on green/navy, white on dark).
 */
export function StatBlock({
  value,
  unit,
  label,
  sub,
  accent = 'green',
  align = 'left',
  size = 'md',
  onDark = false,
  style = {},
  ...rest
}) {
  const accents = {
    green: 'var(--accent-display)',
    yellow: 'var(--fei-yellow)',
    navy: 'var(--fei-navy)',
    white: 'var(--fei-white)',
  };
  const sizes = {
    sm: '1.875rem',
    md: 'var(--text-stat)',
    lg: 'clamp(2.5rem, 5vw, 3.75rem)',
  };
  return (
    <div
      className="fei-stat"
      style={{ textAlign: align, fontFamily: 'var(--font-body)', ...style }}
      {...rest}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-black)',
          fontSize: sizes[size],
          lineHeight: 1,
          color: accents[accent] || accents.green,
          letterSpacing: 'var(--tracking-tight)',
        }}
      >
        {value}
        {unit && (
          <span style={{ fontSize: '0.5em', marginLeft: '0.25rem', fontWeight: 'var(--weight-bold)' }}>
            {unit}
          </span>
        )}
      </div>
      {label && (
        <div style={{ marginTop: '0.4rem', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)' }}>
          {label}
        </div>
      )}
      {sub && (
        <div style={{ marginTop: '0.15rem', fontSize: 'var(--text-xs)', color: onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>
          {sub}
        </div>
      )}
    </div>
  );
}
