import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cx } from './cx';

interface FieldOwnProps {
  label?: string;
  /** Muted helper line below the field. */
  hint?: string;
  /** Error message — field + message turn warning amber (there is no red in the system). */
  error?: string;
  className?: string;
}

export type InputProps =
  | (FieldOwnProps & { as?: 'input' } & Omit<InputHTMLAttributes<HTMLInputElement>, keyof FieldOwnProps>)
  | (FieldOwnProps & { as: 'textarea' } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof FieldOwnProps>);

/** Labelled text field — white field, hairline border, lila focus (highlight role), amber error state. */
export function Input(props: InputProps) {
  const { label, hint, error, className, id, required, ...rest } = props;
  const autoId = useId();
  const fieldId = id ?? `fei-field-${autoId}`;
  const msgId = `${fieldId}-msg`;
  const message = error || hint;
  const control = {
    id: fieldId,
    required,
    className: 'fei-field__control',
    'aria-invalid': error ? true : undefined,
    'aria-describedby': message ? msgId : undefined,
  } as const;

  return (
    <div className={cx('fei-field', className)}>
      {label && (
        <label htmlFor={fieldId} className="fei-field__label">
          {label}
          {required && <span className="fei-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      {rest.as === 'textarea'
        ? (() => {
            const { as: _as, ...ta } = rest;
            return <textarea rows={4} {...ta} {...control} />;
          })()
        : (() => {
            const { as: _as, type = 'text', ...inp } = rest as Omit<InputHTMLAttributes<HTMLInputElement>, keyof FieldOwnProps> & { as?: 'input' };
            return <input type={type} {...inp} {...control} />;
          })()}
      {message && (
        <p id={msgId} className={cx('fei-field__msg', error && 'fei-field__msg--error')}>
          {message}
        </p>
      )}
    </div>
  );
}
