'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import AccountDropdown from './account/AccountDropdown';

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
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-full shadow-lg z-50 text-base md:text-lg"
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
        <div className="container mx-auto px-4 sm:px-6 py-4 md:py-5 lg:py-6">
          <div className="flex items-center justify-between max-w-screen-2xl mx-auto lg:justify-between gap-2 sm:gap-4">
            {/* Logo and Brand */}
            <motion.div
              className="flex items-center gap-2 sm:gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo with triangular design */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                  {/* Replace with actual logo */}
                  <img
                    src="/logo.png"
                    alt="Apollo Medical Group Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-1 sm:ml-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 font-sans">
                    <span className="text-blue-600">Apollo</span>{' '}
                    <span className="text-red-600">Medical</span>{' '}
                    <span className="text-blue-600">Group</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wider uppercase font-sans">
                    Where Healing Begins
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </motion.a>
              ))}

              {/* Account Dropdown */}
              <AccountDropdown />
            </div>

            {/* Mobile Menu Button and Account */}
            <div className="flex flex-row-reverse items-center gap-2 lg:hidden">
              <AccountDropdown />
              <button
                className={`p-2 sm:p-3 rounded-lg text-gray-700 transition-colors ${
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
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.span>
              </button>
            </div>
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
                  { name: 'About', href: '/about' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 sm:px-6 sm:py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-base sm:text-lg"
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
