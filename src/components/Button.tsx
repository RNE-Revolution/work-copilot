import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { cx } from './cx';

export type ButtonVariant = 'primary' | 'highlight' | 'secondary' | 'ghost' | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps {
  children: ReactNode;
  /**
   * primary   — solid green pill, white text (default action)
   * highlight — brand-yellow fill with BLACK text (the one key conversion CTA)
   * secondary — white pill, navy text, hairline border
   * ghost     — text-only green
   * inverse   — translucent glass pill for dark/photo backgrounds
   */
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** Renders an <a> when set (and not disabled). */
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

/** Pill action button. Green primary is the dominant CTA across fei surfaces. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  href,
  disabled = false,
  className,
  onClick,
  type = 'button',
  target,
  rel,
  ...rest
}: ButtonProps) {
  const cls = cx('fei-btn', `fei-btn--${variant}`, `fei-btn--${size}`, className);
  const inner = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {inner}
    </button>
  );
}
