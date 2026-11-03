import type { HTMLAttributes, ReactNode } from 'react';
import { BrandIcon, type BrandIconName } from './BrandIcon';
import { ArrowRightIcon } from './icons';
import { cx } from './cx';

export type ServiceAccent = 'green' | 'yellow';
export type ServiceSurface = 'plain' | 'feature' | 'feature-deep';

export interface ServiceCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** A BrandIcon name or any React node for the icon slot. */
  icon?: BrandIconName | ReactNode;
  /** Asset base passed to BrandIcon when `icon` is a name. */
  iconBase?: string;
  title: ReactNode;
  /** Description text. */
  children?: ReactNode;
  /** Link label; pass "" to hide. Default "Mehr erfahren". */
  cta?: string;
  /** Renders the card as an <a>. */
  href?: string;
  /** CTA link colour on plain cards. */
  accent?: ServiceAccent;
  /**
   * plain (white + soft shadow, default) · feature (solid green) · feature-deep (green→navy).
   * Colored surfaces carry white text — use at most ONE per card group.
   */
  surface?: ServiceSurface;
  /** Heading level of the title. Default 3. */
  headingLevel?: 2 | 3 | 4;
}

/** Offering tile — icon, title, description, "Mehr erfahren →". Lifts + green border on hover. */
export function ServiceCard({
  icon,
  iconBase,
  title,
  children,
  cta = 'Mehr erfahren',
  href,
  accent = 'green',
  surface = 'plain',
  headingLevel = 3,
  className,
  ...rest
}: ServiceCardProps) {
  const iconNode = typeof icon === 'string'
    ? <BrandIcon name={icon as BrandIconName} base={iconBase} size={56} framed />
    : icon;
  const Heading = `h${headingLevel}` as 'h3';
  const Comp = href ? 'a' : 'div';
  return (
    <Comp
      href={href}
      className={cx(
        'fei-service-card',
        surface !== 'plain' && `fei-service-card--${surface}`,
        accent === 'yellow' && 'fei-service-card--accent-yellow',
        className,
      )}
      {...rest}
    >
      <div>
        {iconNode && <div className="fei-service-card__icon">{iconNode}</div>}
        <Heading className="fei-service-card__title">{title}</Heading>
        {children && <p className="fei-service-card__body">{children}</p>}
      </div>
      {cta && (
        <span className="fei-service-card__cta">
          {cta}
          <ArrowRightIcon />
        </span>
      )}
    </Comp>
  );
}
