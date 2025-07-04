'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Payment() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern: Greek Key (Meander) and Circles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle Greek key pattern top */}
        <svg
          className="absolute top-0 left-0 w-full h-12 sm:h-16 lg:h-24 opacity-10 sm:opacity-20"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="greek-key-top"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 24h24v24h24V0H0v24zm24 0h24"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="1440" height="96" fill="url(#greek-key-top)" />
        </svg>
        {/* Subtle Greek key pattern bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-12 sm:h-16 lg:h-24 opacity-10 sm:opacity-20"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="greek-key-bottom"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 24h24v24h24V0H0v24zm24 0h24"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="1440" height="96" fill="url(#greek-key-bottom)" />
        </svg>
        {/* Decorative circles for extra depth */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 border border-white rounded-full opacity-10"></div>
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 border border-white rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Layout: Text -> Image -> Button */}
        <div className="lg:hidden space-y-8 sm:space-y-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white leading-tight font-serif"
            >
              Online Bill Payment
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-white/90 leading-relaxed font-serif"
            >
              Easily settle your medical bills online at Apollo Medical Group
              Health Clinic. Enjoy a seamless and secure payment experience.
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <Image
                src="/1.png"
                alt="Credit cards for online payment"
                width={560}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="group bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-950 hover:text-white hover:border-white px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm font-serif focus:outline-none focus:ring-4 focus:ring-blue-300/50 flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
            >
              <span>Proceed To Payment</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col items-end max-w-lg w-full">
              <div className="w-full space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl xl:text-6xl font-bold text-white leading-tight font-serif text-left"
                >
                  Online Bill Payment
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-white/90 leading-relaxed font-serif text-left"
                >
                  Easily settle your medical bills online at Apollo Medical
                  Group Health Clinic. Enjoy a seamless and secure payment
                  experience.
                </motion.p>

                <div className="h-12" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full flex justify-end"
                >
                  <Button
                    size="lg"
                    className="group bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-950 hover:text-white hover:border-white px-10 py-7 text-2xl font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm font-serif focus:outline-none focus:ring-4 focus:ring-blue-300/50 flex items-center gap-4"
                  >
                    <span>Proceed To Payment</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                      <svg
                        className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Credit Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-lg xl:max-w-2xl"
            >
              <Image
                src="/1.png"
                alt="Credit cards for online payment"
                width={560}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
