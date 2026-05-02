import { Link } from 'react-router-dom';
import { LookbookGrid } from '../components/sections/LookbookGrid';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { bridal } from '../data/collections';

export function Bridal() {
  return (
    <article className="pt-32 md:pt-40">
      {/* Page header */}
      <header className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <ScrollReveal className="md:col-span-7">
            <span className="label-wide text-pewter">— {bridal.name}</span>
            <h1 className="display-xl mt-5 text-6xl leading-[0.96] md:text-8xl lg:text-9xl">
              Lorem ipsum <em className="display-italic">dolor sit.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="md:col-span-4 md:col-start-9 md:pt-12">
            <p className="editorial text-lg text-ink/75 md:text-xl">
              {bridal.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t hairline pt-6">
              <div>
                <span className="label-wide text-pewter">Pieces</span>
                <p className="display-italic mt-1.5 text-2xl">
                  {String(bridal.looks.length).padStart(2, '0')}
                </p>
              </div>
              <div>
                <span className="label-wide text-pewter">Season</span>
                <p className="display-italic mt-1.5 text-2xl">2024 – 25</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <LookbookGrid looks={bridal.looks} />

      {/* CTA strip */}
      <section className="border-t hairline mt-32 px-6 py-24 md:px-10 md:py-32">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="label-wide text-pewter">— Commissions</span>
          <p className="display-xl mt-6 text-4xl leading-tight md:text-5xl">
            Lorem ipsum dolor sit amet.{' '}
            <em className="display-italic">Consectetur adipiscing.</em>
          </p>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 border-b hairline-strong pb-2 label hover:border-ink transition-colors"
          >
            Inquire about a fitting
            <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
              →
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </article>
  );
}
