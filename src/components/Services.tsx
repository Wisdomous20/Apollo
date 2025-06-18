'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Brain, Sparkles } from 'lucide-react';
import { useRef } from 'react';
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
  const servicesInView = useInView(servicesRef, { once: true });

  const services = [
    {
      icon: Heart,
      title: 'Primary Care',
      duration: '30 mins | Varies',
      description:
        'At the heart of our comprehensive care model is primary care - your first point of contact for all your health needs. Our dedicated primary care physicians...',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Behavioral Health',
      duration: '30 mins | Varies',
      description:
        'Our Behavioral Health services provide a safe, compassionate, and confidential space for individuals seeking support and healing for a wide range of mental health concerns...',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Sparkles,
      title: 'Beauty and Wellness',
      duration: '30 mins | Varies',
      description:
        'Our Aesthetic Services offer a range of medically supervised treatments designed to enhance your natural beauty, address aesthetic concerns, and boost your confidence...',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-20 bg-gradient-to-br from-primary-50 to-primary-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Online Appointments
          </h2>
          <p className="text-xl text-gray-600">
            Book your visit with our specialized care teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border-0">
                <CardHeader className="p-0 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-primary-600 font-semibold text-base">
                    {service.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>

                <CardFooter className="p-0 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className="text-primary-600 font-semibold hover:text-primary-700 p-0"
                  >
                    + More
                  </Button>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-neutral-900 text-white px-6 py-2 rounded-xl font-semibold hover:bg-neutral-800">
                      BOOK
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
