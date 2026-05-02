import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * A small white dot + lagging ring that follows the pointer on desktop.
 * Uses mix-blend-difference so the cursor inverts against whatever's beneath it
 * (works on both the bone background and the dark hero photography).
 *
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [supported, setSupported] = useState(false);
  const reduced = useReducedMotion();

  // First effect: detect support, flip body data attribute.
  // This must complete (and trigger a re-render) before refs exist.
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover || reduced) {
      setSupported(false);
      delete document.body.dataset.cursor;
      return;
    }
    setSupported(true);
    document.body.dataset.cursor = 'on';
    return () => {
      delete document.body.dataset.cursor;
    };
  }, [reduced]);

  // Second effect: attach listeners + rAF loop. Runs only after the elements
  // are mounted (gated on `supported`), so the refs are guaranteed non-null.
  useEffect(() => {
    if (!supported) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = -100;
    let dotY = -100;
    let ringX = -100;
    let ringY = -100;
    let targetX = -100;
    let targetY = -100;
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!hasMoved) {
        // Snap the trailing ring to the pointer on first move so it doesn't
        // streak in from the corner.
        ringX = targetX;
        ringY = targetY;
        hasMoved = true;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest('a, button, [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    let raf = 0;
    const loop = () => {
      dotX = targetX;
      dotY = targetY;
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
    };
  }, [supported]);

  if (!supported) return null;

  return (
    <>
      {/*
        Difference-blend inverts the element against the background per channel.
        White source → strong inversion on any color. A dark source produces no
        inversion, so this MUST stay white-ish to be visible.
      */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-white/90 mix-blend-difference"
        style={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          transition:
            'width 360ms var(--ease-editorial), height 360ms var(--ease-editorial)',
        }}
      />
    </>
  );
}
