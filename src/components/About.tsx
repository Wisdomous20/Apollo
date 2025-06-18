'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* First section - Our Services */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&crop=center"
                alt="Medical professional with stethoscope and clipboard"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Primary Care:
                </h3>
                <p>
                  From preventive screenings to chronic disease management, our
                  experienced primary care providers are dedicated to keeping
                  you healthy and addressing any concerns that arise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Psychiatric and Mental Health:
                </h3>
                <p>
                  Our compassionate mental health professionals offer a safe and
                  supportive space to address a wide range of mental health
                  challenges, promoting emotional well-being and resilience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Aesthetic Services:
                </h3>
                <p>
                  Enhance your natural beauty and boost your confidence with our
                  selection of aesthetic treatments, administered by skilled
                  practitioners who prioritize your safety and satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second section - About Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="text-sm text-muted-foreground tracking-wider uppercase">
              About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Rooted in Healing, Dedicated to Your Well-being
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Apollo Medical Group, our name is more than just a title; it's
              a reflection of our commitment to providing comprehensive and
              compassionate primary care. Inspired by the Greek god of healing
              and medicine, we strive to embody his legacy by offering a
              holistic approach to healthcare that focuses on your physical,
              emotional, and mental well-being.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center"
                alt="Medical professionals in hospital corridor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Third section - Our Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To serve as your trusted partners in health, delivering
              personalized and evidence-based care that empowers you to live
              your healthiest life. We aim to foster a patient-centered
              environment where you feel heard, understood, and supported on
              your wellness journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
                alt="Medical team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
