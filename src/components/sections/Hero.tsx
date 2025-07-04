'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Greek key pattern SVG background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <defs>
            <pattern
              id="greek-key"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="80" height="80" fill="#f8f5ef" />
              <path
                d="M0 0 H60 V20 H20 V60 H80"
                stroke="#bfa76a"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M80 80 H20 V60 H60 V20 H0"
                stroke="#bfa76a"
                strokeWidth="3"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="1200"
            height="800"
            fill="url(#greek-key)"
            opacity="0.03"
          />
        </svg>
      </div>

      {/* Decorative pillars - Hidden on mobile and tablet */}
      <div className="hidden xl:block absolute left-0 top-0 h-screen w-64 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative left pillar"
          fill
          className="object-contain object-left"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 h-screen w-64 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative right pillar"
          fill
          className="object-contain object-right"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative z-10 h-full flex items-center py-8 sm:py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center w-full h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-6 xs:space-y-8 sm:space-y-10 lg:space-y-12 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Heading */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-4 lg:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-blue-900"
                style={{
                  fontFamily: 'Georgia, Times New Roman, Times, serif',
                }}
              >
                Where Healing,
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-tight tracking-tight text-red-800 font-extrabold"
                style={{
                  fontFamily: 'Georgia, Times New Roman, Times, serif',
                }}
              >
                BEGINS.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base xs:text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
            >
              At Apollo Medical Group, we blend trusted care with modern
              treatments to guide you on your path to wellness.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center pt-4 sm:pt-6 lg:pt-8"
            >
              <Button
                size="lg"
                className="bg-blue-700 text-white px-6 xs:px-8 sm:px-10 lg:px-12 py-4 xs:py-5 sm:py-6 text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold xs:font-bold rounded-lg sm:rounded-xl shadow-lg hover:bg-blue-800 transition-all duration-300 group w-full sm:w-auto min-w-[200px] xs:min-w-[220px] sm:min-w-[240px] min-h-[44px] xs:min-h-[48px] sm:min-h-[52px]"
                style={{
                  fontFamily: '"Times New Roman", "Georgia", serif',
                }}
              >
                <span className="transition-colors duration-200">
                  Schedule Your Visit
                </span>
                <ArrowRight className="ml-2 xs:ml-3 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100 hover:border-slate-500 px-6 xs:px-8 sm:px-10 lg:px-12 py-4 xs:py-5 sm:py-6 text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold xs:font-bold rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto min-w-[200px] xs:min-w-[220px] sm:min-w-[240px] min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] bg-transparent"
                style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/doctors.png"
                alt="Apollo Medical Group doctors"
                fill
                className="object-contain object-center lg:object-bottom"
                priority
                sizes="(max-width: 475px) 100vw, (max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
              />
              {/* Gradient mask at the bottom for smooth fade */}
              <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 xs:h-20 sm:h-24"
                style={{
                  background:
                    'linear-gradient(to top, white 25%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
