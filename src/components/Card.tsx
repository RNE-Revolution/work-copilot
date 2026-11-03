import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

/**
 * white    — default web card (white + soft shadow)
 * soft     — faint sunken fill (cool grey on web, cream-mid under .fei-paper)
 * navy     — inverse / dark
 * green    — solid feature card, white text   ┐ colored feature surfaces:
 * gradient — green→navy feature card          ┘ max ONE per card group
 */
export type CardTone = 'white' | 'soft' | 'navy' | 'green' | 'gradient';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  tone?: CardTone;
  /** Hover lift + green border. */
  interactive?: boolean;
  /** CSS padding. Default var(--space-6) = 2rem. */
  padding?: CSSProperties['padding'];
  as?: ElementType;
}

/** Base surface card — hairline border + soft shadow on white. */
export function Card({
  children,
  tone = 'white',
  interactive = false,
  padding = 'var(--space-6)',
  as: Comp = 'div',
  className,
  style,
  ...rest
}: CardProps) {
  return (
    <Comp
      className={cx('fei-card', tone !== 'white' && `fei-card--${tone}`, interactive && 'fei-card--interactive', className)}
      style={{ padding, ...style }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
