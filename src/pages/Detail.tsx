import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { findPiece, pieces } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Lightbox } from '../components/ui/Lightbox';

export function Detail() {
  const { slug = '' } = useParams<{ slug: string }>();
  const piece = findPiece(slug);

  // Compute prev/next pieces for the bottom navigation. Wraps around the list.
  const { prev, next } = useMemo(() => {
    if (!piece) return { prev: undefined, next: undefined };
    const idx = pieces.findIndex((p) => p.slug === piece.slug);
    return {
      prev: pieces[(idx - 1 + pieces.length) % pieces.length],
      next: pieces[(idx + 1) % pieces.length],
    };
  }, [piece]);

  // Lightbox: open on click of any gallery image (cover counts as image[0]).
  const allImages = useMemo(
    () => (piece ? [piece.coverImage, ...piece.images] : []),
    [piece],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!piece) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <article className="pt-32 md:pt-40">
      {/* Header: piece title + meta */}
      <header className="px-6 pb-10 md:px-10 md:pb-14">
        <ScrollReveal>
          <Link
            to="/portfolio"
            className="label inline-flex items-center gap-2 text-pewter hover:text-ink transition-colors"
          >
            <span aria-hidden>←</span> Back to Portfolio
          </Link>
        </ScrollReveal>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
          <ScrollReveal delay={0.05} className="md:col-span-8">
            <h1 className="display-xl text-6xl leading-[0.96] md:text-8xl lg:text-9xl">
              {piece.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12} className="md:col-span-4 md:col-start-9 md:pt-6">
            <div className="grid grid-cols-2 gap-6 border-t hairline pt-4">
              <div>
                <span className="label-wide text-pewter">Year</span>
                <p className="display-italic mt-1 text-xl">{piece.year}</p>
              </div>
              <div>
                <span className="label-wide text-pewter">Photos</span>
                <p className="display-italic mt-1 text-xl">
                  {String(allImages.length).padStart(2, '0')}
                </p>
              </div>
            </div>
            {piece.description && (
              <p className="editorial mt-5 text-base text-ink/75 md:text-lg">
                {piece.description}
              </p>
            )}
          </ScrollReveal>
        </div>
      </header>

      {/* Hero shot — full-bleed cover */}
      <ScrollReveal>
        <button
          type="button"
          data-cursor="hover"
          onClick={() => setOpenIndex(0)}
          className="reset-btn group block w-full overflow-hidden bg-bone-deep"
          aria-label={`View ${piece.title}, image 1`}
        >
          <img
            src={piece.coverImage}
            alt={piece.title}
            className="block w-full h-auto transition-transform duration-[1500ms] ease-editorial group-hover:scale-[1.02]"
            draggable={false}
          />
        </button>
      </ScrollReveal>

      {/* Gallery grid: additional photos. Skip the section entirely for
          pieces that only have a cover so far — avoids an empty container. */}
      {piece.images.length > 0 && (
        <section className="mt-4 md:mt-6 px-4 md:px-6">
          <div className="gallery">
            {piece.images.map((src, i) => (
              <button
                key={src}
                type="button"
                data-cursor="hover"
                onClick={() => setOpenIndex(i + 1)}
                aria-label={`View ${piece.title}, image ${i + 2}`}
                className="reset-btn gallery-item group mb-4 block w-full overflow-hidden bg-bone-deep"
              >
                <img
                  src={src}
                  alt={`${piece.title} — ${i + 2}`}
                  loading="lazy"
                  className="block w-full h-auto transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </section>
      )}

      <Lightbox
        images={allImages}
        title={piece.title}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />

      {/* Prev / Next strip */}
      <nav className="mt-24 grid grid-cols-2 border-y hairline md:mt-32">
        {prev && (
          <Link
            to={`/portfolio/${prev.slug}`}
            className="group flex flex-col gap-1 px-6 py-8 text-left transition-colors hover:bg-bone-deep md:px-10 md:py-12"
          >
            <span className="label-wide text-pewter">
              ← Previous
            </span>
            <span className="display-italic text-3xl md:text-4xl">
              {prev.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            to={`/portfolio/${next.slug}`}
            className="group flex flex-col items-end gap-1 border-l hairline px-6 py-8 text-right transition-colors hover:bg-bone-deep md:px-10 md:py-12"
          >
            <span className="label-wide text-pewter">
              Next →
            </span>
            <span className="display-italic text-3xl md:text-4xl">
              {next.title}
            </span>
          </Link>
        )}
      </nav>

      <style>{`
        .gallery {
          column-count: 2;
          column-gap: 1rem;
        }
        @media (min-width: 1024px) {
          .gallery { column-count: 3; }
        }
        .gallery-item {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
    </article>
  );
}
