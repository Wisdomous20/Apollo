'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-12 lg:py-0 overflow-hidden bg-white">
      {/* Greek key pattern SVG background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ background: 'none' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <defs>
            <pattern
              id="greek-key"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="80" height="80" fill="#f8f5ef" />
              <path
                d="M0 0 H60 V20 H20 V60 H80"
                stroke="#bfa76a"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M80 80 H20 V60 H60 V20 H0"
                stroke="#bfa76a"
                strokeWidth="3"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="1200"
            height="800"
            fill="url(#greek-key)"
            opacity="0.03"
          />
        </svg>
      </div>

      {/* Original Fixed-position side images (decorative pillars) - Hidden on mobile */}
      <div className="hidden lg:block absolute left-0 top-0 h-screen w-40 md:w-56 lg:w-64 xl:w-72 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative left pillar"
          fill
          className="object-contain object-left"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-0 h-screen w-40 md:w-56 lg:w-64 xl:w-72 z-30 pointer-events-none drop-shadow-2xl">
        <Image
          src="/pillar.png"
          alt="Decorative right pillar"
          fill
          className="object-contain object-right"
          priority
          style={{ filter: 'brightness(1.08) contrast(1.1)' }}
        />
      </div>

      {/* Split Layout Container */}
      <div className="w-full h-screen flex">
        {/* Left Half - Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 relative z-10 lg:ml-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-12 max-w-3xl w-full text-center"
          >
            {/* Main heading */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-bold leading-tight tracking-tight"
                style={{
                  fontFamily: 'Georgia, Times New Roman, Times, serif',
                  fontWeight: 700,
                }}
              >
                <span className="flex flex-col gap-3 items-center">
                  <span className="text-blue-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    WHERE
                  </span>
                  <span className="text-red-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
                    HEALING
                  </span>
                  <span className="text-blue-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    BEGINS
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg lg:text-xl xl:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto mt-8"
                style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
              >
                At Apollo Medical Group, we offer comprehensive care for all
                your health needs.
              </motion.p>
            </div>

            {/* CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 pt-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="relative border-2 border-blue-600 !bg-transparent text-blue-700 px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group !bg-none
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
                className="border-2 border-slate-400 text-slate-700 hover:bg-white/80 hover:border-slate-500 px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300 bg-white/40 backdrop-blur-sm"
                style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Half - Image */}
        <div className="hidden lg:flex w-1/2 relative items-end justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            {/* Medical team image */}
            <div className="relative w-[750px] h-[750px]">
              <Image
                src="/4.png"
                alt="Apollo Medical Group team of three medical professionals"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating elements - positioned around the image */}
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
              className="absolute -top-10 -left-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border border-white/40 z-20"
            >
              <Heart className="w-8 h-8 text-red-600" />
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
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border border-white/40 z-20"
            >
              <Shield className="w-8 h-8 text-red-700" />
            </motion.div>

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
              className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-lg flex items-center justify-center z-20"
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Image - Shows below text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:hidden absolute bottom-0 left-0 right-0 h-64 z-10"
        >
          <div className="relative w-full h-full">
            <Image
              src="/4.png"
              alt="Apollo Medical Group team of three medical professionals"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
