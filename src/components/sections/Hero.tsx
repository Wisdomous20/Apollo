'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-12 lg:py-0 overflow-hidden">
      {/* Original Background with White to Sky Blue Gradient */}
      <div className="absolute inset-0">
        {/* Main gradient from light blue (upper left) to sky blue (lower right) */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50/80 to-sky-200" />

        {/* Secondary overlay for more subtle sky blue transition */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-sky-50/40 to-sky-300/50" />

        {/* Faint glow effect on the right side */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-blue-200/15 rounded-full blur-2xl" />

        {/* Subtle radial glow in the center-right */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-sky-100/30" />
      </div>

      {/* Original Fixed-position side images (decorative pillars) - Hidden on mobile */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-32 md:w-40 lg:w-48 xl:w-56 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative left pillar"
          fill
          className="object-contain object-left opacity-90"
          priority
        />
      </div>
      <div className="hidden lg:block fixed right-0 top-0 h-screen w-32 md:w-40 lg:w-48 xl:w-56 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative right pillar"
          fill
          className="object-contain object-right opacity-90"
          priority
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Trust indicators - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden sm:flex flex-wrap items-center gap-6 text-sm font-medium text-slate-700"
              style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
            >
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/40">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/40">
                <Heart className="w-4 h-4 text-red-600" />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/40">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Expert Team</span>
              </div>
            </motion.div>

            {/* Main heading with formal font and red/blue mix */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight whitespace-nowrap"
                style={{
                  fontFamily:
                    '"Times New Roman", "Georgia", "Trajan Pro", serif',
                }}
              >
                <span className="text-blue-800">Where </span>
                <span className="text-red-700">healing </span>
                <span className="text-blue-800">begins</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl lg:text-2xl text-slate-700 max-w-2xl leading-relaxed "
                style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
              >
                At Apollo Medical Group, we offer comprehensive care for all
                your health needs.
              </motion.p>
            </div>

            {/* Enhanced CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="relative border-2 border-blue-600 !bg-transparent text-blue-700 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group !bg-none
                  hover:!bg-blue-600 hover:text-white hover:border-transparent focus-visible:border-blue-700"
                style={{
                  fontFamily: '"Times New Roman", "Georgia", serif',
                  background: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <span className="transition-colors duration-200 group-hover:text-white group-hover:font-bold">
                  Schedule Your Visit
                </span>
                <ArrowRight className="ml-2 w-5 h-5 transition-colors duration-200 group-hover:text-white group-hover:font-bold" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-400 text-slate-700 hover:bg-white/80 hover:border-slate-500 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white/40 backdrop-blur-sm"
                style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - 2x Larger 3D Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full" style={{ maxWidth: '180rem' }}>
              {' '}
              {/* 2x larger - massive custom size beyond Tailwind's max classes */}
              <div className="relative aspect-square">
                {/* Background circle - Made smaller for enhanced 3D effect */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute shadow-2xl rounded-full"
                  style={{
                    width: '75%', // Reduced from 90% to 75% for stronger 3D effect
                    height: '75%',
                    top: '12.5%', // Adjusted positioning for smaller circle
                    left: '12.5%',
                    background:
                      'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
                    boxShadow:
                      '0 25px 50px -12px rgba(30, 58, 138, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Inner highlight for depth */}
                  <div
                    className="absolute inset-0 opacity-20 rounded-full"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                    }}
                  />
                </motion.div>

                {/* Medical team image - Dramatically larger now */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative z-10"
                  style={{
                    width: '98%', // Increased from 95% to 98%
                    height: '98%',
                    top: '1%', // Adjusted positioning
                    left: '1%',
                  }}
                >
                  <div className="relative overflow-hidden rounded-full w-full h-full shadow-2xl">
                    <Image
                      src="/4.png"
                      alt="Apollo Medical Group team of three medical professionals"
                      fill
                      className="object-cover object-center scale-110"
                      priority
                    />
                    {/* Enhanced vignette for better 3D integration */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle at center, transparent 45%, rgba(30, 58, 138, 0.1) 80%, rgba(30, 58, 138, 0.25) 100%)',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced floating elements - positioned for larger image */}
                <motion.div
                  animate={{
                    y: [-12, 12, -12],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border border-white/40"
                >
                  <Heart className="w-12 h-12 text-red-600" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [12, -12, 12],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border border-white/40"
                >
                  <Shield className="w-12 h-12 text-blue-700" />
                </motion.div>

                {/* Additional floating element for more depth */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    x: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                  className="absolute top-1/4 -right-6 w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-lg flex items-center justify-center"
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
