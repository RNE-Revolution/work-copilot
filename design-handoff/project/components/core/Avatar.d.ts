import React from 'react';

export type AvatarTone = 'green' | 'lila' | 'navy' | 'cream';

export interface AvatarProps {
  /** Initials shown when no image, e.g. "MK". */
  initials?: string;
  src?: string;
  alt?: string;
  /** Diameter in px. Default 40. */
  size?: number;
  tone?: AvatarTone;
  style?: React.CSSProperties;
}

/** Round avatar — initials on a brand fill, or an image. */
export function Avatar(props: AvatarProps): JSX.Element;
