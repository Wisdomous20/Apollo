'use client';

import { BookingForm } from './BookingForm';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Export services array for use in Services.tsx
export const services = [
  { title: 'Primary Care' },
  { title: 'Specialized Care' },
  { title: 'Emergency Care' },
];

export default function Hero() {
  // ===== ANIMATION VARIANTS =====
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as const;

  return (
    <section className="relative overflow-hidden font-serif min-h-[70vh] lg:min-h-screen mt-12 lg:mt-0">
      {/* ===== BACKGROUND & GRADIENT SECTION ===== */}
      <div className="absolute top-0 left-0 w-full h-full z-15">
        {/* Main clouds background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/clouds.jpg"
            alt="Clouds background"
            fill
            className="object-cover object-center scale-x-[-1]"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Building overlay - responsive positioning */}
        <div
          className="absolute top-0 right-0 
            w-full h-full opacity-30
            sm:opacity-40 md:opacity-50
            lg:w-[40%] lg:opacity-70
            xl:w-[40%] 2xl:w-1/2 
            z-5"
        >
          <Image
            src="/building.png"
            alt="Building background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Responsive gradient overlays */}
        <div
          className="absolute inset-0 
            bg-gradient-to-b from-transparent via-white/60 to-white/80
            sm:bg-gradient-to-b sm:from-transparent sm:via-white/50 sm:to-white/70
            md:bg-gradient-to-r md:from-white/60 md:via-white/40 md:to-transparent
            lg:bg-gradient-to-r lg:from-white/70 lg:via-white/50 lg:to-transparent"
        />
      </div>

      {/* ===== TEXT CONTENT SECTION ===== */}
      <motion.div
        className="relative z-20 
          w-full pt-16 pb-20 px-4
          sm:pt-20 sm:pb-24 sm:px-6
          md:pt-24 md:pb-32 md:px-8
          lg:w-[60%] lg:pt-0 lg:pb-0 lg:px-8 lg:min-h-screen lg:flex lg:flex-col lg:items-start lg:justify-center
          xl:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-4xl lg:w-full lg:flex lg:flex-col lg:items-start">
          <motion.div
            className="text-foreground text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Hero Headline */}
            <motion.div
              className="text-center mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <motion.h1
                className="font-serif-black leading-tight text-primary flex flex-col items-center gap-1 sm:gap-2
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                  2xl:text-7xl"
                variants={itemVariants}
              >
                <span className="text-primary whitespace-nowrap">
                  WHERE HEALING
                </span>
                <motion.span
                  className="text-secondary font-serif-black"
                  variants={itemVariants}
                >
                  BEGINS
                </motion.span>
              </motion.h1>

              {/* Hero Description */}
              <motion.p
                className="text-primary max-w-3xl mx-auto font-serif-normal mt-4 sm:mt-6
                  text-sm leading-relaxed
                  sm:text-base sm:leading-relaxed
                  md:text-lg md:leading-relaxed
                  lg:text-xl lg:leading-relaxed
                  xl:text-2xl xl:leading-relaxed"
                variants={itemVariants}
              >
                At Apollo Medical Group, we blend trusted care with modern
                treatments to guide you on your path to
                <span className="text-secondary font-serif-bold">
                  {' '}
                  wellness.
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
          {/* ===== BOOKING FORM SECTION (desktop only) ===== */}
          <div className="mt-8 w-full lg:w-3/4 lg:mx-0 hidden lg:block">
            <BookingForm />
          </div>
        </div>
      </motion.div>

      {/* ===== APOLLO IMAGE SECTION ===== */}
      {/* Mobile: Bottom section, Desktop: Right 40% at bottom */}
      <motion.div
        className="absolute bottom-0 right-0 
          w-full h-[32vh] sm:h-[38vh] md:h-[45vh]
          lg:w-[40%] lg:h-full 
          z-20"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full flex items-end justify-center opacity-90">
          <Image
            src="/apollo.png"
            alt="Two medical professionals - a Black woman and white man with glasses, both in white coats"
            fill
            className="object-contain object-bottom 
              sm:object-contain md:object-contain
              lg:object-contain"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </motion.div>

      {/* ===== BOOKING FORM SECTION (mobile/tablet only) ===== */}
      <div className="block lg:hidden w-full px-4 sm:px-6 md:px-8 mt-6">
        <BookingForm />
      </div>
    </section>
  );
}
