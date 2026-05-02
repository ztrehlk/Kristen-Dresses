import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  /** Distance in px the element rises from. Defaults to 28. */
  y?: number;
  /** If true, only animates once. Defaults to true. */
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'li';
};

/**
 * Fade + rise on enter. Uses the editorial easing curve to match the rest of the site.
 * Wraps any block — used heavily on lookbook items, headlines, and editorial copy.
 */
export function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  className,
  as = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '0px 0px -10% 0px' });

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] } },
  };

  const Component = motion[as];
  return (
    <Component
      ref={ref as never}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}
