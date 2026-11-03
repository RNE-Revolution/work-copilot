import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

/** Functional palette only: success (green) and warning (amber). Danger/info were retired. */
export type BadgeTone = 'neutral' | 'success' | 'warning';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  /** Warning is amber #D97706 — deliberately NOT brand yellow. */
  tone?: BadgeTone;
  /** Leading status dot. */
  dot?: boolean;
}

/** Small status pill using the functional colour palette. */
export function Badge({ children, tone = 'neutral', dot = false, className, ...rest }: BadgeProps) {
  return (
    <span className={cx('fei-badge', `fei-badge--${tone}`, className)} {...rest}>
      {dot && <span className="fei-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
