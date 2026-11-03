import React from 'react';

/**
 * fei Button — pill-shaped action. Primary is the solid green pill that
 * appears across the site; highlight is the yellow CTA (black text).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconRight,
  iconLeft,
  href,
  disabled = false,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0.5rem 1.125rem', fontSize: 'var(--text-sm)' },
    md: { padding: '0.75rem 1.75rem', fontSize: 'var(--text-base)' },
    lg: { padding: '1rem 2rem', fontSize: 'var(--text-base)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-bold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-fast), box-shadow var(--dur-fast), color var(--dur-fast)',
    opacity: disabled ? 0.5 : 1,
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-green)',
      boxShadow: 'var(--shadow-cta)',
    },
    highlight: {
      background: 'var(--action-highlight)',
      color: 'var(--text-on-yellow)',
      boxShadow: 'var(--shadow-cta-yellow)',
    },
    secondary: {
      background: 'var(--fei-white)',
      color: 'var(--fei-navy)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-primary)',
      border: '1px solid transparent',
    },
    'inverse': {
      background: 'rgba(255,255,255,0.10)',
      color: 'var(--fei-white)',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(8px)',
    },
  };

  const cls = `fei-btn fei-btn--${variant}`;
  const props = {
    className: cls,
    style: { ...base, ...variants[variant], ...style },
    onClick: disabled ? undefined : onClick,
    'aria-disabled': disabled || undefined,
    ...rest,
  };

  const inner = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return <a href={href} {...props}>{inner}</a>;
  }
  return <button type={type} disabled={disabled} {...props}>{inner}</button>;
}
