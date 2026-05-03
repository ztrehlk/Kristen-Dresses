import { LookbookGrid } from '../components/sections/LookbookGrid';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { pieces } from '../data/collections';

export function Portfolio() {
  // Compute the year range from the data so the header doesn't drift.
  const years = pieces.map((p) => p.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  const yearRange = min === max ? String(min) : `${min} – ${String(max).slice(-2)}`;

  return (
    <article className="pt-32 md:pt-40">
      {/* Page header — minimal, lets the grid take over fast */}
      <header className="px-6 pb-12 md:px-10 md:pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <ScrollReveal className="md:col-span-8">
            <span className="label-wide text-mute">— Portfolio</span>
            <h1 className="display-xl mt-4 text-5xl leading-[0.96] md:text-7xl lg:text-8xl">
              Lorem ipsum <em className="display-italic">dolor sit.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="md:col-span-4 md:col-start-9 md:pt-8">
            <p className="editorial text-base text-cream/75 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
            <div className="mt-6 flex gap-8 border-t hairline pt-4">
              <div>
                <span className="label-wide text-mute">Pieces</span>
                <p className="display-italic mt-1 text-xl">
                  {String(pieces.length).padStart(2, '0')}
                </p>
              </div>
              <div>
                <span className="label-wide text-mute">Years</span>
                <p className="display-italic mt-1 text-xl">{yearRange}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <LookbookGrid pieces={pieces} />
    </article>
  );
}
