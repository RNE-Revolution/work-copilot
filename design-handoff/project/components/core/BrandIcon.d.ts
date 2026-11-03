import React from 'react';

/** Bundled animated outline icons (see assets/icons/). */
export type BrandIconName =
  | 'solar-panel' | 'electric-car' | 'bar-chart-growth' | 'dividends'
  | 'home' | 'location-pin' | 'approve-checked' | 'clock-time'
  | 'consultation' | 'growing-plant' | 'recycling' | 'water-drop'
  | 'cloud' | 'magnifier-search' | 'bicycle' | 'person-protest'
  | 'privacy-policy' | 'rules' | 'glasses-eye' | 'desert' | 'melting-glacier';

export interface BrandIconProps {
  /** Icon file stem from assets/icons (without .gif). */
  name: BrandIconName;
  /** Rendered px size (icon is square). Default 56. */
  size?: number;
  /** Path to the icons folder, relative to the page. Default 'assets/icons'. */
  base?: string;
  /** Accessible label; leave empty for decorative use. */
  alt?: string;
  /** Wrap in a soft cream rounded frame. */
  framed?: boolean;
  style?: React.CSSProperties;
}

/**
 * Animated brand outline icon (looping GIF). Raster — never recoloured.
 */
export function BrandIcon(props: BrandIconProps): JSX.Element;
