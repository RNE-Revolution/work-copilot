import React from 'react';

export type CardTone = 'white' | 'soft' | 'cream' | 'navy' | 'green' | 'gradient';

export interface CardProps {
  children: React.ReactNode;
  /** white (default), soft (faint sunken fill), cream (alias of soft — warm under .fei-paper),
   *  navy (inverse/dark), green (solid feature), gradient (green→navy feature). */
  tone?: CardTone;
  /** Adds hover lift + green border (pair with .fei-card--interactive CSS, or rely on inline). */
  interactive?: boolean;
  /** CSS padding value. Default var(--space-6) = 2rem. */
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
}

/** Base surface card — hairline border + soft shadow on white; colored feature tones carry white text. */
export function Card(props: CardProps): JSX.Element;
