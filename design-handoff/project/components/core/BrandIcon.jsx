import React from 'react';

/**
 * fei BrandIcon — renders one of the brand's animated outline GIF icons
 * (navy stroke + brand-yellow #FFE600 accent, looping line-draw). Raster, so it
 * cannot be CSS-recoloured; place on white or any light surface, never on yellow.
 */
export function BrandIcon({
  name,
  size = 56,
  base = 'assets/icons',
  alt = '',
  framed = false,
  style = {},
  ...rest
}) {
  const img = (
    <img
      src={`${base}/${name}.gif`}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        ...(framed ? {} : style),
      }}
      {...(framed ? {} : rest)}
    />
  );

  if (!framed) return img;

  return (
    <span
      className="fei-brandicon-frame"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size + 28,
        height: size + 28,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-card-soft)',
        border: '1px solid var(--border-default)',
        ...style,
      }}
      {...rest}
    >
      {img}
    </span>
  );
}
