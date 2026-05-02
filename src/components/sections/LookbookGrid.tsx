import { Link } from 'react-router-dom';
import type { Piece } from '../../data/collections';

type Props = {
  pieces: Piece[];
};

/**
 * Pinterest-style masonry grid.
 *
 * Implementation: CSS multi-column layout. Each tile is `break-inside: avoid`
 * so it stays whole, and `display: inline-block` so it lays out naturally
 * inside columns. Heights vary because each cover image keeps its natural
 * aspect ratio — no forced cropping at the grid level.
 *
 * Clicking a tile routes to /portfolio/:slug for the full gallery.
 */
export function LookbookGrid({ pieces }: Props) {
  return (
    <div
      className="px-4 md:px-6"
      style={{
        // Tailwind's column utilities aren't quite right for arbitrary counts
        // across breakpoints, so set them inline. Gap matches column-gap.
        columnGap: '1rem',
      }}
    >
      <div className="masonry">
        {pieces.map((piece, i) => (
          <Link
            key={piece.slug}
            to={`/portfolio/${piece.slug}`}
            data-cursor="hover"
            aria-label={`View ${piece.title}`}
            className="masonry-item group relative mb-4 block overflow-hidden bg-bone-deep"
          >
            <img
              src={piece.coverImage}
              alt={piece.title}
              loading={i < 6 ? 'eager' : 'lazy'}
              className="block w-full h-auto transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
              draggable={false}
            />

            {/* Hover overlay: darken + reveal title from the bottom */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-4 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-end justify-between text-bone">
                <div>
                  <h3 className="display-italic text-2xl leading-none">
                    {piece.title}
                  </h3>
                  <span className="label-wide mt-1.5 block text-bone/70">
                    {piece.year}
                  </span>
                </div>
                <span className="label inline-flex items-center gap-1.5">
                  View <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .masonry {
          column-count: 2;
          column-gap: 1rem;
        }
        @media (min-width: 768px) {
          .masonry { column-count: 3; }
        }
        @media (min-width: 1280px) {
          .masonry { column-count: 4; }
        }
        .masonry-item {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
        }
      `}</style>
    </div>
  );
}
