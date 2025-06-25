'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white min-h-screen flex items-center py-12 lg:py-0">
      {/* Fixed-position side images (decorative pillars) */}
      <div className="fixed left-0 top-0 h-screen w-16 md:w-24 lg:w-32 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative left pillar"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      <div className="fixed right-0 top-0 h-screen w-16 md:w-24 lg:w-32 z-0 pointer-events-none">
        <Image
          src="/5 - Copy.png"
          alt="Decorative right pillar"
          fill
          className="object-cover opacity-40 scale-x-[-1]"
          priority
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-left"
          >
            {/* Heading Section */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
              >
                <span className="text-blue-600 block">Where</span>
                <span className="text-red-500 block">healing</span>
                <span className="text-blue-600 block">begins</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg lg:text-xl text-gray-700 max-w-lg leading-relaxed"
              >
                At Apollo Medical Group, we offer comprehensive care for all
                your health needs.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2"
            >
              <Button
                variant="outline"
                className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300"
              >
                Schedule Your Visit
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Medical Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Blue oval background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl"
                style={{
                  width: '100%',
                  height: '80%',
                  top: '10%',
                }}
              ></motion.div>

              {/* Medical team image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative z-10"
              >
                <div
                  className="relative overflow-hidden rounded-full"
                  style={{
                    aspectRatio: '3/4',
                    width: '100%',
                  }}
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
    </section>
  );
}
