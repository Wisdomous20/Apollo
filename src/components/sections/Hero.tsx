'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[url('/clouds.jpg')] bg-cover bg-center m-0 p-0">
      {/* Main hero card content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            width: 'min(90vw, 70vw)',
            height: 'min(85vh, 70vh)',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '1rem',
            boxShadow:
              '0 1.5vh 4vh 0 rgba(0,0,0,0.25), 0 0.2vh 1vh 0 rgba(0,0,0,0.10)',
            border: '0.4vh rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transform: 'perspective(800px) scale3d(1.03,1.03,1.03)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="flex flex-col items-start justify-start h-full px-4 sm:px-8 lg:px-20 pr-4 sm:pr-6 lg:pr-12 pt-8 sm:pt-12 lg:pt-18 pb-6 sm:pb-8 lg:pb-12 shadow-2xl transition-transform duration-500"
        >
          {/* Decorative Greek key SVG pattern background */}
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{ opacity: 0.02 }}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
          >
            <defs>
              <pattern
                id="greekKey"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0h32v8H8v24h24v-8H16v-8h16"
                  stroke="#1e293b"
                  strokeWidth="2"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#greekKey)" />
          </svg>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 font-serif relative z-10"
            style={{ textShadow: '0 0.25vh 2vh rgba(255,255,255,0.85)' }}
          >
            Where Healing
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-red-700 font-serif relative z-10"
            style={{ textShadow: '0 0.25vh 2vh rgba(255,255,255,0.85)' }}
          >
            BEGINS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 sm:mt-6 lg:mt-10 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg text-gray-800 w-full sm:w-3/4 lg:w-1/2 relative z-10"
          >
            At Apollo Medical Group, we blend trusted care with modern
            treatments to guide you on your path to wellness.
          </motion.p>

          <div className="flex-grow" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-2 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-sm sm:text-base"
            >
              Schedule Your Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 font-medium text-sm sm:text-base"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Medical professional image - responsive positioning */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 right-0 z-30 m-0 p-0"
        style={{
          right: 'clamp(-15vw, -9vw, -5.625rem)',
          width: 'clamp(60vw, 80vw, 80rem)',
          height: 'clamp(50vh, 70vh, 70rem)',
        }}
      >
        <Image
          src="/apollo3.png"
          alt="Medical professional"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
          sizes="(max-width: 475px) 80vw, (max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
        />
      </motion.div>
    </section>
  );
}
