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
        eyebrow="Lorem ipsum dolor sit"
        title={'Lorem ipsum<br/><em class="display-italic">dolor sit</em> amet.'}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        cta={{ to: '/bridal', label: 'Enter the Atelier' }}
      />

      {/* Marquee — placeholder words; swap for real ones later */}
      <Marquee />

      <EditorialSplit
        eyebrow="01 — Bridal"
        title={'Lorem ipsum<br/>dolor <em class="display-italic">sit amet.</em>'}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={heroImages.bridal}
        cta={{ to: '/bridal', label: 'See bridal' }}
      />

      <EditorialSplit
        eyebrow="02 — Atelier"
        title={'Lorem ipsum dolor.<br/><em class="display-italic">Consectetur</em> adipiscing.'}
        body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="text-ink/40">
                {' '}
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
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
  const items = ['Lorem', '·', 'Ipsum', '·', 'Dolor sit amet', '·', 'Consectetur adipiscing', '·'];
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
