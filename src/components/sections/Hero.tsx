'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import ScheduleVisitModal from '@/components/account/ScheduleVisitModal';

// Export services array for use in Services.tsx
export const services = [
  { title: 'Primary Care' },
  { title: 'Specialized Care' },
  { title: 'Emergency Care' },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<
    string | undefined
  >(undefined);

  // Function to open modal with optional preselected service
  const openModal = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setModalOpen(true);
  };

  // Listen for custom event from Services.tsx
  useEffect(() => {
    const handler = (e: CustomEvent<{ serviceTitle?: string }>) => {
      openModal(e.detail?.serviceTitle);
    };
    window.addEventListener('open-schedule-modal', handler as EventListener);
    return () =>
      window.removeEventListener(
        'open-schedule-modal',
        handler as EventListener
      );
  }, []);
  return (
    <section className="relative h-[50vh] md:h-screen w-full overflow-hidden m-0 p-0">
      {/* Modal for scheduling visit */}
      <ScheduleVisitModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
        preselectedService={preselectedService}
      />
      {/* Mobile-only faded clouds overlay */}
      <div className="absolute inset-0 block md:hidden z-0">
        <div className="absolute inset-0 bg-[url('/clouds.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-white/15" />
      </div>
      {/* Desktop clouds background */}
      <div className="hidden md:block absolute inset-0 bg-[url('/clouds.jpg')] bg-cover bg-center z-0" />
      {/* Desktop clouds dark overlay */}
      <div className="hidden md:block absolute inset-0 bg-black/10 z-0" />
      {/* Main hero card content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-[2vw] sm:px-[4vw] lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex flex-col items-start justify-start w-[80vw] h-[40vh] sm:h-[min(85vh,70vh)] px-[2vw] sm:px-[4vw] lg:px-[5vw] pr-[2vw] sm:pr-[3vw] lg:pr-[4vw] pt-[3vh] sm:pt-[5vh] lg:pt-[7vh] pb-[2vh] sm:pb-[3vh] lg:pb-[4vh] transition-transform duration-500 bg-transparent sm:bg-[rgba(255,255,255,0.7)] shadow-none sm:shadow-lg md:shadow-[0_8px_40px_8px_rgba(30,41,59,0.25)] backdrop-blur-0 sm:backdrop-blur-[12px] mx-auto ring-1 ring-white/30 md:rounded-2xl lg:mt-[6rem]"
          style={{
            borderRadius: '2.5rem', // default for mobile/tablet
            // On md+ screens, border-radius is controlled by Tailwind class md:rounded-2xl
            transform: 'perspective(800px) scale3d(1.03,1.03,1.03)',
            overflow: 'hidden',
          }}
        >
          {/* Decorative Greek key SVG pattern background */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{ opacity: 0.03 }}
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
          <div className="w-full text-center md:text-left mt-[6vh] md:mt-0 lg:mt-[4vh]">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#000080] font-serif relative z-10"
            >
              Where Healing
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-red-700 font-serif relative z-10"
            >
              BEGINS
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-[2vh] sm:mt-[3vh] lg:mt-[3vh] mb-[2vh] sm:mb-[3vh] lg:mb-[4vh] text-sm sm:text-base lg:text-2xl text-gray-800 w-full sm:w-3/4 lg:w-1/2 relative z-10 text-center md:text-left font-bold md:font-normal"
          >
            At Apollo Medical Group, we blend trusted care with modern
            treatments to guide you on your path to wellness.
          </motion.p>

          <div className="flex-grow" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-[1vh] flex flex-col sm:flex-row gap-[1vw] sm:gap-[2vw] lg:gap-[1vw] relative z-10 items-center md:items-start justify-center md:justify-start w-full"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="font-semibold text-base md:w-auto bg-[#000080] text-white hover:bg-[#0000a0] border-none"
                onClick={() => openModal()}
              >
                Schedule Your Visit
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" passHref legacyBehavior>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold text-base md:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-colors"
                >
                  <a>Learn More</a>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Medical professional image - responsive positioning */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 z-0 md:z-30 m-0 p-0 w-full flex justify-center md:justify-end lg:pr-[10vw] pointer-events-none"
        style={{ right: undefined }}
      >
        <div className="relative w-[70vw] h-[40vh] md:w-[clamp(60vw,80vw,80rem)] md:h-[clamp(50vh,70vh,70rem)] md:mr-[clamp(-15vw,-9vw,-5.625rem)] max-w-[90vw] md:max-w-[60vw]">
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
