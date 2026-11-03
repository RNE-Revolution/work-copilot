import type { CSSProperties } from 'react';
import { useAssetBase } from './assets';
import { cx } from './cx';

export type LogoVariant = 'default' | 'bamberg' | 'wuerzburg';

export interface LogoProps {
  /** Main logo or a Lokalgruppe lockup. */
  variant?: LogoVariant;
  /** White wordmark for dark / coloured grounds. The yellow bolt is never recoloured. */
  inverse?: boolean;
  /** Rendered height in px. Default 40. Keep clear space ≥ ½ logo height. */
  height?: number;
  base?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

const FILES: Record<LogoVariant, [string, string]> = {
  default: ['logo.svg', 'logo-weiss.svg'],
  bamberg: ['logo-bamberg.svg', 'logo-weiss-bamberg.svg'],
  wuerzburg: ['logo-wuerzburg.svg', 'logo-weiss-wuerzburg.svg'],
};

/** fei logo — yellow bolt + "fei" wordmark (Brandkit 07/2026). */
export function Logo({
  variant = 'default',
  inverse = false,
  height = 40,
  base,
  alt = 'fei Bürgerenergie eG',
  className,
  style,
}: LogoProps) {
  const root = useAssetBase(base);
  const file = FILES[variant][inverse ? 1 : 0];
  return (
    <span className={cx('fei-logo', className)} style={{ height, ...style }}>
      <img src={`${root}/brand/${file}`} alt={alt} height={height} />
    </span>
  );
}
