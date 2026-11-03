import type { CSSProperties, ReactNode } from 'react';
import { useAssetBase } from './assets';
import { cx } from './cx';

/*
 * Kampagne elements (Brandkit 07/2026) — Plakat, Flyer, Social ONLY.
 * Use inside a `.fei-kampagne` container; they read its --blitz-stroke,
 * --bubble-fill/--bubble-text and --photo-tint tokens. Never on the website.
 */

export type KampagneGround = 'cream' | 'gelb' | 'violett' | 'gruen' | 'schwarz';

export interface KampagneProps {
  ground?: KampagneGround;
  as?: 'div' | 'section' | 'article';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** Context wrapper — sets the campaign ground and its colour pairings. */
export function Kampagne({ ground = 'cream', as: Comp = 'div', className, style, children }: KampagneProps) {
  return (
    <Comp
      className={cx('fei-kampagne', className)}
      data-ground={ground === 'cream' ? undefined : ground}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {children}
    </Comp>
  );
}

export interface BlitzProps {
  /** Rendered height in px. */
  height?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

/** Outline-only bolt that sits BEHIND a title. Never the filled logo bolt. */
export function Blitz({ height = 240, strokeWidth = 8, className, style }: BlitzProps) {
  return (
    <svg className={cx('fei-blitz', className)} viewBox="0 0 241 409" height={height} style={style} aria-hidden="true">
      <path
        strokeWidth={strokeWidth}
        d="M144.467 175.643L149.163 174.812L233.003 159.985L90.5928 394.951L88.8193 242.455L88.7617 237.574L83.9873 238.589L7.89062 254.767L144.467 15.0986V175.643Z"
      />
    </svg>
  );
}

export interface BubbleProps {
  children: ReactNode;
  /** aufruf = call to action (Bold Italic) · info = extra info (Medium Italic). */
  kind?: 'aufruf' | 'info';
  /** Width in px; height follows the bubble shape. */
  width?: number;
  fontSize?: number;
  base?: string;
  className?: string;
  style?: CSSProperties;
}

/** Speech bubble for calls-to-action / info. Centred, italic, 90 % leading, no caps. */
export function Bubble({ children, kind = 'aufruf', width = 200, fontSize, base, className, style }: BubbleProps) {
  const root = useAssetBase(base);
  // mask set inline so the URL resolves against the page, not the stylesheet
  const mask = `url("${root}/elements/aufruf-bubble.svg") center / contain no-repeat`;
  return (
    <div className={cx('fei-bubble', kind === 'info' && 'fei-bubble--info', className)} style={{ width, ...style }}>
      <span className="fei-bubble__shape" aria-hidden="true" style={{ WebkitMask: mask, mask }} />
      <p className="fei-bubble__text" style={{ fontSize: fontSize ?? Math.round(width / 10) }}>{children}</p>
    </div>
  );
}

export interface FotoBubbleProps {
  src: string;
  alt?: string;
  /** Diameter in px. */
  size?: number;
  /** Bottom corner it bleeds out of. */
  corner?: 'bottom-left' | 'bottom-right';
  /** Fraction of the circle cropped by the page edge (0–0.5). Default 0.25. */
  bleed?: number;
  className?: string;
  style?: CSSProperties;
}

/** Desaturated photo, tinted via --photo-tint (violet), circle-masked, cropped by a bottom corner. */
export function FotoBubble({ src, alt = '', size = 420, corner = 'bottom-right', bleed = 0.25, className, style }: FotoBubbleProps) {
  const offset = -Math.round(size * bleed);
  const pos: CSSProperties = corner === 'bottom-right'
    ? { right: offset, bottom: offset }
    : { left: offset, bottom: offset };
  return (
    <div className={cx('fei-foto-bubble', className)} style={{ width: size, height: size, ...pos, ...style }}>
      <img src={src} alt={alt} />
    </div>
  );
}

const PFEILE = {
  1: 60 / 146,
  2: 1079 / 1418,
  3: 2459 / 2882,
  4: 1346 / 1418,
  5: 1387 / 1124,
  6: 518 / 434,
} as const;

export type PfeilNr = keyof typeof PFEILE;
export type PfeilColor = 'gelb' | 'violett' | 'gruen';

export interface PfeilProps {
  nr?: PfeilNr;
  /** gelb on dark/violet grounds · violett on cream/yellow · grün allowed. */
  color?: PfeilColor;
  /** Rendered height in px. */
  height?: number;
  rotate?: number;
  base?: string;
  className?: string;
  style?: CSSProperties;
}

const PFEIL_COLORS: Record<PfeilColor, string> = {
  gelb: 'var(--fei-yellow)',
  violett: 'var(--fei-lila)',
  gruen: 'var(--fei-green)',
};

/** Hand-drawn arrow highlighter. 1–2 per layout, pointing at the key line or CTA. */
export function Pfeil({ nr = 1, color = 'gelb', height = 160, rotate = 0, base, className, style }: PfeilProps) {
  const root = useAssetBase(base);
  const mask = `url("${root}/elements/pfeil-${nr}.svg") center / contain no-repeat`;
  return (
    <span
      className={cx('fei-pfeil', className)}
      aria-hidden="true"
      style={{
        display: 'block',
        height,
        width: Math.round(height * PFEILE[nr]),
        background: PFEIL_COLORS[color],
        WebkitMask: mask,
        mask,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
    />
  );
}
