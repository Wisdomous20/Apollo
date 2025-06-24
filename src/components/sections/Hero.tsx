'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen flex items-center">
      {/* Fixed-position side images (decorative pillars) */}
      <div className="fixed left-0 top-0 h-screen w-16 md:w-24 lg:w-32 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative left pillar"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="fixed right-0 top-0 h-screen w-16 md:w-24 lg:w-32 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative right pillar"
          fill
          className="object-cover opacity-20 scale-x-[-1]"
          priority
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
      </div>{' '}
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10 lg:space-y-12 text-center lg:text-left"
          >
            {/* Heading Section */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
              >
                <span className="text-blue-700 block">Where</span>
                <span className="text-red-600 block">healing</span>
                <span className="text-gray-900 block">begins</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                At Apollo Medical Group, we offer comprehensive care for all
                your health needs with compassion and expertise.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white px-10 py-7 text-xl font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 min-w-[280px]"
              >
                Schedule Your Visit
              </Button>
            </motion.div>
          </motion.div>{' '}
          {/* Right Content - Medical Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Blue vertical pill background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full transform scale-95 shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              ></motion.div>

              {/* Medical team image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative z-10"
              >
                <div
                  className="relative overflow-hidden rounded-full shadow-2xl"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src="/4.png"
                    alt="Apollo Medical Group team of three medical professionals"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Curved bottom cutoff */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 lg:h-28"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
