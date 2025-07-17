'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[50vh] md:h-screen w-full overflow-hidden m-0 p-0">
      {/* Mobile-only faded clouds overlay */}
      <div className="absolute inset-0 block md:hidden z-0">
        <div className="absolute inset-0 bg-[url('/clouds.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-white/15" />
      </div>
      {/* Detop clouds background */}
      <div className="hidden md:block absolute inset-0 bg-[url('/clouds.jpg')] bg-cover bg-center z-0" />
      {/* Main hero card content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex flex-col items-start justify-start w-full h-[40vh] sm:h-[min(85vh,70vh)] px-4 sm:px-8 lg:px-20 pr-4 sm:pr-6 lg:pr-12 pt-8 sm:pt-12 lg:pt-18 pb-6 sm:pb-8 lg:pb-12 transition-transform duration-500 bg-transparent sm:bg-[rgba(255,255,255,0.7)] shadow-none sm:shadow-2xl backdrop-blur-0 sm:backdrop-blur-[8px] lg:max-w-5xl lg:mx-auto"
          style={{
            borderRadius: '1rem',
            transform: 'perspective(800px) scale3d(1.03,1.03,1.03)',
            overflow: 'hidden',
          }}
        >
          {/* Decorative Greek key SVG pattern background */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full z-0 pointer-events-none"
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

          {/* Headings: Centered on mobile, left on md+ */}
          <div className="w-full text-center md:text-left mt-12 md:mt-0">
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
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 sm:mt-6 lg:mt-10 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg text-gray-800 w-full sm:w-3/4 lg:w-1/2 relative z-10 text-center md:text-left font-bold md:font-normal"
          >
            At Apollo Medical Group, we blend trusted care with modern
            treatments to guide you on your path to wellness.
          </motion.p>

          <div className="flex-grow" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-2 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 relative z-10 items-center md:items-start justify-center md:justify-start w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-sm sm:text-base md:w-auto"
            >
              Schedule Your Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 border border-blue-700 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-sm sm:text-base max-w-fit md:w-auto transition-colors duration-200 hover:bg-blue-700 hover:text-white"
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
        className="absolute bottom-0 z-0 md:z-30 m-0 p-0 w-full flex justify-center md:justify-end"
        style={{ right: undefined }}
      >
        <div className="relative w-[70vw] h-[40vh] md:w-[clamp(60vw,80vw,80rem)] md:h-[clamp(50vh,70vh,70rem)] md:mr-[clamp(-15vw,-9vw,-5.625rem)]">
          <div
            className="block md:hidden absolute inset-0 bg-white/15 rounded-b-2xl"
            style={{ zIndex: 1 }}
          />
          <Image
            src="/apollo3.png"
            alt="Medical professional"
            fill
            className="object-contain object-bottom drop-shadow-2xl opacity-60 md:opacity-100"
            priority
            sizes="(max-width: 475px) 80vw, (max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
            style={{ zIndex: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
