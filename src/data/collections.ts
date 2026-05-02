/*
  Portfolio data. PLACEHOLDER state — text is lorem ipsum and images come from
  picsum.photos so it's obvious nothing here is final. Each piece carries a
  slug (used in the URL), a cover image (shown in the grid), and additional
  images (shown on the detail page).

  Cover images use varied natural aspect ratios so the masonry grid has a
  Pinterest-like rhythm — no forced cropping at the grid level. When real
  photos arrive, replace `coverImage` and the `images` array per piece.
*/

export type Piece = {
  /** Stable identifier; appears in the URL (/portfolio/:slug). */
  slug: string;
  title: string;
  year: number;
  /**
   * Image used in masonry grid tiles. Width/height in the URL set the natural
   * aspect — masonry preserves it, so picking a tall vs short ratio shifts
   * the tile's footprint in the grid.
   */
  coverImage: string;
  /** Additional photos shown on the detail page, in display order. */
  images: string[];
  description?: string;
};

/**
 * Picsum placeholder. Seeded URL so the image is stable across reloads.
 */
const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const LOREM_MED =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

/**
 * Build the additional gallery images for a piece. A handful of extra shots
 * with mixed aspect ratios. Stable per slug.
 */
const galleryFor = (slug: string): string[] => [
  pic(`${slug}-2`, 1400, 1750),
  pic(`${slug}-3`, 1400, 933),
  pic(`${slug}-4`, 1200, 1500),
  pic(`${slug}-5`, 1100, 1400),
  pic(`${slug}-6`, 1600, 900),
];

/**
 * Cover aspect ratios chosen to give the masonry good rhythm — a mix of tall
 * portrait, standard portrait, square, and landscape so columns interleave.
 */
export const pieces: Piece[] = [
  { slug: 'aria',     title: 'Aria',     year: 2025, coverImage: pic('aria-1',     900, 1500), images: galleryFor('aria'),     description: LOREM_MED   },
  { slug: 'margaux',  title: 'Margaux',  year: 2025, coverImage: pic('margaux-1', 1200, 1500), images: galleryFor('margaux'),  description: LOREM_SHORT },
  { slug: 'ines',     title: 'Ines',     year: 2025, coverImage: pic('ines-1',    1200, 1200), images: galleryFor('ines'),     description: LOREM_SHORT },
  { slug: 'selene',   title: 'Selene',   year: 2024, coverImage: pic('selene-1',  1400, 1050), images: galleryFor('selene'),   description: LOREM_MED   },
  { slug: 'liv',      title: 'Liv',      year: 2024, coverImage: pic('liv-1',      900, 1500), images: galleryFor('liv'),      description: LOREM_SHORT },
  { slug: 'halle',    title: 'Halle',    year: 2024, coverImage: pic('halle-1',   1200, 1500), images: galleryFor('halle'),    description: LOREM_SHORT },
  { slug: 'noor',     title: 'Noor',     year: 2024, coverImage: pic('noor-1',    1200, 1800), images: galleryFor('noor'),     description: LOREM_SHORT },
  { slug: 'vera',     title: 'Vera',     year: 2023, coverImage: pic('vera-1',    1200, 1200), images: galleryFor('vera'),     description: LOREM_SHORT },
  { slug: 'odette',   title: 'Odette',   year: 2023, coverImage: pic('odette-1',  1000, 1500), images: galleryFor('odette'),   description: LOREM_SHORT },
  { slug: 'iris',     title: 'Iris',     year: 2023, coverImage: pic('iris-1',    1200, 1500), images: galleryFor('iris'),     description: LOREM_SHORT },
  { slug: 'mira',     title: 'Mira',     year: 2023, coverImage: pic('mira-1',    1400, 1050), images: galleryFor('mira'),     description: LOREM_MED   },
  { slug: 'rae',      title: 'Rae',      year: 2022, coverImage: pic('rae-1',     1200, 1500), images: galleryFor('rae'),      description: LOREM_SHORT },
  { slug: 'juno',     title: 'Juno',     year: 2022, coverImage: pic('juno-1',     900, 1500), images: galleryFor('juno'),     description: LOREM_SHORT },
  { slug: 'sable',    title: 'Sable',    year: 2022, coverImage: pic('sable-1',   1200, 1500), images: galleryFor('sable'),    description: LOREM_SHORT },
  { slug: 'wren',     title: 'Wren',     year: 2022, coverImage: pic('wren-1',    1200, 1200), images: galleryFor('wren'),     description: LOREM_SHORT },
];

/** Hero imagery for landing and section intros. */
export const heroImages = {
  home: pic('hero-home',      2000, 1200),
  portfolio: pic('hero-portfolio', 2000, 1200),
  about: pic('hero-about',    1400, 1750),
};

/** Lookup helper for the detail page. */
export const findPiece = (slug: string): Piece | undefined =>
  pieces.find((p) => p.slug === slug);
