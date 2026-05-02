import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  imageUrl: string;
  eyebrow: string;
  /** Display headline. Two-line treatment encouraged: split with `<br />` or `\n`. */
  title: string;
  /** Italic emphasis word inside the title — wrap one word in <em>...</em> in the title for italic. */
  subtitle?: string;
  cta?: { to: string; label: string };
};

/**
 * Full-bleed editorial hero. The image sits behind oversized type with a
 * gentle bottom gradient so the headline reads on a busy photo.
 */
export function Hero({ imageUrl, eyebrow, title, subtitle, cta }: Props) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </motion.div>

      {/* Gradient veil for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/40"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="label-wide text-bone/80"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl mt-5 text-[14vw] leading-[0.95] md:text-[9vw] lg:text-[8.5rem]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="editorial mt-6 max-w-xl text-bone/85 text-lg md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              to={cta.to}
              className="group inline-flex items-center gap-3 border-b border-bone/40 pb-2 label hover:border-bone transition-colors"
            >
              {cta.label}
              <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                →
              </span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-bone/70"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3">
          <span className="label-wide">Scroll</span>
          <span className="block h-10 w-px bg-bone/50 origin-top animate-[scroll-cue_2s_var(--ease-silk)_infinite]" />
        </div>
        <style>{`
          @keyframes scroll-cue {
            0%   { transform: scaleY(0); transform-origin: top; }
            45%  { transform: scaleY(1); transform-origin: top; }
            55%  { transform: scaleY(1); transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
