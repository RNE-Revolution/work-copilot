import React from 'react';

/**
 * fei Accordion — FAQ disclosure list. Each item toggles open; the "+" chip
 * rotates 45° and flips to green when expanded (matches the site's CSS-only
 * accordion). Pass items=[{ q, a }].
 */
export function Accordion({ items = [], defaultOpen = -1, style = {}, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="fei-accordion" style={{ fontFamily: 'var(--font-body)', ...style }} {...rest}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="fei-accordion-item">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                padding: '1.25rem 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--border-default)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--weight-semibold)',
                color: isOpen ? 'var(--fei-green-700)' : 'var(--text-body)',
                transition: 'color var(--dur-fast)',
              }}
            >
              {item.q}
              <span style={{
                flexShrink: 0,
                width: 24,
                height: 24,
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isOpen ? 'var(--fei-green)' : 'var(--fei-cream-mid)',
                color: isOpen ? 'var(--fei-white)' : 'var(--fei-navy)',
                transform: isOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-fast)',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: isOpen ? 480 : 0,
              transition: 'max-height var(--dur-base) var(--ease-out)',
            }}>
              <div style={{
                padding: '0.85rem 0 1.25rem',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                fontSize: 'var(--text-sm)',
              }}>
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
