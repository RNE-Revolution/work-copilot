import React from 'react';

/**
 * fei Avatar — initials circle. Green fill + white initials by default, as on
 * the testimonial cards. Accepts an image src.
 */
export function Avatar({
  initials,
  src,
  alt = '',
  size = 40,
  tone = 'green',
  style = {},
  ...rest
}) {
  const tones = {
    green: { background: 'var(--action-primary)', color: 'var(--fei-white)' },
    lila: { background: 'var(--accent-highlight)', color: 'var(--fei-white)' },
    terrakotta: { background: 'var(--accent-highlight)', color: 'var(--fei-white)' }, // alias → lila
    navy: { background: 'var(--fei-navy)', color: 'var(--fei-cream-soft)' },
    cream: { background: 'var(--fei-cream-mid)', color: 'var(--fei-navy)' },
  };
  return (
    <span
      className="fei-avatar"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.34,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </span>
  );
}
