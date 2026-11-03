import React from 'react';

/**
 * fei Input — labelled text field. Cream-friendly: white field, hairline
 * border, lila focus ring (highlight role). Supports an error state (warning amber).
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  hint,
  error,
  required = false,
  as = 'input',
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? `fei-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error
    ? 'var(--fei-warning)'
    : focused ? 'var(--fei-lila)' : 'var(--border-default)';
  const Field = as;

  return (
    <div className="fei-field" style={{ fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          display: 'block',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-body)',
          marginBottom: '0.4rem',
        }}>
          {label}{required && <span style={{ color: 'var(--fei-warning)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <Field
        id={fieldId}
        type={as === 'input' ? type : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={as === 'textarea' ? 4 : undefined}
        style={{
          width: '100%',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-body)',
          background: 'var(--fei-white)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          padding: '0.7rem 0.9rem',
          outline: 'none',
          boxShadow: focused && !error ? '0 0 0 3px var(--fei-lila-wash)' : 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          resize: as === 'textarea' ? 'vertical' : undefined,
          boxSizing: 'border-box',
        }}
        {...rest}
      />
      {(hint || error) && (
        <p style={{
          margin: '0.4rem 0 0',
          fontSize: 'var(--text-xs)',
          color: error ? 'var(--fei-warning)' : 'var(--text-muted)',
        }}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
