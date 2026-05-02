import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * A small ink dot that follows the cursor on desktop. It scales up when over
 * interactive elements (anchors, buttons, [data-cursor="hover"]). Disabled on
 * touch devices and when prefers-reduced-motion is set.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [supported, setSupported] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover || reduced) return;

    setSupported(true);
    document.body.dataset.cursor = 'on';

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = -100;
    let dotY = -100;
    let ringX = -100;
    let ringY = -100;
    let targetX = -100;
    let targetY = -100;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest('a, button, [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    let raf = 0;
    const loop = () => {
      // Dot tracks pointer 1:1 — feels precise.
      dotX = targetX;
      dotY = targetY;
      // Ring lags with easing — gives the silk feel.
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      delete document.body.dataset.cursor;
    };
  }, [reduced]);

  if (!supported) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-ink mix-blend-difference"
        style={{ transition: 'background-color 200ms var(--ease-silk)' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-ink/60 mix-blend-difference"
        style={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          transition: 'width 360ms var(--ease-editorial), height 360ms var(--ease-editorial), border-color 240ms',
        }}
      />
    </>
  );
}
