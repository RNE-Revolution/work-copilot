import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

export type EyebrowTone = 'green' | 'muted' | 'inverse';

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  /** green (default), muted (grey), inverse (on dark sections). */
  tone?: EyebrowTone;
}

/** Small uppercase, letter-spaced kicker placed above every section headline. */
export function Eyebrow({ children, tone = 'green', className, ...rest }: EyebrowProps) {
  return (
    <p className={cx('fei-eyebrow', tone !== 'green' && `fei-eyebrow--${tone}`, className)} {...rest}>
      {children}
    </p>
  );
}
