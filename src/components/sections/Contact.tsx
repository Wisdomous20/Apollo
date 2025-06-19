'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="py-20 bg-muted">
      <div className="grid gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Payment */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-64 overflow-hidden shadow-lg rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
              alt="Credit cards for online payment"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-bold text-foreground">
              Online Bill Payment
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Easily settle your medical bills online at Apollo Medical Group
              Health Clinic. Enjoy a seamless and secure payment experience.
            </p>
            <Button
              variant="medical"
              size="lg"
              className="transition-all duration-300 shadow-lg hover:shadow-xl"
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
            <h3 className="mb-2 text-sm font-semibold tracking-wider text-primary">
              CONTACT US
            </h3>
            <h4 className="mb-4 text-3xl font-bold text-foreground">
              Better yet, see us in person!
            </h4>
            <p className="mb-6 text-muted-foreground">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
          </div>

          <div className="relative w-full h-64 overflow-hidden shadow-lg rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1577637748837-5cb8e739b4e2?w=400&h=300&fit=crop&crop=center"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
            <Button
              className="absolute flex items-center px-4 py-2 space-x-2 font-semibold text-white top-4 right-4 bg-neutral-900 rounded-xl"
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
