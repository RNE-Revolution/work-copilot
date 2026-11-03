import React from 'react';

export type EyebrowTone = 'green' | 'muted' | 'inverse';

export interface EyebrowProps {
  children: React.ReactNode;
  /** green (default), muted (grey), inverse (on dark). */
  tone?: EyebrowTone;
  style?: React.CSSProperties;
}

/**
 * Small uppercase letter-spaced kicker placed above section headlines.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
