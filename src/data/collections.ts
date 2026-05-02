/*
  Lookbook data. PLACEHOLDER state — text is lorem ipsum and images come from
  picsum.photos so it's obvious nothing here is final. Swap each `imageUrl` and
  copy field for the real content as it lands.
*/

export type Look = {
  id: string;
  title: string;
  year: number;
  imageUrl: string;
  /** Grid hint: 'tall' renders double-height, 'wide' double-width, 'normal' single. */
  span?: 'normal' | 'tall' | 'wide';
  description?: string;
};

export type Collection = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  looks: Look[];
};

/**
 * Picsum placeholder. Seeded URL so the image is stable across reloads.
 * Aspect-friendly defaults match the lookbook's 4:5 normal slot; pass explicit
 * w/h for tall (3:5), wide (16:9), or hero (full-bleed) ratios.
 */
const pic = (seed: string, w = 1200, h = 1500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const LOREM_MED =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const bridal: Collection = {
  id: 'bridal',
  name: 'Bridal',
  tagline: 'Lorem ipsum dolor sit amet.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  looks: [
    { id: 'b-01', title: 'Lorem 01', year: 2025, imageUrl: pic('bridal-01', 900, 1500),  span: 'tall',   description: LOREM_SHORT },
    { id: 'b-02', title: 'Lorem 02', year: 2025, imageUrl: pic('bridal-02'),              span: 'normal', description: LOREM_SHORT },
    { id: 'b-03', title: 'Lorem 03', year: 2025, imageUrl: pic('bridal-03'),              span: 'normal', description: LOREM_SHORT },
    { id: 'b-04', title: 'Lorem 04', year: 2024, imageUrl: pic('bridal-04', 1600, 900),  span: 'wide',   description: LOREM_MED },
    { id: 'b-05', title: 'Lorem 05', year: 2024, imageUrl: pic('bridal-05', 900, 1500),  span: 'tall',   description: LOREM_SHORT },
    { id: 'b-06', title: 'Lorem 06', year: 2024, imageUrl: pic('bridal-06'),              span: 'normal', description: LOREM_SHORT },
    { id: 'b-07', title: 'Lorem 07', year: 2024, imageUrl: pic('bridal-07'),              span: 'normal', description: LOREM_SHORT },
    { id: 'b-08', title: 'Lorem 08', year: 2023, imageUrl: pic('bridal-08'),              span: 'normal', description: LOREM_SHORT },
  ],
};

export const atelier: Collection[] = [
  {
    id: 'collection-01',
    name: 'Collection 01',
    tagline: 'Lorem ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
    looks: [
      { id: 'a1-01', title: 'Lorem 01', year: 2025, imageUrl: pic('a1-01', 900, 1500), span: 'tall'   },
      { id: 'a1-02', title: 'Lorem 02', year: 2025, imageUrl: pic('a1-02'),             span: 'normal' },
      { id: 'a1-03', title: 'Lorem 03', year: 2025, imageUrl: pic('a1-03'),             span: 'normal' },
      { id: 'a1-04', title: 'Lorem 04', year: 2025, imageUrl: pic('a1-04', 1600, 900), span: 'wide'   },
      { id: 'a1-05', title: 'Lorem 05', year: 2025, imageUrl: pic('a1-05'),             span: 'normal' },
      { id: 'a1-06', title: 'Lorem 06', year: 2025, imageUrl: pic('a1-06'),             span: 'normal' },
    ],
  },
  {
    id: 'collection-02',
    name: 'Collection 02',
    tagline: 'Sed do eiusmod tempor.',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    looks: [
      { id: 'r-01', title: 'Lorem 01', year: 2025, imageUrl: pic('c2-01'),             span: 'normal' },
      { id: 'r-02', title: 'Lorem 02', year: 2025, imageUrl: pic('c2-02', 900, 1500), span: 'tall'   },
      { id: 'r-03', title: 'Lorem 03', year: 2025, imageUrl: pic('c2-03'),             span: 'normal' },
      { id: 'r-04', title: 'Lorem 04', year: 2025, imageUrl: pic('c2-04'),             span: 'normal' },
    ],
  },
];

/** Hero imagery for landing and section intros. */
export const heroImages = {
  home: pic('hero-home', 2000, 1200),
  bridal: pic('hero-bridal', 2000, 1200),
  atelier: pic('hero-atelier', 2000, 1200),
  about: pic('hero-about', 1400, 1750),
};

/** Flat list of all looks — useful for prefetch / count. */
export const allLooks: Look[] = [
  ...bridal.looks,
  ...atelier.flatMap((c) => c.looks),
];
