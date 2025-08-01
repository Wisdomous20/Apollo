'use client';

import { BookingForm } from './BookingForm';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
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
    <section className="relative min-h-screen sm:min-h-screen overflow-hidden font-serif">
      {/* Background: clouds image gradienting to blue */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="w-full h-full absolute inset-0">
          <Image
            src="/clouds.jpg"
            alt="Clouds background"
            fill
            className="object-cover object-center blur-md"
            priority
            quality={90}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, transparent 10%, rgba(255, 255, 255, 0.8) 100%, rgba(255, 255, 255, 0.3) 100%)',
            }}
          />
        </div>
      </div>

      {/* Image - Positioned separately at bottom right */}
      <motion.div
        className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[12.5rem] sm:h-[17.5rem] md:h-[21.875rem] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] z-10"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full flex items-end">
          <Image
            src="/apollo.png"
            alt="Two medical professionals - a Black woman and white man with glasses, both in white coats"
            fill
            className="object-contain object-bottom opacity-80"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Primary Background - Left half over text area, behind text */}
      {/* <div className="hidden lg:block absolute bottom-0 left-0 right-2/3 h-[90vh] bg-primary/30 z-8"></div> */}

      {/* Text Content Container - Centered vertically */}
      <motion.div
        className="responsive-container min-h-[80vh] sm:min-h-screen flex items-start sm:items-center justify-start relative z-10 pt-0.5 sm:pt-2.5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full lg:w-2/3 lg:mr-auto">
          {/* Content Section */}
          <motion.div
            className="responsive-content text-foreground text-center lg:text-center p-1 rounded-lg"
            variants={itemVariants}
          >
            {/* Main Headline */}
            <motion.div
              className="responsive-typography text-center"
              variants={itemVariants}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif-black leading-tight text-primary flex flex-col items-center gap-0.25 sm:gap-0.5"
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
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-primary max-w-2xl mx-auto px-1 sm:px-0 font-serif-normal mt-0.5 sm:mt-1"
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

      {/* Overlapping Booking Form - Component */}
      <BookingForm />
    </section>
  );
}
