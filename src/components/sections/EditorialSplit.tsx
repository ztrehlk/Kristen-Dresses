import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  imageUrl: string;
  cta: { to: string; label: string };
  /** When 'right', image goes on the right; default 'left'. */
  imageSide?: 'left' | 'right';
};

/**
 * Editorial two-column section: image on one side, headline/body/CTA on the other.
 * Used on the home page to introduce Bridal and Atelier.
 */
export function EditorialSplit({
  eyebrow,
  title,
  body,
  imageUrl,
  cta,
  imageSide = 'left',
}: Props) {
  const reversed = imageSide === 'right';

  return (
    <section className="grid grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
      <ScrollReveal
        className={[
          'md:col-span-7',
          reversed ? 'md:order-2 md:col-start-6' : '',
        ].join(' ')}
      >
        <div className="aspect-[4/5] w-full overflow-hidden bg-surface">
          <img
            src={imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal
        delay={0.12}
        className={[
          'md:col-span-5 flex flex-col justify-center',
          reversed ? 'md:order-1 md:col-start-1' : '',
        ].join(' ')}
      >
        <span className="label-wide text-mute">{eyebrow}</span>
        <h2
          className="display-xl mt-5 text-5xl leading-[0.96] md:text-6xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="editorial mt-6 text-lg text-cream/80 md:text-xl">{body}</p>
        <div className="mt-10">
          <Link
            to={cta.to}
            className="group inline-flex items-center gap-3 border-b hairline-strong pb-2 label hover:border-cream transition-colors"
          >
            {cta.label}
            <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
