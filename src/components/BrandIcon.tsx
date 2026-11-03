import type { CSSProperties } from 'react';
import { useAssetBase } from './assets';
import { cx } from './cx';

/** The 21 bundled animated outline icons (assets/icons/*.gif). */
export const BRAND_ICON_NAMES = [
  'solar-panel', 'electric-car', 'bar-chart-growth', 'dividends',
  'home', 'location-pin', 'approve-checked', 'clock-time',
  'consultation', 'growing-plant', 'recycling', 'water-drop',
  'cloud', 'magnifier-search', 'bicycle', 'person-protest',
  'privacy-policy', 'rules', 'glasses-eye', 'desert', 'melting-glacier',
] as const;

export type BrandIconName = (typeof BRAND_ICON_NAMES)[number];

export interface BrandIconProps {
  name: BrandIconName;
  /** Rendered px size (square). Default 56. Use 40–96. */
  size?: number;
  /** Override the asset base URL (defaults to <FeiAssets> / "/assets"). */
  base?: string;
  /** Accessible label; leave empty for decorative use. */
  alt?: string;
  /** Wrap in a soft rounded tile. */
  framed?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Animated brand outline icon (looping GIF, navy stroke + yellow #FFE600 accent).
 * Raster — cannot be recoloured. Place on white/light surfaces, never on yellow.
 */
export function BrandIcon({ name, size = 56, base, alt = '', framed = false, className, style }: BrandIconProps) {
  const root = useAssetBase(base);
  const img = (
    <img
      src={`${root}/icons/${name}.gif`}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className={cx('fei-brandicon', !framed && className)}
      style={framed ? undefined : style}
    />
  );
  if (!framed) return img;
  return (
    <span
      className={cx('fei-brandicon-frame', className)}
      style={{ width: size + 28, height: size + 28, ...style }}
    >
      {img}
    </span>
  );
}
