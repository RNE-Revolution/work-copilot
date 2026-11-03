import { useId, useState, type HTMLAttributes, type ReactNode } from 'react';
import { PlusIcon } from './icons';
import { cx } from './cx';

export interface AccordionItem {
  q: ReactNode;
  a: ReactNode;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Index open on mount; -1 = all closed (default). Single-open behaviour. */
  defaultOpen?: number;
}

/** FAQ disclosure list. The "+" chip rotates 45° and turns green when open. */
export function Accordion({ items, defaultOpen = -1, className, ...rest }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  return (
    <div className={cx('fei-accordion', className)} {...rest}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-t${i}`;
        const panelId = `${uid}-p${i}`;
        return (
          <div key={i} className="fei-accordion__item">
            <button
              type="button"
              id={btnId}
              className="fei-accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="fei-accordion__chip"><PlusIcon /></span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="fei-accordion__panel"
              data-open={isOpen}
              inert={!isOpen || undefined}
            >
              <div>
                <div className="fei-accordion__content">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
