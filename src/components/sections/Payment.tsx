'use client';

import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Payment() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePaymentClick = () => {
    // Add analytics or navigation logic here
    console.log('Payment button clicked');
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-950 via-primary to-blue-800 relative overflow-hidden"
      aria-label="Online Bill Payment Section"
    >
      {/* Background Pattern: Greek Key (Meander) and Circles */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
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
        {/* Enhanced decorative circles */}
        <motion.div
          className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 border border-white/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 border border-white/15 rounded-full"
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Layout: Text -> Image -> Button */}
        <motion.div
          className="lg:hidden space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight font-serif">
              Online Bill Payment
            </h2>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-serif max-w-2xl mx-auto">
              Easily settle your medical bills online at Apollo Medical Group
              Health Clinic. Enjoy a seamless and secure payment experience with
              industry-standard encryption.
            </p>

            {/* Security indicators */}
            <div className="flex justify-center items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>PCI Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={imageLoaded ? { y: [0, -8, 0], rotate: [0, 1, 0] } : {}}
              transition={{
                duration: 6,
                repeat: imageLoaded ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {!imageLoaded && !imageError && (
                <div className="w-full h-[280px] sm:h-[320px] bg-white/10 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="text-white/50">Loading...</div>
                </div>
              )}
              {imageError && (
                <div className="w-full h-[280px] sm:h-[320px] bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-white/70 text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Payment options</p>
                  </div>
                </div>
              )}
              <Image
                src="/1.png"
                alt="Secure credit card payment options for online bill payment"
                width={560}
                height={400}
                className={`w-full h-auto drop-shadow-2xl transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${imageError ? 'hidden' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Button
              size="lg"
              onClick={handlePaymentClick}
              className="group bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-white px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm font-serif focus:outline-none focus:ring-4 focus:ring-white/30 flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
              aria-label="Proceed to secure payment portal"
            >
              <span>Proceed To Payment</span>
              <motion.span
                className="inline-block"
                whileHover={{ x: 4, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors duration-300"
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
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Desktop Layout: Side by side */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-col items-end max-w-lg w-full">
              <div className="w-full space-y-8">
                <h2 className="text-5xl xl:text-6xl font-bold text-white leading-tight font-serif text-left">
                  Online Bill Payment
                </h2>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-serif text-left">
                  Easily settle your medical bills online at Apollo Medical
                  Group Health Clinic. Enjoy a seamless and secure payment
                  experience with industry-standard encryption and fraud
                  protection.
                </p>

                {/* Security badges for desktop */}
                <div className="flex items-center gap-6 text-white/70">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">PCI DSS Compliant</span>
                  </div>
                </div>

                <div className="h-8" />

                <div className="w-full flex justify-end">
                  <Button
                    size="lg"
                    onClick={handlePaymentClick}
                    className="group bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-white px-10 py-7 text-2xl font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm font-serif focus:outline-none focus:ring-4 focus:ring-white/30 flex items-center gap-4 active:scale-95"
                    aria-label="Proceed to secure payment portal"
                  >
                    <span>Proceed To Payment</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 6, scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <svg
                        className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
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
                    </motion.span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Credit Cards */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.div
              animate={imageLoaded ? { y: [0, -10, 0], rotate: [0, 2, 0] } : {}}
              transition={{
                duration: 8,
                repeat: imageLoaded ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-lg xl:max-w-2xl"
            >
              {!imageLoaded && !imageError && (
                <div className="w-full h-[320px] lg:h-[400px] bg-white/10 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="text-white/50 text-lg">
                    Loading payment options...
                  </div>
                </div>
              )}
              {imageError && (
                <div className="w-full h-[320px] lg:h-[400px] bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-white/70 text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      Secure Payment Options Available
                    </p>
                  </div>
                </div>
              )}
              <Image
                src="/1.png"
                alt="Secure credit card payment options including Visa, Mastercard, and digital wallets"
                width={560}
                height={400}
                className={`w-full h-auto drop-shadow-2xl transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${imageError ? 'hidden' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
