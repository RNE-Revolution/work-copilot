import React from 'react';

export type BadgeTone = 'neutral' | 'success' | 'warning';

export interface BadgeProps {
  children: React.ReactNode;
  /** Functional tone. Warning is amber #D97706 — deliberately NOT brand yellow. */
  tone?: BadgeTone;
  /** Show a leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small status pill using the functional colour palette. */
export function Badge(props: BadgeProps): JSX.Element;
