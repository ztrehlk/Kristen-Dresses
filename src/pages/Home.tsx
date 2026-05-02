import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { LookbookGrid } from '../components/sections/LookbookGrid';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { heroImages, pieces } from '../data/collections';

export function Home() {
  // Show a featured selection on the home grid; the full set lives at /portfolio.
  const featured = pieces.slice(0, 9);

  return (
    <>
      <Hero
        imageUrl={heroImages.home}
        eyebrow="Lorem ipsum dolor sit"
        title={'Lorem ipsum<br/><em class="display-italic">dolor sit</em> amet.'}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        cta={{ to: '/portfolio', label: 'See the portfolio' }}
      />

      <Marquee />

      {/* Featured masonry preview */}
      <section className="pt-16 md:pt-24">
        <div className="mb-10 flex items-end justify-between px-6 md:mb-14 md:px-10">
          <div>
            <span className="label-wide text-pewter">— Selected work</span>
            <h2 className="display-xl mt-3 text-4xl leading-[0.96] md:text-6xl">
              Lorem <em className="display-italic">ipsum.</em>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group hidden items-center gap-3 border-b hairline-strong pb-1.5 label hover:border-ink transition-colors md:inline-flex"
          >
            View all
            <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        <LookbookGrid pieces={featured} />

        {/* Mobile-only "view all" link below the grid */}
        <div className="mt-10 px-6 md:hidden">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 border-b hairline-strong pb-1.5 label hover:border-ink transition-colors"
          >
            View all work
            <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>

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
