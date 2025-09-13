'use client';

import { useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import AccountDropdown from './account/AccountDropdown';
import Image from 'next/image';
import { verifyAccessToken } from '@/lib/actions/jwt-actions';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenStatus, setTokenStatus] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const verifyToken = await verifyAccessToken(token);
        if (verifyToken) {
          setTokenStatus(true);
          setName(verifyToken.name);
          setEmail(verifyToken.email);
          setAccountType(verifyToken.userType);
        } else {
          setTokenStatus(false);
        }
      }
    };

    verify();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-border overflow-hidden"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto lg:justify-between gap-2 sm:gap-4">
              {/* Logo and Brand */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Logo with circular design */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <div className="relative w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Apollo Medical Group Logo"
                      width={80}
                      height={80}
                      className="w-[2.25rem] h-[2.25rem] sm:w-[3.5rem] sm:h-[3.5rem] object-contain rounded-full"
                      priority
                    />
                  </div>
                  <div className="ml-[0.25rem] sm:ml-[0.5rem]">
                    <h1 className="text-[clamp(1.1rem,1.8vw,1.4rem)] sm:text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold text-foreground font-serif leading-tight">
                      <span className="text-primary">Apollo</span>{' '}
                      <span className="text-primary">Medical</span>{' '}
                      <span className="text-primary">Group</span>
                    </h1>
                    {/* tagline intentionally removed to keep header concise */}
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
                    className="relative text-primary hover:text-primary/80 font-semibold text-[clamp(0.95rem,1.1vw,1.05rem)] xl:text-[clamp(1.05rem,1.25vw,1.15rem)] transition-all duration-200 group rounded-md px-4 py-2 hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 font-serif"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span
                      className="pointer-events-none absolute left-4 bottom-0 w-[calc(100%-2rem)] h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </a>
                ))}

                {/* Account Dropdown (desktop only) */}
                {tokenStatus ? (
                  <AccountDropdown
                    name={name}
                    email={email}
                    accountType={accountType}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <a
                      href="/login"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 font-semibold text-[clamp(0.85rem,0.9vw,0.95rem)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 bg-transparent text-primary border border-primary/10 hover:bg-primary/5"
                    >
                      Login
                    </a>

                    <a
                      href="/login?mode=signup"
                      className="inline-flex items-center justify-center rounded-md px-3 py-1.5 font-semibold text-[clamp(0.85rem,0.9vw,0.95rem)] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                    >
                      Sign up
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button and Account */}
              <div className="flex flex-row-reverse items-center gap-2 lg:hidden">
                {/* Burger button only, no AccountDropdown */}
                <button
                  className={`p-2 rounded-lg text-primary transition-all duration-200 hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                    isMenuOpen ? 'bg-primary/10' : ''
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-border bg-card/50 rounded-lg mx-2 px-4 py-3">
                <div className="space-y-2">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-primary hover:text-primary/80 font-semibold rounded-lg transition-all text-[clamp(1rem,1.1vw,1.1rem)] hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-serif relative group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className="pointer-events-none absolute left-4 bottom-2 w-[calc(100%-2rem)] h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>

                {/* Show login button if not logged in */}
                {!tokenStatus ? (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="space-y-2">
                      <a
                        href="/login"
                        className="block px-3 py-2 text-primary hover:text-primary/80 font-semibold rounded-md transition-all text-[clamp(0.95rem,1vw,1rem)] hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-serif text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </a>

                      <a
                        href="/login?mode=signup"
                        className="block w-full text-center bg-primary text-primary-foreground font-semibold rounded-md px-3 py-2 hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Account actions dropdown for logged in users */
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex flex-col gap-3">
                      <button
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-semibold hover:bg-primary/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-serif"
                        onClick={() => {
                          window.location.href = '/account';
                          setIsMenuOpen(false);
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-primary"
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
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-secondary font-semibold hover:bg-secondary/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 font-serif"
                        onClick={() => {
                          localStorage.removeItem('accessToken');
                          setIsMenuOpen(false);
                          window.location.href = '/';
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-secondary"
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
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
