import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

/**
 * Tracks scroll direction with a small threshold so micro-jitter doesn't flip state.
 * Also exposes whether the page has scrolled past the top — handy for nav background switch.
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;

      setAtTop(y < 24);

      if (Math.abs(diff) >= threshold) {
        setDirection(diff > 0 ? 'down' : 'up');
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { direction, atTop };
}
