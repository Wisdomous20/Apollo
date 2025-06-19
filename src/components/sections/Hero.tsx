'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Calendar } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="main-content"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-medical-50/30"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-white/80 to-medical-50/40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y: textY }}
          className="space-y-6"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-medical-50 text-medical-700 px-4 py-2 rounded-full text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Heart className="w-4 h-4" />
            <span>TRUSTED HEALTHCARE</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Compassionate Care for{' '}
            <span className="text-gradient-medical">Your Health</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            At Apollo Medical Group, we provide comprehensive primary care,
            mental health services, and aesthetic treatments in a welcoming
            environment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="medical"
              size="lg"
              className="shadow-lg hover:shadow-xl"
              aria-label="Schedule an appointment"
            >
              <Calendar className="w-5 h-5 mr-2" />
              SCHEDULE APPOINTMENT
            </Button>
            <Button
              variant="outline"
              size="lg"
              aria-label="Learn more about our services"
            >
              LEARN MORE
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex items-center space-x-6 pt-6"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-600">15+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-600">5000+</div>
              <div className="text-sm text-slate-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-600">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
              alt="Medical professional providing compassionate care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-900/20 to-transparent" />

            {/* Quality badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-health rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    Quality Care
                  </div>
                  <div className="text-xs text-slate-600">
                    Certified Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-medical rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-health rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6 text-medical-600" />
        <span className="sr-only">Scroll down for more content</span>
      </motion.div>
    </section>
  );
}

export default Hero;
