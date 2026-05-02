import { LookbookGrid } from '../components/sections/LookbookGrid';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { atelier } from '../data/collections';

export function Atelier() {
  return (
    <article className="pt-32 md:pt-40">
      {/* Page header */}
      <header className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <ScrollReveal className="md:col-span-8">
            <span className="label-wide text-pewter">— Kristen Andron</span>
            <h1 className="display-xl mt-5 text-6xl leading-[0.96] md:text-8xl lg:text-9xl">
              The <em className="display-italic">ready-to-wear</em> line.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="md:col-span-4 md:col-start-9 md:pt-12">
            <p className="editorial text-lg text-ink/75 md:text-xl">
              A small collection released alongside the bridal practice. Same
              hand, broader reach.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {atelier.map((collection, i) => (
        <section
          key={collection.id}
          className={[i > 0 ? 'mt-28 md:mt-40' : '', 'scroll-mt-24'].join(' ')}
          id={collection.id}
        >
          {/* Collection header — runs as a thin band so the lookbook is the focus */}
          <ScrollReveal>
            <div className="mb-12 px-6 md:mb-16 md:px-10">
              <div className="flex flex-col gap-6 border-y hairline py-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="label-wide text-pewter">
                    Chapter {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="display-xl mt-3 text-5xl leading-tight md:text-6xl">
                    {collection.name}{' '}
                    <em className="display-italic text-pewter">
                      / {collection.tagline}
                    </em>
                  </h2>
                </div>
                <p className="editorial max-w-md text-pewter md:text-right">
                  {collection.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <LookbookGrid looks={collection.looks} />
        </section>
      ))}
    </article>
  );
}
