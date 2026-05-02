import { ScrollReveal } from '../components/ui/ScrollReveal';
import { heroImages } from '../data/collections';

export function About() {
  return (
    <article className="pt-32 md:pt-40">
      {/* Eyebrow + headline */}
      <header className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <ScrollReveal className="md:col-span-12">
            <span className="label-wide text-pewter">— About</span>
            <h1 className="display-xl mt-5 text-6xl leading-[0.95] md:text-8xl lg:text-[10rem]">
              Designed by{' '}
              <em className="display-italic">one pair of hands.</em>
            </h1>
          </ScrollReveal>
        </div>
      </header>

      {/* Editorial spread */}
      <section className="grid grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <ScrollReveal className="md:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden bg-bone-deep">
            <img
              src={heroImages.about}
              alt="Kristen, in studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="label mt-4 text-pewter">Studio Kristen Andron</p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="md:col-span-6 md:pt-16">
          <p className="editorial text-2xl leading-snug md:text-3xl">
            Kristen trained in couture before launching her atelier. She works
            from a small studio, drafting on a single table that doubles for
            cutting, fitting, and the occasional cup of tea.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 text-base text-ink/80 md:text-lg">
            <p>
              The atelier produces a small number of bridal commissions each
              season, and a single ready-to-wear line — released annually under
              the Kristen Andron label.
            </p>
            <p>
              The work is intentionally quiet. Pieces are built to be
              re-fittable, re-finishable, and worn a long time. Nothing is
              subcontracted; nothing is marketed in volume.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Pull quote */}
      <ScrollReveal>
        <section className="my-32 px-6 md:my-48 md:px-10">
          <blockquote className="mx-auto max-w-4xl border-y hairline py-12 text-center md:py-20">
            <p className="display-italic text-3xl leading-[1.2] md:text-5xl lg:text-6xl">
              &ldquo;A dress is the easiest place to keep a memory. It deserves to
              be made well.&rdquo;
            </p>
            <footer className="label mt-6 text-pewter">— Kristen</footer>
          </blockquote>
        </section>
      </ScrollReveal>

      {/* Three-column principles */}
      <section className="px-6 pb-20 md:px-10 md:pb-32">
        <ScrollReveal>
          <span className="label-wide text-pewter">— Principles</span>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-10 border-t hairline pt-10 md:grid-cols-3 md:gap-16 md:pt-14">
          {[
            {
              n: '01',
              title: 'One hand',
              body: 'Every piece is drafted, fitted, and finished in one studio. No outsourcing, no production lines.',
            },
            {
              n: '02',
              title: 'Built to alter',
              body: 'Seams are constructed so a piece can be re-fitted as a body changes. Made for years, not seasons.',
            },
            {
              n: '03',
              title: 'Quiet design',
              body: 'No logos, no loud branding. The cut and the cloth carry the work.',
            },
          ].map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 0.08}>
              <div>
                <span className="display-italic text-5xl text-pewter md:text-6xl">
                  {p.n}
                </span>
                <h3 className="display-xl mt-4 text-2xl md:text-3xl">{p.title}</h3>
                <p className="editorial mt-3 text-lg text-ink/75">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </article>
  );
}
