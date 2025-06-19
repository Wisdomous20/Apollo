'use client';

import { motion } from 'framer-motion';
import { Heart, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="glass rounded-3xl px-8 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="w-12 h-12 gradient-ocean rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 gradient-sunset rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-fredoka font-bold text-gradient">
                  APOLLO
                </h1>
                <p className="-mt-1 text-xs text-neutral-500 font-medium tracking-wide">
                  MEDICAL GROUP
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-700 transition-colors rounded-xl hover:text-white group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 gradient-ocean rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.a>
              ))}

              <motion.a
                href="tel:7024447744"
                className="flex items-center space-x-2 px-6 py-3 gradient-sunset text-white text-sm font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Call us at (702) 444-7744"
              >
                <Phone className="w-4 h-4" />
                <span>(702) 444-7744</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl text-neutral-700 hover:bg-white/20 transition-colors"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 pt-6 border-t border-white/20"
            >
              <div className="space-y-4">
                {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block px-4 py-3 text-center font-medium text-neutral-700 hover:bg-white/20 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="tel:7024447744"
                  className="block px-6 py-3 gradient-sunset text-white text-center font-semibold rounded-xl shadow-lg"
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
        </div>
      </motion.nav>
    </>
  );
}
