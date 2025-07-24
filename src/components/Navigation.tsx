'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import AccountDropdown from './account/AccountDropdown';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {' '}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm overflow-hidden"
        role="navigation"
        aria-label="Main navigation"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 py-1 md:py-2 lg:py-2">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto lg:justify-between gap-2 sm:gap-4">
              {/* Logo and Brand */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Logo with circular design */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="relative w-[3.5rem] h-[3.5rem] sm:w-[6rem] sm:h-[6rem] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Apollo Medical Group Logo"
                      width={80}
                      height={80}
                      className="w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] object-contain rounded-full"
                      priority
                    />
                  </div>
                  <div className="ml-[0.25rem] sm:ml-[0.5rem]">
                    <h1
                      className="text-[clamp(1.1rem,2vw,1.5rem)] sm:text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-gray-800 font-serif leading-tight"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      <span className="text-red-700">Apollo</span>{' '}
                      <span className="text-[#000080]">Medical</span>{' '}
                      <span className="text-[#000080]">Group</span>
                    </h1>
                    <p
                      className="text-[clamp(0.7rem,1.2vw,0.95rem)] sm:text-[clamp(0.85rem,1.5vw,1.1rem)] text-gray-600 font-medium tracking-wider uppercase font-serif"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Where Healing Begins
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-[1.5rem] xl:gap-[2.5rem]">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative text-[#000080] font-bold text-[clamp(1rem,1.2vw,1.15rem)] xl:text-[clamp(1.1rem,1.5vw,1.25rem)] transition-colors duration-200 group rounded-full px-[1.2em] py-[0.6em] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-2"
                    style={{ position: 'relative' }}
                  >
                    <span className="relative z-10 transition-colors duration-200">
                      {item.name}
                    </span>
                    <span
                      className="pointer-events-none absolute left-0 bottom-1 w-full h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </a>
                ))}

                {/* Account Dropdown (desktop only) */}
                <AccountDropdown />
              </div>

              {/* Mobile Menu Button and Account */}
              <div className="flex flex-row-reverse items-center gap-2 lg:hidden">
                {/* Burger button only, no AccountDropdown */}
                <button
                  className={`p-[0.5em] sm:p-[0.75em] rounded-lg text-gray-700 transition-colors ${
                    isMenuOpen ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <span style={{ display: 'inline-block' }}>
                    <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-[1.2em] py-[0.7em] sm:px-[1.5em] sm:py-[1em] text-[#000080] font-bold rounded-full transition-all text-[clamp(1rem,1.2vw,1.15rem)] sm:text-[clamp(1.1rem,1.5vw,1.25rem)] relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-2"
                      style={{ position: 'relative' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10 transition-colors duration-200">
                        {item.name}
                      </span>
                      <span
                        className="pointer-events-none absolute left-0 bottom-1 w-full h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
                {/* Account actions dropdown for mobile */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="flex flex-col gap-2">
                    <button
                      className="flex items-center gap-3 px-[1.2em] py-[0.7em] rounded-lg text-[#000080] font-semibold hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-2"
                      onClick={() => {
                        window.location.href = '/account';
                        setIsMenuOpen(false);
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-[#000080]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
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
                      className="flex items-center gap-3 px-[1.2em] py-[0.7em] rounded-lg text-[#000080] font-semibold hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-2"
                      onClick={() => {
                        window.location.href = '/account/settings';
                        setIsMenuOpen(false);
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-[#000080]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 007 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 0012 5.1V5a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                      </svg>
                      Settings
                    </button>
                    <button
                      className="flex items-center gap-3 px-[1.2em] py-[0.7em] rounded-lg text-red-600 font-semibold hover:bg-red-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
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
                        aria-hidden="true"
                        focusable="false"
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
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
