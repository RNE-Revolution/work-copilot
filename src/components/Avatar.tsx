import type { CSSProperties } from 'react';
import { cx } from './cx';

/** lila is allowed here because avatars live in reviews — the sanctioned highlight zone. */
export type AvatarTone = 'green' | 'lila' | 'navy' | 'cream';

export interface AvatarProps {
  /** Initials shown when no image, e.g. "MK". */
  initials?: string;
  src?: string;
  alt?: string;
  /** Diameter in px. Default 40. */
  size?: number;
  tone?: AvatarTone;
  className?: string;
  style?: CSSProperties;
}

/** Round avatar — initials on a brand fill, or an image. */
export function Avatar({ initials, src, alt = '', size = 40, tone = 'green', className, style }: AvatarProps) {
  return (
    <span
      className={cx('fei-avatar', `fei-avatar--${tone}`, className)}
      style={{ width: size, height: size, fontSize: size * 0.34, ...style }}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : alt || initials}
    >
      {src ? <img src={src} alt={alt} /> : <span aria-hidden="true">{initials}</span>}
    </span>
  );
}
