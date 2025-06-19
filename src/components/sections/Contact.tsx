'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Payment */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
              alt="Credit cards for online payment"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Online Bill Payment
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Easily settle your medical bills online at Apollo Medical Group
              Health Clinic. Enjoy a seamless and secure payment experience.
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PROCEED TO PAYMENT
              </motion.button>
            </Button>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h3 className="text-sm font-semibold text-primary-600 tracking-wider mb-2">
              CONTACT US
            </h3>
            <h4 className="text-3xl font-bold text-foreground mb-4">
              Better yet, see us in person!
            </h4>
            <p className="text-muted-foreground mb-6">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
          </div>

          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1577637748837-5cb8e739b4e2?w=400&h=300&fit=crop&crop=center"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
            <Button
              className="absolute top-4 right-4 bg-neutral-900 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2"
              asChild
            >
              <motion.button whileHover={{ scale: 1.05 }}>
                <MapPin className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </motion.button>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
