'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Brain, Sparkles, Calendar, Clock, Phone } from 'lucide-react';
import { useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Services() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: '-10% 0px -10% 0px', // Optimize trigger point
  });

  // Memoize services data to prevent re-renders
  const services = useMemo(
    () => [
      {
        icon: Heart,
        title: 'Primary Care',
        duration: '30-60 mins',
        price: 'Insurance Accepted',
        description:
          'Comprehensive primary care services including preventive screenings, chronic disease management, and routine health maintenance. Our experienced physicians are dedicated to keeping you healthy.',
        features: [
          'Annual Physicals',
          'Chronic Care Management',
          'Preventive Screenings',
          'Health Education',
        ],
        gradient: 'bg-gradient-medical',
      },
      {
        icon: Brain,
        title: 'Mental Health',
        duration: '45-60 mins',
        price: 'Various Options',
        description:
          'Professional mental health services in a safe, confidential environment. Our compassionate specialists address anxiety, depression, and other mental health concerns.',
        features: [
          'Individual Therapy',
          'Anxiety Treatment',
          'Depression Care',
          'Stress Management',
        ],
        gradient: 'bg-gradient-health',
      },
      {
        icon: Sparkles,
        title: 'Aesthetic Services',
        duration: '30-90 mins',
        price: 'Consultation Required',
        description:
          'Medically supervised aesthetic treatments designed to enhance your natural beauty and boost confidence. Safe, effective procedures by skilled practitioners.',
        features: [
          'Skin Rejuvenation',
          'Anti-Aging Treatments',
          'Cosmetic Procedures',
          'Beauty Consultations',
        ],
        gradient: 'bg-gradient-trust',
      },
    ],
    []
  );

  // Optimize animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        duration: 0.6, // Reduced from 0.8
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced from y: 50
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-16 bg-white lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }} // Reduced from y: 30
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} // Reduced from 0.8
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium rounded-full bg-medical-50 text-medical-700">
            <Calendar className="w-4 h-4" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-800">
            Comprehensive Healthcare Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed sm:text-xl text-slate-600">
            Experience personalized care across our full range of medical
            services, designed to support your health and well-being.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -4, // Reduced from -8
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="h-full p-6 border-0 shadow-lg group hover:shadow-2xl">
                <CardHeader className="p-0 mb-6">
                  <div
                    className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold text-slate-800">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <CardDescription className="font-semibold text-medical-600">
                      {service.price}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-0 mb-6 space-y-4">
                  <p className="leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-800">
                      Key Services:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-medical-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 p-0 sm:flex-row">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    LEARN MORE
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 text-xs font-semibold"
                  >
                    BOOK APPOINTMENT
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-4xl p-8 mx-auto bg-slate-50 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-slate-800">
              Need Help Choosing the Right Service?
            </h3>
            <p className="mb-6 leading-relaxed text-slate-600">
              Our care coordinators are here to help you find the best treatment
              option for your specific needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="medical" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                CALL (702) 444-7744
              </Button>
              <Button variant="outline" size="lg">
                REQUEST CONSULTATION
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
