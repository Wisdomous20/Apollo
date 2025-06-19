'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Calendar,
  ArrowDown,
  Zap,
  Shield,
} from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-50 to-blue-50"
    >
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        {/* Large floating blob */}
        <motion.div
          className="absolute top-20 -right-40 w-96 h-96 gradient-ocean blob opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        {/* Medium floating blob */}
        <motion.div
          className="absolute bottom-20 -left-20 w-64 h-64 gradient-forest blob-2 opacity-15"
          animate={{
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        {/* Small decorative elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-12 h-12 gradient-sunset rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Asymmetric Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ y: textY }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Playful Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-white/40 px-6 py-3 rounded-full shadow-lg"
            >
              <div className="w-8 h-8 gradient-ocean rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-700 tracking-wide">
                TRUSTED HEALTHCARE SINCE 2008
              </span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-fredoka font-bold leading-tight"
            >
              <span className="text-neutral-800">Healthcare</span>
              <br />
              <span className="text-gradient">Made Simple</span>
              <br />
              <span className="text-neutral-600 text-4xl sm:text-5xl lg:text-6xl">
                & Joyful
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl text-neutral-600 leading-relaxed max-w-2xl"
            >
              At Apollo Medical Group, we believe healthcare should be
              accessible, comprehensive, and surprisingly delightful. From
              primary care to mental health and aesthetic treatments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gradient-ocean text-white hover:opacity-90 rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-neutral-300 hover:border-neutral-400 rounded-2xl px-8 py-6 text-lg font-semibold hover:bg-white/50 transition-all"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              {(
                [
                  { number: '15K+', label: 'Happy Patients', icon: Heart },
                  { number: '98%', label: 'Satisfaction', icon: Sparkles },
                  { number: '24/7', label: 'Support', icon: Shield },
                ] as const
              ).map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-forest rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-fredoka font-bold text-neutral-800">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Area - Creative Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative">
              {/* Primary Card */}
              <motion.div
                className="relative w-full h-96 gradient-sky rounded-3xl shadow-2xl overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-semibold">
                      3D Doctor Illustration
                    </p>
                    <p className="text-sm opacity-80">Compassionate Care</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 gradient-sunset rounded-3xl shadow-xl flex items-center justify-center"
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 w-16 h-16 gradient-ocean rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 text-neutral-400" />
            <span className="text-sm text-neutral-400 font-medium">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
