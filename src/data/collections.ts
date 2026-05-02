/*
  Lookbook data. Swap any imageUrl below with a real photo to replace a placeholder.
  Placeholders pull from Unsplash's CDN with curated fashion / bridal queries — they
  read as real editorial imagery, not gray boxes.
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

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const bridal: Collection = {
  id: 'bridal',
  name: 'Bridal',
  tagline: 'A gown built around a single woman.',
  description:
    'Each piece is drafted, fitted, and finished by hand over a series of intimate sittings. Bridal commissions are limited to a small number per season.',
  looks: [
    {
      id: 'b-01',
      title: 'Aria',
      year: 2025,
      imageUrl: u('1525258946800-98cfd641d0de'),
      span: 'tall',
      description: 'Silk crepe column. Hand-rolled hem. Bias seamed bodice.',
    },
    {
      id: 'b-02',
      title: 'Margaux',
      year: 2025,
      imageUrl: u('1606800052052-a08af7148866'),
      span: 'normal',
      description: 'A-line in duchess satin. Off-shoulder neckline.',
    },
    {
      id: 'b-03',
      title: 'Ines',
      year: 2025,
      imageUrl: u('1594552072238-5c4a26f10bbf'),
      span: 'normal',
      description: 'Embroidered tulle veil, two metres. French lace trim.',
    },
    {
      id: 'b-04',
      title: 'Selene',
      year: 2024,
      imageUrl: u('1591604466107-ec97de577aff'),
      span: 'wide',
      description: 'Open-back silk gazar with corded lace appliqué.',
    },
    {
      id: 'b-05',
      title: 'Liv',
      year: 2024,
      imageUrl: u('1519741497674-611481863552'),
      span: 'tall',
      description: 'Minimal slip in ivory crepe de chine.',
    },
    {
      id: 'b-06',
      title: 'Halle',
      year: 2024,
      imageUrl: u('1546804422-aa4b69c50b8d'),
      span: 'normal',
      description: 'Cathedral train. Architectural shoulder.',
    },
    {
      id: 'b-07',
      title: 'Noor',
      year: 2024,
      imageUrl: u('1583243567239-3727e750143a'),
      span: 'normal',
      description: 'Tea-length corded lace with scalloped edge.',
    },
    {
      id: 'b-08',
      title: 'Vera',
      year: 2023,
      imageUrl: u('1623091410901-00e2d268901f'),
      span: 'normal',
      description: 'Strapless mikado with deep V back.',
    },
  ],
};

export const atelier: Collection[] = [
  {
    id: 'collection-01',
    name: 'Collection 01',
    tagline: 'Quiet structure. Wearable architecture.',
    description:
      'The first ready-to-wear release. Drawn from the same atelier that builds the bridal pieces — softer fabrics, broader fit, the same hand.',
    looks: [
      {
        id: 'a1-01',
        title: 'Tailored Wool Trench',
        year: 2025,
        imageUrl: u('1539109136881-3be0616acf4b'),
        span: 'tall',
      },
      {
        id: 'a1-02',
        title: 'Bias Slip Dress',
        year: 2025,
        imageUrl: u('1490481651871-ab68de25d43d'),
        span: 'normal',
      },
      {
        id: 'a1-03',
        title: 'Pleated Trouser',
        year: 2025,
        imageUrl: u('1483985988355-763728e1935b'),
        span: 'normal',
      },
      {
        id: 'a1-04',
        title: 'Linen Apron Dress',
        year: 2025,
        imageUrl: u('1496747611176-843222e1e57c'),
        span: 'wide',
      },
      {
        id: 'a1-05',
        title: 'Cropped Knit',
        year: 2025,
        imageUrl: u('1485518882345-15568b007407'),
        span: 'normal',
      },
      {
        id: 'a1-06',
        title: 'Drape Skirt',
        year: 2025,
        imageUrl: u('1572804013309-59a88b7e92f1'),
        span: 'normal',
      },
    ],
  },
  {
    id: 'resort',
    name: 'Resort',
    tagline: 'For warmer months and longer light.',
    description:
      'A small capsule designed alongside the main line. Lighter weights, looser silhouettes, fabrics that move.',
    looks: [
      {
        id: 'r-01',
        title: 'Sunlit Caftan',
        year: 2025,
        imageUrl: u('1502716119720-b23a93e5fe1b'),
        span: 'normal',
      },
      {
        id: 'r-02',
        title: 'Cotton Wrap',
        year: 2025,
        imageUrl: u('1469334031218-e382a71b716b'),
        span: 'tall',
      },
      {
        id: 'r-03',
        title: 'Linen Set',
        year: 2025,
        imageUrl: u('1487412720507-e7ab37603c6f'),
        span: 'normal',
      },
      {
        id: 'r-04',
        title: 'Sheer Overlay',
        year: 2025,
        imageUrl: u('1551803091-e20673f15770'),
        span: 'normal',
      },
    ],
  },
];

/** Hero imagery for landing and section intros. */
export const heroImages = {
  home: u('1623091410901-00e2d268901f', 2000),
  bridal: u('1525258946800-98cfd641d0de', 2000),
  atelier: u('1539109136881-3be0616acf4b', 2000),
  about: u('1496747611176-843222e1e57c', 1800),
};

/** Flat list of all looks — useful for prefetch / count. */
export const allLooks: Look[] = [
  ...bridal.looks,
  ...atelier.flatMap((c) => c.looks),
];
