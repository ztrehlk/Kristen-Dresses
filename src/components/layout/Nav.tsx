import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const NAV_LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const { direction, atTop } = useScrollDirection();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);
  // Close mobile menu on route change.
  useEffect(() => setMenuOpen(false), [pathname]);

  const hidden = direction === 'down' && !atTop && !menuOpen;
  const onLight = atTop && pathname === '/';

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed inset-x-0 top-0 z-40 transition-colors duration-500',
          onLight
            ? 'text-cream'
            : 'text-cream bg-canvas/80 backdrop-blur-md border-b hairline',
        ].join(' ')}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="reset-btn flex items-baseline gap-2 group">
            <span className="display-italic text-2xl leading-none transition-opacity group-hover:opacity-70">
              Kristen
            </span>
            <span className="label-wide hidden sm:inline opacity-70">Andron</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      'label transition-opacity hover:opacity-100',
                      isActive ? 'opacity-100' : 'opacity-65',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            type="button"
            className="reset-btn md:hidden flex flex-col items-end gap-1.5 py-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={[
                'block h-px w-7 bg-current transition-transform duration-300',
                menuOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-5 bg-current transition-opacity duration-200',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-7 bg-current transition-transform duration-300',
                menuOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-canvas pt-24 md:hidden"
          >
            <ul className="flex flex-col gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b hairline"
                >
                  <NavLink
                    to={link.to}
                    className="display-xl block py-6 text-5xl"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
