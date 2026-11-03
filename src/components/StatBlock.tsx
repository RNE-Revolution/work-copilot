import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

/** Display-figure colour: GREEN on light surfaces, YELLOW on green/navy, white on dark. Never lila. */
export type StatAccent = 'green' | 'yellow' | 'navy' | 'white';

export interface StatBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** The big figure. German formatting: "1.500", "4". */
  value: ReactNode;
  /** Small unit beside the figure: "kWp", "%", "t", "+". */
  unit?: string;
  label?: ReactNode;
  sub?: ReactNode;
  accent?: StatAccent;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  /** Light label/sub text for dark backgrounds. */
  onDark?: boolean;
}

/** Large Inter-900 statistic with label — the hero / dashboard metric block. */
export function StatBlock({
  value,
  unit,
  label,
  sub,
  accent = 'green',
  align = 'left',
  size = 'md',
  onDark = false,
  className,
  ...rest
}: StatBlockProps) {
  return (
    <div
      className={cx(
        'fei-stat',
        accent !== 'green' && `fei-stat--${accent}`,
        size !== 'md' && `fei-stat--${size}`,
        align === 'center' && 'fei-stat--center',
        onDark && 'fei-stat--on-dark',
        className,
      )}
      {...rest}
    >
      <div className="fei-stat__figure">
        {value}
        {unit && <span className="fei-stat__unit">{unit}</span>}
      </div>
      {label && <div className="fei-stat__label">{label}</div>}
      {sub && <div className="fei-stat__sub">{sub}</div>}
    </div>
  );
}
