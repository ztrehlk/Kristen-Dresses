/*
  Portfolio data. Real photos for the three pieces shot so far. Add more
  pieces as new shoots are completed.

  Each piece carries a slug (URL), a cover image (shown in the masonry grid),
  an `images` array (additional shots shown on the detail page), and a
  description. To swap or add an image, drop it into /public/photos/ and
  reference it via the local() helper.
*/

export type Piece = {
  /** Stable identifier; appears in the URL (/portfolio/:slug). */
  slug: string;
  title: string;
  year: number;
  /** Image used in the masonry grid tile. */
  coverImage: string;
  /** Additional photos shown on the detail page, in display order. */
  images: string[];
  description?: string;
};

/**
 * Resolve a path under /public/photos/ to its served URL. We prepend Vite's
 * BASE_URL so the same code works whether the site is served at the root
 * (custom domain) or under a subpath like /Kristen-Dresses/.
 */
const local = (filename: string): string =>
  `${import.meta.env.BASE_URL}photos/${filename}`;

const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const LOREM_MED =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const pieces: Piece[] = [
  {
    slug: 'sirena',
    title: 'Sirena',
    year: 2025,
    // Full-length on the cobblestone street — most editorial of the set.
    coverImage: local('sirena-05.jpeg'),
    // Other strong shots from the same shoot, in a deliberate order: first
    // a couple of front views, then turn into the back/detail shots, then
    // close-up beadwork last.
    images: [
      local('sirena-01.jpeg'),
      local('sirena-02.jpeg'),
      local('sirena-07.jpeg'),
      local('sirena-03.jpeg'),
      local('sirena-04.jpeg'),
      local('sirena-06.jpeg'),
    ],
    description: LOREM_MED,
  },
  {
    slug: 'liv',
    title: 'Liv',
    year: 2025,
    // Walking across the crosswalk — strongest movement and context shot.
    coverImage: local('liv-01.jpeg'),
    images: [
      local('liv-02.jpeg'),
      local('liv-03.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'halle',
    title: 'Halle',
    year: 2024,
    // Tight studio crop — best lighting and the clearest detail of the cut.
    coverImage: local('halle-01.jpeg'),
    images: [
      local('halle-03.jpeg'),
      local('halle-04.jpeg'),
      local('halle-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
];

/**
 * Hero imagery for landing and section intros.
 * `home` is full-bleed at 100svh — uses cover, so portrait photos crop sides.
 * `about` fills a 4:5 portrait slot in the editorial spread.
 */
export const heroImages = {
  home: local('sirena-05.jpeg'),
  portfolio: local('sirena-01.jpeg'),
  about: local('liv-01.jpeg'),
};

/** Lookup helper for the detail page. */
export const findPiece = (slug: string): Piece | undefined =>
  pieces.find((p) => p.slug === slug);
