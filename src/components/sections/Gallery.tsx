'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: '/gallery1.jpg',
      alt: 'Medical professionals and facilities',
      title: 'Advanced Medical Care',
      description:
        'State-of-the-art medical facilities with cutting-edge technology',
    },
    {
      id: 2,
      src: '/gallery2.jpg',
      alt: 'Healthcare team and services',
      title: 'Professional Healthcare Team',
      description:
        'Experienced medical professionals dedicated to patient care',
    },
    {
      id: 3,
      src: '/gallery3.jpg',
      alt: 'Medical equipment and technology',
      title: 'State-of-the-Art Equipment',
      description: 'Modern diagnostic and treatment equipment for optimal care',
    },
    {
      id: 4,
      src: '/gallery4.jpg',
      alt: 'Patient care facilities',
      title: 'Patient Care Excellence',
      description: 'Comfortable and welcoming patient care environments',
    },
    {
      id: 5,
      src: '/gallery5.jpg',
      alt: 'Healthcare services and facilities',
      title: 'Comprehensive Healthcare',
      description: 'Full range of medical services under one roof',
    },
  ];

  const minSwipeDistance = 50;

  // Navigation functions
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-transition effect with pause/play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextImage]);

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

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

      {/* Enhanced Background Pattern SVG */}
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
            className="text-primary/30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-serif">
            Our Gallery
          </h2>
          <div className="w-[4rem] h-[0.125rem] bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-serif">
            Take a look at our state-of-the-art facilities, dedicated healthcare
            professionals, and the advanced medical technology we use to provide
            exceptional care.
          </p>
        </motion.div>

        {/* Enhanced Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden relative group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/10] md:aspect-[18/10] lg:aspect-[20/10] overflow-hidden bg-slate-200">
            {/* Previous Image Preview */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-28 xl:w-32 opacity-30 overflow-hidden z-10"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.div>

            {/* Next Image Preview */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-28 xl:w-32 opacity-30 overflow-hidden z-10"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-primary" />
              ) : (
                <Play className="w-4 h-4 text-primary ml-0.5" />
              )}
            </motion.button>

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
                    src={images[selectedIndex].src}
                    alt={images[selectedIndex].alt}
                    fill
                    className="object-cover rounded-lg"
                    priority={selectedIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Enhanced Title and Description */}
            <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex flex-col items-center text-white px-4 md:px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-serif mb-2">
                    {images[selectedIndex].title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-serif max-w-2xl">
                    {images[selectedIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: '0%' }}
                animate={{ width: isAutoPlaying ? '100%' : '0%' }}
                transition={{ duration: isAutoPlaying ? 5 : 0, ease: 'linear' }}
                key={selectedIndex}
              />
            </div>
          </div>

          {/* Enhanced Thumbnail Navigation */}
          <div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm relative overflow-hidden">
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
                  className="text-primary/20"
                />
              </svg>
            </div>

            <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide relative">
              {images.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 1000);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24 xl:w-32 xl:h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedIndex === index
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedIndex === index
                        ? 'bg-primary/20'
                        : 'bg-black/10 hover:bg-primary/10'
                    }`}
                  />
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="flex justify-center mt-4">
              <span className="text-sm text-slate-600 font-serif">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Keyboard Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 text-sm text-slate-500 font-serif"
        >
          Use arrow keys to navigate • Space to pause/play
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
