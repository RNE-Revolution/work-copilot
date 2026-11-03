import React from 'react';

export type StatAccent = 'green' | 'yellow' | 'navy' | 'white';

/**
 * Large Inter-900 statistic with label — the hero / dashboard metric block.
 * @startingPoint section="Core" subtitle="Big editorial statistic figure" viewport="700x180"
 */
export interface StatBlockProps {
  /** The big figure, e.g. "380" or "257". Format numbers German-style (1.500). */
  value: React.ReactNode;
  /** Unit shown small beside the figure, e.g. "kWp", "%", "t". */
  unit?: string;
  /** Caption under the figure. */
  label?: string;
  /** Smaller muted sub-line. */
  sub?: string;
  /** Figure colour. Green display figure by default; yellow on green/navy; white on dark. */
  accent?: StatAccent;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  /** Light label/sub text for dark backgrounds. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * Large Inter-900 statistic with label — the hero / dashboard metric block.
 */
export function StatBlock(props: StatBlockProps): JSX.Element;
