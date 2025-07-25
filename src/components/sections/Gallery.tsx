'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical professionals in laboratory',
      title: 'Advanced Laboratory Services',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
      alt: 'Healthcare team consultation',
      title: 'Team Consultation',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical equipment and technology',
      title: 'State-of-the-Art Equipment',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      alt: 'Patient care facility',
      title: 'Patient Care Facilities',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical research and development',
      title: 'Research & Development',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center',
      alt: 'Healthcare professionals at work',
      title: 'Professional Healthcare Team',
    },
  ];

  // Auto-transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative pillars - Hidden on mobile and tablet */}
      <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-64 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative left pillar"
          fill
          className="object-cover object-left"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-64 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative right pillar"
          fill
          className="object-cover object-right"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>

      {/* Background Pattern SVG */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="gallery-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <rect width="120" height="120" fill="none" />
              <path
                d="M20 20h80v80h-80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40 40h40v40h-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="60"
                cy="60"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M20 60h20M80 60h20M60 20v20M60 80v20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#gallery-pattern)"
            className="text-slate-600"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Our Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-serif">
            Take a look at our state-of-the-art facilities, dedicated healthcare
            professionals, and the advanced medical technology we use to provide
            exceptional care.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden relative"
        >
          {/* Main Image */}
          <div className="relative aspect-[16/10] md:aspect-[18/10] lg:aspect-[20/10] overflow-hidden">
            {/* Previous Image Preview */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-28 xl:w-32 opacity-30 overflow-hidden">
              <Image
                src={
                  images[
                    selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
                  ].src
                }
                alt="Previous image"
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
            </div>

            {/* Next Image Preview */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-28 xl:w-32 opacity-30 overflow-hidden">
              <Image
                src={
                  images[
                    selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
                  ].src
                }
                alt="Next image"
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
            </div>

            {/* Main Image with Smooth Transitions */}
            <div className="absolute inset-0 mx-8 md:mx-12 lg:mx-14 xl:mx-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[selectedIndex].src || '/placeholder.svg'}
                    alt={images[selectedIndex].alt}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Title with Smooth Transitions */}
            <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex items-center justify-center text-white">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-serif text-center px-4 md:px-6"
                >
                  {images[selectedIndex].title}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 md:p-6 bg-transparent relative overflow-hidden">
            {/* Thumbnail Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="thumbnail-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="40" height="40" fill="none" />
                    <path
                      d="M0 20h40"
                      stroke="currentColor"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M10 10h20v20h-20z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.2"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#thumbnail-pattern)"
                  className="text-slate-600"
                />
              </svg>
            </div>

            <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide relative">
              {images.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => setSelectedIndex(index)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24 xl:w-32 xl:h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedIndex === index
                      ? 'border-blue-600 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedIndex === index
                        ? 'bg-blue-600/20'
                        : 'bg-black/10 hover:bg-black/5'
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
