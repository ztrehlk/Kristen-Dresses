import { Hero } from '../components/sections/Hero';
import { EditorialSplit } from '../components/sections/EditorialSplit';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { heroImages } from '../data/collections';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Hero
        imageUrl={heroImages.home}
        eyebrow="Atelier Kristen Andron"
        title={'Made for<br/><em class="display-italic">one woman</em> at a time.'}
        subtitle="Bridal commissions and a small ready-to-wear line — drafted, fitted, and finished by hand in studio."
        cta={{ to: '/bridal', label: 'Enter the Atelier' }}
      />

      {/* Marquee — soft moving label that feels like masthead bands on print magazines */}
      <Marquee />

      <EditorialSplit
        eyebrow="01 — Bridal"
        title={'A gown built<br/>around <em class="display-italic">her.</em>'}
        body="Each commission begins with a conversation and ends in a private fitting room. A small number of brides per season — never more, by design."
        imageUrl={heroImages.bridal}
        cta={{ to: '/bridal', label: 'See bridal' }}
      />

      <EditorialSplit
        eyebrow="02 — Atelier"
        title={'Quiet structure.<br/><em class="display-italic">Wearable</em> architecture.'}
        body="The ready-to-wear line. Pieces drawn from the same atelier — softer fabrics, broader fit, the same hand."
        imageUrl={heroImages.atelier}
        cta={{ to: '/atelier', label: 'See the line' }}
        imageSide="right"
      />

      {/* About teaser */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <ScrollReveal className="md:col-span-4">
            <span className="label-wide text-pewter">— About</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-8">
            <p className="display-xl text-3xl leading-[1.18] md:text-4xl lg:text-5xl">
              Kristen designs from a single drafting table, in a single studio.
              <span className="text-ink/40">
                {' '}
                Every piece — bridal or otherwise — is finished by the same set
                of hands.
              </span>
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 border-b hairline-strong pb-2 label hover:border-ink transition-colors"
              >
                Read more
                <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function Marquee() {
  const items = ['Bridal', '·', 'Atelier', '·', 'Made by hand', '·', 'Studio Kristen Andron', '·'];
  // Repeat enough times to fill any viewport without gaps.
  const reel = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y hairline py-6">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {reel.map((t, i) => (
          <span key={i} className="display-italic text-3xl md:text-4xl text-ink/80">
            {t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
