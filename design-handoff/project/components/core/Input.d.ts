import React from 'react';

export interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  /** Muted helper line below the field. */
  hint?: string;
  /** Error message — turns the field + message warning amber. */
  error?: string;
  required?: boolean;
  /** Render as a multiline textarea instead of input. */
  as?: 'input' | 'textarea';
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  style?: React.CSSProperties;
}

/** Labelled text field with green focus ring and warning error state. */
export function Input(props: InputProps): JSX.Element;
