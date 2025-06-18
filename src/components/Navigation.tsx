'use client';

import { motion } from 'framer-motion';
import { Phone, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 gradient-primary-secondary rounded-2xl flex items-center justify-center transform rotate-12">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">
                APOLLO
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                MEDICAL GROUP
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/"
              className="text-foreground hover:text-primary-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              HOME
            </motion.a>
            <motion.a
              href="/gallery"
              className="text-foreground hover:text-primary-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              GALLERY
            </motion.a>
            <motion.a
              href="/about"
              className="text-foreground hover:text-primary-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
            >
              ABOUT
            </motion.a>
            <motion.a
              href="tel:7024447744"
              className="flex items-center space-x-2 text-primary-600 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>(702) 444-7744</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          className="md:hidden bg-background border-t border-primary-100"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="/" className="block text-foreground font-medium">
              HOME
            </a>
            <a href="/gallery" className="block text-foreground font-medium">
              GALLERY
            </a>
            <a href="/about" className="block text-foreground font-medium">
              ABOUT
            </a>
            <a
              href="tel:7024447744"
              className="block text-primary-600 font-semibold"
            >
              (702) 444-7744
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
