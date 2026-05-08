import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navSlideDown } from '../../animations/variants';
import lg1 from '../../assets/lg1.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        variants={navSlideDown}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-red-600 flex items-center"
        style={{ height: '72px' }}
      >
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 flex items-center justify-between relative h-full">

          {/* ── LEFT NAV LINKS (Hidden on Mobile) ── */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white text-sm font-semibold hover:opacity-80 transition-opacity">
              Home
            </Link>
            <Link to="/products" className="text-white text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
              Products
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/contact" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
              Contact Us
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER (Left side on mobile) ── */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* ── CENTER LOGO CARD ── */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-16px' }}>
            <Link to="/about" className="block hover:opacity-90 transition-opacity">
              <div
                className="bg-white shadow-xl flex items-center justify-center px-4 md:px-6 py-2 md:py-3 min-w-[150px] md:min-w-[280px] rounded-[18px]"
              >
                <img 
                  src={lg1} 
                  alt="PowerSports Logo" 
                  className="h-[45px] md:h-[75px] w-auto object-contain"
                />
              </div>
            </Link>
          </div>


          {/* ── RIGHT: Search, Cart, Login ── */}
          <div className="flex items-center gap-3 md:gap-5">
            <button className="text-white hover:opacity-80 transition-opacity hidden sm:block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="hidden md:block border-2 border-white text-white text-sm font-bold px-5 py-1.5 rounded-full hover:bg-white hover:text-red-600 transition-colors">
              LOGIN
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ── MOBILE MENU DRAWER ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-red-600 z-[70] md:hidden p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-white text-lg font-semibold hover:translate-x-2 transition-transform">
                  Home
                </Link>
                <Link to="/products" className="text-white text-lg font-semibold hover:translate-x-2 transition-transform">
                  Products
                </Link>
                <Link to="/about" className="text-white text-lg font-semibold hover:translate-x-2 transition-transform">
                  About Us
                </Link>
                <Link to="/contact" className="text-white text-lg font-semibold hover:translate-x-2 transition-transform">
                  Contact Us
                </Link>
                <hr className="border-white/20 my-2" />
                <button className="w-full bg-white text-red-600 font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95">
                  LOGIN
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

