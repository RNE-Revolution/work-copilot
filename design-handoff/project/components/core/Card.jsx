import React from 'react';

/**
 * fei Card — the base surface. White (or cream) fill, hairline border, soft
 * shadow, rounded. `interactive` adds the signature hover lift + green border.
 */
export function Card({
  children,
  tone = 'white',
  interactive = false,
  padding = 'var(--space-6)',
  as = 'div',
  style = {},
  className = '',
  ...rest
}) {
  const tones = {
    white: { background: 'var(--surface-card)', color: 'var(--text-body)' },
    soft:  { background: 'var(--surface-card-soft)', color: 'var(--text-body)' },
    cream: { background: 'var(--surface-card-soft)', color: 'var(--text-body)' }, // alias → soft (cream under .fei-paper)
    navy:  { background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)' },
    green: { background: 'var(--surface-feature)', color: 'var(--fei-white)' },
    gradient: { background: 'var(--surface-feature-gradient)', color: 'var(--fei-white)' },
  };
  const onDark = tone === 'navy' || tone === 'green' || tone === 'gradient';
  const Comp = as;
  return (
    <Comp
      className={`fei-card${interactive ? ' fei-card--interactive' : ''} ${className}`}
      style={{
        borderRadius: 'var(--radius-lg)',
        border: `var(--border-width-card) solid ${tone === 'navy' ? 'rgba(255,255,255,0.08)' : onDark ? 'transparent' : 'var(--border-default)'}`,
        boxShadow: tone === 'navy' ? 'none' : onDark ? 'var(--shadow-sticky)' : 'var(--shadow-card)',
        padding,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
