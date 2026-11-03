import React from 'react';

export type TagVariant = 'soft' | 'solid' | 'outline' | 'neutral';

export interface TagProps {
  children: React.ReactNode;
  /** soft (green wash, default), solid (green fill), outline, neutral (cream). */
  variant?: TagVariant;
  style?: React.CSSProperties;
}

/** Category / topic tag, brand-green by default. */
export function Tag(props: TagProps): JSX.Element;
