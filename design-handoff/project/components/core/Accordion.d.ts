import React from 'react';

export interface AccordionItem {
  q: React.ReactNode;
  a: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed (default). */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

/**
 * FAQ disclosure list. The "+" chip rotates 45° and turns green when open.
 */
export function Accordion(props: AccordionProps): JSX.Element;
