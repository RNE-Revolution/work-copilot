import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

export type TagVariant = 'soft' | 'solid' | 'outline' | 'neutral';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  /** soft (green wash, default), solid (green fill), outline, neutral (grey on web, cream on paper). */
  variant?: TagVariant;
}

/** Category / topic tag, brand-green by default. */
export function Tag({ children, variant = 'soft', className, ...rest }: TagProps) {
  return (
    <span className={cx('fei-tag', `fei-tag--${variant}`, className)} {...rest}>
      {children}
    </span>
  );
}
