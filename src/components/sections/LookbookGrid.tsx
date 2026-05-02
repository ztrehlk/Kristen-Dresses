import { useState } from 'react';
import type { Look } from '../../data/collections';
import { Lightbox } from '../ui/Lightbox';
import { ScrollReveal } from '../ui/ScrollReveal';

type Props = {
  looks: Look[];
};

/**
 * Asymmetric editorial grid. Each look opts into a span via its `span` property:
 *   - 'normal' → 1 col, standard height
 *   - 'tall'   → 1 col, doubled height
 *   - 'wide'   → 2 cols on desktop, single height
 * Click opens the Lightbox; hover reveals the caption.
 */
export function LookbookGrid({ looks }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 px-6 md:grid-cols-2 md:gap-x-6 md:gap-y-14 md:px-10 lg:grid-cols-3">
        {looks.map((look, i) => {
          const span = look.span ?? 'normal';
          const colSpan = span === 'wide' ? 'lg:col-span-2 md:col-span-2' : '';
          const aspect =
            span === 'tall'
              ? 'aspect-[3/5]'
              : span === 'wide'
              ? 'aspect-[16/9]'
              : 'aspect-[4/5]';

          return (
            <ScrollReveal key={look.id} delay={(i % 3) * 0.08} className={colSpan}>
              <button
                type="button"
                data-cursor="hover"
                onClick={() => setOpenIndex(i)}
                className="reset-btn group relative block w-full text-left"
                aria-label={`Open ${look.title}`}
              >
                <div className={`relative w-full overflow-hidden bg-bone-deep ${aspect}`}>
                  <img
                    src={look.imageUrl}
                    alt={look.title}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                    draggable={false}
                  />
                  {/* Hover veil */}
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <span className="label-wide text-pewter">
                      Look {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display-italic mt-1.5 text-2xl md:text-3xl">
                      {look.title}
                    </h3>
                  </div>
                  <span className="label text-ink/50">{look.year}</span>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      <Lightbox
        looks={looks}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </>
  );
}
