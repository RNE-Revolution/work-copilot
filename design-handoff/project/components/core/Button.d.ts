import React from 'react';

export type ButtonVariant = 'primary' | 'highlight' | 'secondary' | 'ghost' | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Pill action button. Green primary is the dominant CTA across fei surfaces.
 * @startingPoint section="Core" subtitle="Pill buttons — primary, highlight, secondary, inverse" viewport="700x200"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /**
   * primary  — solid green pill, white text (default action)
   * highlight — brand-yellow fill with BLACK text (hero CTA)
   * secondary — white pill, navy text, hairline border
   * ghost     — text-only green
   * inverse   — translucent glass pill for dark/photo backgrounds
   */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon node placed after the label (e.g. an arrow → SVG). */
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  /** Render as <a> when set. */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

/**
 * Pill action button. Green primary is the dominant CTA across fei surfaces.
 */
export function Button(props: ButtonProps): JSX.Element;
