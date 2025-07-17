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
      {' '}
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
                  className="relative text-blue-800 font-bold underline underline-offset-4 decoration-red-600 text-base xl:text-lg transition-colors duration-200 group rounded-full px-4 py-2 overflow-hidden"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 group-hover:text-blue-800 transition-colors duration-200">
                    {item.name}
                  </span>
                  {/* Animated white background on hover */}
                  <span className="absolute inset-0 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-0" />
                </motion.a>
              ))}

              {/* Account Dropdown (desktop only) */}
              <AccountDropdown />
            </div>

            {/* Mobile Menu Button and Account */}
            <div className="flex flex-row-reverse items-center gap-2 lg:hidden">
              {/* Burger button only, no AccountDropdown */}
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
                    className="block px-4 py-2 sm:px-6 sm:py-3 text-blue-800 font-bold underline underline-offset-4 decoration-red-600 rounded-full transition-all text-base sm:text-lg relative overflow-hidden group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10 group-hover:text-blue-800 transition-colors duration-200">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-0" />
                  </a>
                ))}
              </div>
              {/* Account actions dropdown for mobile */}
              <div className="mt-6 border-t border-gray-100 pt-4">
                <div className="flex flex-col gap-2">
                  <button
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-slate-50 transition-colors"
                    onClick={() => {
                      window.location.href = '/account';
                      setIsMenuOpen(false);
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Profile & Appointments
                  </button>
                  <button
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-slate-50 transition-colors"
                    onClick={() => {
                      window.location.href = '/account/settings';
                      setIsMenuOpen(false);
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 007 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 0012 5.1V5a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                    Settings
                  </button>
                  <button
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-50 transition-colors"
                    onClick={() => {
                      /* TODO: implement logout */ setIsMenuOpen(false);
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
