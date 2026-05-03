import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

type Props = {
  images: string[];
  /** Title of the piece these images belong to. Shown in the caption. */
  title: string;
  /** Index of the currently visible image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
};

/**
 * Full-screen image viewer with keyboard navigation. Backdrop click closes.
 * Image fades cross-style on index change so jumps don't feel jarring.
 */
export function Lightbox({ images, title, index, onClose, onChange }: Props) {
  const open = index !== null;
  useLockBodyScroll(open);

  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % images.length);
  }, [index, images.length, onChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, next, prev]);

  const currentSrc = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && currentSrc && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-canvas"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <span className="label text-cream/70">
              {String((index ?? 0) + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="reset-btn label text-cream/70 hover:text-cream transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              Close ×
            </button>
          </div>

          {/* Image */}
          <div
            className="relative flex-1 px-6 pb-10 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto h-full max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSrc}
                  src={currentSrc}
                  alt={`${title} — ${(index ?? 0) + 1}`}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto h-full max-h-full w-auto object-contain"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* Side controls — invisible hit zones with chevrons on hover */}
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="reset-btn group absolute left-0 top-0 flex h-full w-1/4 items-center justify-start pl-6 md:pl-12"
            >
              <span className="label opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ← Prev
              </span>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="reset-btn group absolute right-0 top-0 flex h-full w-1/4 items-center justify-end pr-6 md:pr-12"
            >
              <span className="label opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Next →
              </span>
            </button>
          </div>

          {/* Caption */}
          <div className="px-6 pb-8 md:px-10">
            <div className="mx-auto max-w-5xl border-t hairline pt-4">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="display-italic text-2xl md:text-3xl">{title}</h3>
                <span className="label text-cream/60">
                  Image {String((index ?? 0) + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
