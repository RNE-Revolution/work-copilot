import React from 'react';

export type ServiceAccent = 'green' | 'yellow';
export type ServiceSurface = 'plain' | 'feature' | 'feature-deep';

/**
 * Offering tile — icon + title + description + "Mehr erfahren →".
 * Lifts and turns its border green on hover.
 * @startingPoint section="Core" subtitle="Offering tile with hover lift" viewport="380x320"
 */
export interface ServiceCardProps {
  /** A BrandIcon name (string) or any React node for the icon slot. */
  icon?: string | React.ReactNode;
  /** Path passed to BrandIcon when `icon` is a name. */
  iconBase?: string;
  title: React.ReactNode;
  /** Description text (children). */
  children?: React.ReactNode;
  /** Link label; pass empty to hide. Default "Mehr erfahren". */
  cta?: string;
  href?: string;
  /** Accent for the CTA link. */
  accent?: ServiceAccent;
  /** Surface: 'plain' = white + soft shadow (default); 'feature' = solid green;
   *  'feature-deep' = green→navy gradient. Colored surfaces carry white text —
   *  use at most one per card group. */
  surface?: ServiceSurface;
  style?: React.CSSProperties;
}

/**
 * Offering tile — icon + title + description + "Mehr erfahren →".
 * Lifts and turns its border green on hover.
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
