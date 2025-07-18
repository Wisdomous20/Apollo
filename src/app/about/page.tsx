'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Brain, Stethoscope } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Primary Care',
      description:
        'From preventive screenings to chronic disease management, our experienced primary care providers are dedicated to keeping you healthy and addressing any concerns that arise.',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Doctor consulting with patient in modern clinic',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Psychological and Mental Health',
      description:
        'Our compassionate mental health professionals offer a safe and supportive space to address a wide range of mental health challenges, promoting emotional well-being and resilience.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Therapist session in comfortable, welcoming environment',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Aesthetic Services',
      description:
        'Enhance your natural beauty and boost your confidence with our selection of aesthetic treatments, administered by skilled practitioners who prioritize your safety and satisfaction.',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Modern aesthetic treatment room with professional equipment',
    },
  ];

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
      } else {
        // Swiped right
        setCurrentServiceIndex(
          (prev) => (prev - 1 + services.length) % services.length
        );
      }
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/clouds.jpg')" }}
    >
      {/* Optional: overlay for readability */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />
      <section className="py-20 lg:py-32 relative overflow-hidden z-10">
        {/* Navigation Bar */}
        <Navigation />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 mt-8 sm:mt-12"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-blue-800 uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
          </motion.div>

          {/* Main Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24 lg:mb-32"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative w-full p-3 sm:p-6 lg:p-10 xl:p-16 lg:min-h-[520px]">
              {/* Card Background Pattern SVG - hidden on mobile */}
              <div className="absolute inset-0 opacity-10 pointer-events-none z-0 hidden sm:block">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="about-pattern-hero"
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
                    fill="url(#about-pattern-hero)"
                    className="text-slate-600"
                  />
                </svg>
              </div>
              <div className="relative lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center z-10">
                {/* Image Column */}
                <div className="lg:col-span-5 lg:flex lg:items-center">
                  <div className="relative w-full aspect-[4/3] lg:min-h-[340px]">
                    <div className="relative w-full">
                      <div className="absolute inset-0 opacity-3">
                        <svg
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern
                              id="hero-pattern"
                              x="0"
                              y="0"
                              width="60"
                              height="60"
                              patternUnits="userSpaceOnUse"
                            >
                              <rect width="60" height="60" fill="none" />
                              <path
                                d="M0 30h60M30 0v60"
                                stroke="currentColor"
                                strokeWidth="0.3"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#hero-pattern)"
                            className="text-slate-400"
                          />
                        </svg>
                      </div>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1280&q=80"
                          alt="Hospital corridor with medical staff"
                          fill
                          className="object-cover"
                          priority
                        />
                        {/* Enhanced gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 lg:from-black/30 lg:via-black/10 lg:to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end lg:relative lg:col-span-7 lg:p-0 lg:flex lg:items-center lg:justify-start">
                  <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white sm:text-red-700 font-serif leading-[1.1] mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg lg:drop-shadow-none">
                        Rooted in Healing, Dedicated to Your Well-being
                      </h1>
                      <p className="text-sm sm:text-base lg:text-xl text-slate-50 sm:text-blue-700 sm:font-bold leading-relaxed font-serif mb-3 sm:mb-4 lg:mb-8 drop-shadow-md lg:drop-shadow-none">
                        At Apollo Medical Group, our name is more than just a
                        title; it&apos;s a reflection of our commitment to
                        providing comprehensive and compassionate primary care.
                      </p>
                      <p className="text-xs sm:text-sm lg:text-lg text-slate-100 sm:text-blue-700 sm:font-bold leading-relaxed font-serif hidden sm:block drop-shadow-md lg:drop-shadow-none">
                        Inspired by the Greek god of healing and medicine, we
                        strive to embody his legacy by offering a holistic
                        approach to healthcare that focuses on your physical,
                        emotional, and mental well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-24 lg:mb-32"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative w-full p-3 sm:p-6 lg:p-10 xl:p-16 lg:min-h-[520px]">
              {/* Card Background Pattern SVG - hidden on mobile */}
              <div className="absolute inset-0 opacity-10 pointer-events-none z-0 hidden sm:block">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="about-pattern-mission"
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
                    fill="url(#about-pattern-mission)"
                    className="text-slate-600"
                  />
                </svg>
              </div>
              <div className="relative lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center z-10">
                {/* Image Column */}
                <div className="lg:col-span-5 lg:flex lg:items-center lg:order-2">
                  <div className="relative w-full aspect-[4/3] lg:min-h-[340px]">
                    <div className="absolute inset-0 opacity-3">
                      <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id="mission-pattern"
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                            patternUnits="userSpaceOnUse"
                          >
                            <rect width="80" height="80" fill="none" />
                            <circle
                              cx="40"
                              cy="40"
                              r="20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.3"
                              opacity="0.3"
                            />
                            <path
                              d="M20 40h40M40 20v40"
                              stroke="currentColor"
                              strokeWidth="0.2"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#mission-pattern)"
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&w=640&q=80"
                        alt="Hospital team consultation"
                        fill
                        className="object-cover"
                      />
                      {/* Enhanced gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/40">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 lg:from-black/30 lg:via-black/10 lg:to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end lg:relative lg:col-span-7 lg:p-0 lg:flex lg:items-center lg:justify-start lg:order-1">
                  <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white sm:text-red-700 font-serif leading-[1.1] mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg lg:drop-shadow-none">
                        Our Mission
                      </h2>
                      <p className="text-sm sm:text-base lg:text-xl text-slate-50 sm:text-blue-700 sm:font-bold leading-relaxed font-serif mb-3 sm:mb-4 lg:mb-8 drop-shadow-md lg:drop-shadow-none">
                        To serve as your trusted partners in health, delivering
                        personalized and evidence-based care that empowers you
                        to live your healthiest life.
                      </p>
                      <p className="text-xs sm:text-sm lg:text-lg text-slate-100 sm:text-blue-700 sm:font-bold leading-relaxed font-serif hidden sm:block drop-shadow-md lg:drop-shadow-none">
                        We aim to foster a patient-centered environment where
                        you feel heard, understood, and supported on your
                        wellness journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 font-serif leading-[1.1] mb-6 lg:mb-8">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-serif max-w-3xl mx-auto px-4">
                Comprehensive healthcare solutions tailored to your unique needs
                and wellness goals.
              </p>
            </div>

            {/* Services Carousel */}
            <div className="relative">
              {/* Mobile: Single service carousel */}
              <div className="lg:hidden">
                <div
                  className="relative overflow-hidden"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentServiceIndex}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-4"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden h-[400px] flex flex-col">
                        {/* Service image - Reduced height for mobile */}
                        <div className="h-40 relative flex-shrink-0">
                          <Image
                            src={
                              services[currentServiceIndex].image ||
                              '/placeholder.svg'
                            }
                            alt={services[currentServiceIndex].imageAlt}
                            fill
                            className="object-cover"
                          />
                          {/* Enhanced gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-black/40">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          </div>

                          {/* Service icon overlay */}
                          <div className="absolute top-4 left-4">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                              {services[currentServiceIndex].icon}
                            </div>
                          </div>
                        </div>

                        {/* Service content - Flexible height with consistent alignment */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-blue-800 mb-3 font-serif leading-tight">
                              {services[currentServiceIndex].title}
                            </h3>
                            <p className="text-base text-slate-600 leading-relaxed font-serif">
                              {services[currentServiceIndex].description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop: Grid layout with images */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Service image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={service.image || '/placeholder.svg'}
                        alt={service.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Light overlay for desktop */}
                      <div className="absolute inset-0 bg-black/40">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Service icon overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Service content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-serif">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
