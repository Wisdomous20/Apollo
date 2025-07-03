'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Heart,
  Users,
  Sparkles,
  Shield,
  Brain,
  Stethoscope,
} from 'lucide-react';

export default function AboutSection() {
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Primary Care',
      description:
        'From preventive screenings to chronic disease management, our experienced primary care providers are dedicated to keeping you healthy and addressing any concerns that arise.',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Psychological and Mental Health',
      description:
        'Our compassionate mental health professionals offer a safe and supportive space to address a wide range of mental health challenges, promoting emotional well-being and resilience.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Aesthetic Services',
      description:
        'Enhance your natural beauty and boost your confidence with our selection of aesthetic treatments, administered by skilled practitioners who prioritize your safety and satisfaction.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern SVG */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="about-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <rect width="120" height="120" fill="none" />
              <path
                d="M20 20h80v80h-80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40 40h40v40h-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="60"
                cy="60"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M20 60h20M80 60h20M60 20v20M60 80v20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#about-pattern)"
            className="text-slate-600"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] font-serif mb-4">
            About Us
          </p>
        </motion.div>

        {/* Main Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex items-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative w-full">
                {/* Image Background Pattern */}
                <div className="absolute inset-0 opacity-3">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="hero-pattern"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="60" height="60" fill="none" />
                        <path
                          d="M0 30h60M30 0v60"
                          stroke="currentColor"
                          strokeWidth="0.3"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#hero-pattern)"
                      className="text-slate-400"
                    />
                  </svg>
                </div>

                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=640&q=80"
                    alt="Hospital corridor with medical staff"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex items-center">
              <div className="w-full space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-serif leading-[1.1] mb-6">
                    Rooted in Healing, Dedicated to Your Well-being
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-serif mb-8">
                    At Apollo Medical Group, our name is more than just a title;
                    it's a reflection of our commitment to providing
                    comprehensive and compassionate primary care.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-serif">
                    Inspired by the Greek god of healing and medicine, we strive
                    to embody his legacy by offering a holistic approach to
                    healthcare that focuses on your physical, emotional, and
                    mental well-being.
                  </p>
                </div>

                {/* <div className="flex items-center space-x-3 text-blue-600 bg-blue-50 rounded-lg p-4">
                  <Heart className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold font-serif text-lg">
                    Compassionate Care Since Day One
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex items-center lg:order-1">
              <div className="w-full space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-[1.1] mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-serif mb-8">
                    To serve as your trusted partners in health, delivering
                    personalized and evidence-based care that empowers you to
                    live your healthiest life.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-serif">
                    We aim to foster a patient-centered environment where you
                    feel heard, understood, and supported on your wellness
                    journey.
                  </p>
                </div>

                {/* <div className="flex items-center space-x-3 text-green-600 bg-green-50 rounded-lg p-4">
                  <Users className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold font-serif text-lg">
                    Your Trusted Health Partners
                  </span>
                </div> */}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 flex items-center lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative w-full">
                {/* Mission Background Pattern */}
                <div className="absolute inset-0 opacity-3">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="mission-pattern"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="80" height="80" fill="none" />
                        <circle
                          cx="40"
                          cy="40"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.3"
                          opacity="0.3"
                        />
                        <path
                          d="M20 40h40M40 20v40"
                          stroke="currentColor"
                          strokeWidth="0.2"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#mission-pattern)"
                      className="text-green-400"
                    />
                  </svg>
                </div>

                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&w=640&q=80"
                    alt="Hospital team consultation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex items-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative w-full">
                {/* Services Background Pattern */}
                <div className="absolute inset-0 opacity-3">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="services-pattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="40" height="40" fill="none" />
                        <path
                          d="M0 20h40"
                          stroke="currentColor"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M10 10h20v20h-20z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.2"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#services-pattern)"
                      className="text-amber-400"
                    />
                  </svg>
                </div>

                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=640&q=80"
                    alt="Hospital equipment and stethoscope"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex items-center">
              <div className="w-full space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-[1.1] mb-8">
                    Our Services
                  </h2>
                </div>

                <div className="space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 relative overflow-hidden"
                    >
                      {/* Service Card Background Pattern */}
                      <div className="absolute top-0 right-0 opacity-5">
                        <svg
                          width="120"
                          height="120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern
                              id={`service-pattern-${index}`}
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                              patternUnits="userSpaceOnUse"
                            >
                              <rect width="20" height="20" fill="none" />
                              <circle
                                cx="10"
                                cy="10"
                                r="3"
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill={`url(#service-pattern-${index})`}
                            className="text-slate-400"
                          />
                        </svg>
                      </div>

                      <div className="flex items-start space-x-6 relative">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                            {service.title}
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed font-serif">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center space-x-6 text-slate-400">
            <div className="w-16 h-px bg-slate-300"></div>
            <Shield className="w-8 h-8" />
            <div className="w-16 h-px bg-slate-300"></div>
          </div>
          <p className="mt-6 text-lg text-slate-500 font-serif">
            Committed to Excellence in Healthcare
          </p>
        </motion.div>
      </div>
    </section>
  );
}
