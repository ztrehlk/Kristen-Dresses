/*
  Portfolio data. Eight pieces from the shoots received so far. Add new
  pieces by appending entries to `pieces` below — drop the photos in
  /public/photos/ and reference them via the local() helper.
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

/**
 * Pieces are listed in approximate "show first" order — strongest editorial
 * sets near the top so the home featured grid pulls a strong selection.
 */
export const pieces: Piece[] = [
  {
    slug: 'sirena',
    title: 'Sirena',
    year: 2025,
    coverImage: local('sirena-05.jpeg'),
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
    slug: 'vesper',
    title: 'Vesper',
    year: 2025,
    // Front view — direct, dramatic. The 3/4 angle goes to the gallery.
    coverImage: local('vesper-01.jpeg'),
    images: [
      local('vesper-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'ruby',
    title: 'Ruby',
    year: 2025,
    // Front portrait in the boutique — best lighting and full silhouette.
    coverImage: local('ruby-01.jpeg'),
    images: [
      local('ruby-02.jpeg'),
      local('ruby-03.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'cocoa',
    title: 'Cocoa',
    year: 2025,
    // Full-body portrait — the cropped torso shot becomes the gallery alt.
    coverImage: local('cocoa-01.jpeg'),
    images: [
      local('cocoa-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'liv',
    title: 'Liv',
    year: 2025,
    coverImage: local('liv-01.jpeg'),
    images: [
      local('liv-02.jpeg'),
      local('liv-03.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'solis',
    title: 'Solis',
    year: 2024,
    // Hand-to-head pose — most dynamic of the two; full silhouette of the
    // pleated metallic + crown read clearly.
    coverImage: local('solis-01.jpeg'),
    images: [
      local('solis-02.jpeg'),
    ],
    description: LOREM_MED,
  },
  {
    slug: 'halle',
    title: 'Halle',
    year: 2024,
    coverImage: local('halle-01.jpeg'),
    images: [
      local('halle-03.jpeg'),
      local('halle-04.jpeg'),
      local('halle-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'noir',
    title: 'Noir',
    year: 2024,
    // Centered, hands-on-hips, well-lit — clearest read of the bodice detail.
    coverImage: local('noir-01.jpeg'),
    images: [
      local('noir-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'marina',
    title: 'Marina',
    year: 2023,
    // Front view, full body — the back/side shot becomes the gallery alt.
    coverImage: local('marina-01.jpeg'),
    images: [
      local('marina-02.jpeg'),
    ],
    description: LOREM_SHORT,
  },
  {
    slug: 'angie',
    title: 'Angie',
    year: 2023,
    // Single studio shot, no additional gallery yet.
    coverImage: local('angie-01.jpeg'),
    images: [],
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
