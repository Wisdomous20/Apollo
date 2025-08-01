'use client';

import { BookingForm } from './BookingForm';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="relative min-h-screen overflow-hidden font-serif">
      {/* ===== APOLLO IMAGE SECTION ===== */}
      {/* Position: Right 40% of screen, z-20 (in front) */}
      <motion.div
        className="absolute top-0 right-0 w-[40%] h-full z-20"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full flex items-end justify-center opacity-90">
          <Image
            src="/apollo.png"
            alt="Two medical professionals - a Black woman and white man with glasses, both in white coats"
            fill
            className="object-contain object-bottom"
            priority
            sizes="40vw"
          />
        </div>
      </motion.div>

      {/* ===== BACKGROUND & GRADIENT SECTION ===== */}
      {/* Full clouds background with building overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-15">
        {/* Main clouds background - full screen */}
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

        {/* Building overlay - positioned on right side */}
        <div className="absolute top-0 right-0 2xl:w-1/2 xl:w-[40%] h-full z-5 opacity-70">
          <Image
            src="/building.png"
            alt="Building background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="50vw"
          />
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent" />
      </div>

      {/* ===== TEXT CONTENT SECTION ===== */}
      {/* Main headline and description, centered in left 60% */}
      <motion.div
        className="relative z-20 w-[60%] min-h-screen flex items-center justify-center px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-4xl">
          <motion.div
            className="text-foreground text-center"
            variants={itemVariants}
          >
            {/* Hero Headline */}
            <motion.div className="text-center mb-8" variants={itemVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif-black leading-tight text-primary flex flex-col items-center gap-2"
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary max-w-3xl mx-auto font-serif-normal mt-6"
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
        </div>
      </motion.div>

      {/* ===== BOOKING FORM SECTION ===== */}
      {/* Overlapping booking form positioned absolutely */}
      <div className="relative z-20 w-[60%]">
        <BookingForm />
      </div>
    </section>
  );
}
