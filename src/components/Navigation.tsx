'use client';

import { motion } from 'framer-motion';
import { Phone, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 z-50 w-full border-b shadow-sm bg-white/95 backdrop-blur-lg border-slate-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-medical rounded-2xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-medical">
                  APOLLO
                </h1>
                <p className="-mt-1 text-xs text-slate-500">MEDICAL GROUP</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="items-center hidden space-x-8 md:flex">
              <motion.a
                href="/"
                className="px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg text-slate-700 hover:text-medical-600 focus:outline-none focus:ring-2 focus:ring-medical-200"
                whileHover={{ y: -1 }}
                aria-label="Go to home page"
              >
                HOME
              </motion.a>
              <motion.a
                href="/gallery"
                className="px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg text-slate-700 hover:text-medical-600 focus:outline-none focus:ring-2 focus:ring-medical-200"
                whileHover={{ y: -1 }}
                aria-label="View our gallery"
              >
                GALLERY
              </motion.a>
              <motion.a
                href="/about"
                className="px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg text-slate-700 hover:text-medical-600 focus:outline-none focus:ring-2 focus:ring-medical-200"
                whileHover={{ y: -1 }}
                aria-label="Learn about us"
              >
                ABOUT
              </motion.a>
              <motion.a
                href="tel:7024447744"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-semibold text-white transition-colors shadow-lg bg-medical-600 rounded-xl hover:bg-medical-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-medical-200"
                whileHover={{ scale: 1.05 }}
                aria-label="Call us at (702) 444-7744"
              >
                <Phone className="w-4 h-4" />
                <span>(702) 444-7744</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-lg md:hidden text-slate-700 hover:text-medical-600 focus:outline-none focus:ring-2 focus:ring-medical-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white border-t shadow-lg md:hidden border-slate-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="/"
                className="block px-4 py-3 font-medium transition-colors rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="/gallery"
                className="block px-4 py-3 font-medium transition-colors rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </a>
              <a
                href="/about"
                className="block px-4 py-3 font-medium transition-colors rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="tel:7024447744"
                className="block px-4 py-3 font-semibold text-center text-white transition-colors shadow-lg bg-medical-600 rounded-xl hover:bg-medical-700 focus:outline-none focus:ring-4 focus:ring-medical-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(702) 444-7744</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
