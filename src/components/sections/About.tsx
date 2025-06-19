'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Brain,
  Sparkles,
  Shield,
  Zap,
  Star,
  Users,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: '-10% 0px -10% 0px',
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const services = [
    {
      icon: Heart,
      title: 'Primary Care',
      description:
        'Comprehensive wellness checkups, preventive screenings, and chronic disease management by experienced physicians.',
      gradient: 'gradient-ocean',
      delay: 0.1,
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description:
        'Safe, supportive therapy sessions addressing anxiety, depression, and emotional well-being.',
      gradient: 'gradient-forest',
      delay: 0.2,
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Services',
      description:
        'Medically supervised beauty treatments to enhance your natural confidence safely.',
      gradient: 'gradient-sunset',
      delay: 0.3,
    },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 gradient-sunset blob opacity-10"
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 gradient-forest rounded-full opacity-15"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Services Section - Asymmetric Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          className="mb-32"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-white/40 px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="w-8 h-8 gradient-ocean rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-700 tracking-wide">
                OUR COMPREHENSIVE SERVICES
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-fredoka font-bold text-neutral-800 mb-6">
              Healthcare That
              <br />
              <span className="text-gradient">Adapts to You</span>
            </h2>
          </motion.div>

          {/* Services Grid - Creative Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Services */}
            <div className="lg:col-span-4 space-y-8">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="relative"
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div
                      className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-fredoka font-bold text-neutral-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Center Visual */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 relative"
            >
              <motion.div
                className="relative w-full h-96 gradient-sky rounded-full overflow-hidden shadow-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart className="w-16 h-16" />
                    </div>
                    <p className="text-xl font-fredoka font-bold">
                      Holistic Healthcare
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 gradient-sunset rounded-3xl shadow-xl flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Right Service */}
            <div className="lg:col-span-4">
              <motion.div variants={itemVariants} className="relative">
                {(() => {
                  const service = services[2];
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
                      whileHover={{
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div
                        className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-fredoka font-bold text-neutral-800 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })()}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About Apollo Section - Curved Layout */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Curved Background */}
          <div className="absolute inset-0 gradient-ocean rounded-[3rem] transform -rotate-1" />

          <div className="relative bg-white/95 backdrop-blur-sm rounded-[3rem] p-12 lg:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">
                      ABOUT APOLLO
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-fredoka font-bold text-neutral-800 mb-6">
                    Rooted in Healing,
                    <br />
                    <span className="text-blue-600">Dedicated to You</span>
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    At Apollo Medical Group, our name reflects our commitment to
                    comprehensive, compassionate care. Inspired by the Greek god
                    of healing, we provide holistic healthcare that nurtures
                    your physical, emotional, and mental well-being.
                  </p>
                  <Button
                    size="lg"
                    className="gradient-ocean text-white hover:opacity-90 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl"
                  >
                    Learn Our Story
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative"
              >
                <div className="relative w-full h-96 gradient-forest rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12" />
                      </div>
                      <p className="text-lg font-semibold">Our Medical Team</p>
                      <p className="text-sm opacity-80">
                        Compassionate Experts
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-sunset rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-fredoka font-bold text-neutral-800">
                        15+
                      </div>
                      <div className="text-sm text-neutral-600">
                        Years Excellence
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 gradient-sky blur-xl opacity-30 rounded-3xl" />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-fredoka font-bold text-neutral-800 mb-6">
                Our Mission
              </h3>
              <p className="text-xl text-neutral-600 leading-relaxed">
                To serve as your trusted partners in health, delivering
                personalized and evidence-based care that empowers you to live
                your healthiest life. We foster a patient-centered environment
                where you feel heard, understood, and supported.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
