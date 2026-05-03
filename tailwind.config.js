/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        cream: 'var(--color-cream)',
        mute: 'var(--color-mute)',
        champagne: 'var(--color-champagne)',
        shadow: 'var(--color-shadow)',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'editorial': '0.02em',
        'caps': '0.18em',
        'caps-wide': '0.28em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'silk': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
