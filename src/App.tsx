import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Cursor } from './components/ui/Cursor';
import { PageTransition } from './components/layout/PageTransition';
import { Home } from './pages/Home';
import { Bridal } from './pages/Bridal';
import { Atelier } from './pages/Atelier';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  const location = useLocation();

  // Reset scroll on every route change — without this, route changes inherit the
  // previous page's scroll position, which feels broken on a long lookbook.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/bridal"
              element={
                <PageTransition>
                  <Bridal />
                </PageTransition>
              }
            />
            <Route
              path="/atelier"
              element={
                <PageTransition>
                  <Atelier />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
