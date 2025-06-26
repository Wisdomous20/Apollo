'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger after 50px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'lg:bg-transparent bg-white/95'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-6">
          <div
            className="flex items-center
            justify-between
            max-w-8xl mx-auto
            lg:justify-between
            "
          >
            {/* Logo and Brand */}
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo with triangular design */}
              <div className="flex items-center">
                <div className="relative w-12 h-12">
                  {/* Replace with actual logo */}
                  <img
                    src="/logo.png"
                    alt="Apollo Medical Group Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-800 font-sans">
                    <span className="text-blue-600">Apollo</span>{' '}
                    <span className="text-red-600">Medical</span>{' '}
                    <span className="text-blue-600">Group</span>
                  </h1>
                  <p className="text-sm text-gray-600 font-medium tracking-wider uppercase font-sans">
                    Where Healing Begins
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { name: 'Home', href: '/' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-3 rounded-lg text-gray-700 transition-colors ml-auto ${
                isMenuOpen ? 'bg-gray-100' : ''
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 90 : 0,
                  scale: isMenuOpen ? 1.1 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ display: 'inline-block' }}
              >
                <Menu className="w-7 h-7" />
              </motion.span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="space-y-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Gallery', href: '/gallery' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
