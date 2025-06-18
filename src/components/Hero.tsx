'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-secondary-50/60"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y: textY }}
        >
          <motion.p
            className="text-primary-600 font-semibold mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            WELCOME
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Where <span className="text-gradient-primary">Healing</span>
            <br />
            Begins
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            At Apollo Medical Group, we offer comprehensive care for all your
            health needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="gradient"
              size="xl"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE YOUR VISIT
              </motion.button>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
              alt="Medical professional with heart EKG illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
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
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-8 h-8 text-primary-600" />
      </motion.div>
    </section>
  );
}

export default Hero;
