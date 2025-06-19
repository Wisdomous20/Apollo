'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Contact() {
  // Random medical facility address for demonstration
  const clinicAddress = '1234 Medical Center Dr, Las Vegas, NV 89102';
  const encodedAddress = encodeURIComponent(clinicAddress);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const handleGetDirections = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

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
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Our Location:
              </p>
              <p className="text-muted-foreground">{clinicAddress}</p>
            </div>
          </div>

          <div className="relative w-full h-64 overflow-hidden shadow-lg rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`Interactive map design showing Apollo Medical Group location at ${clinicAddress}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
            <div className="absolute inset-0 bg-blue-500/10" />
            <Button
              className="absolute flex items-center px-4 py-2 space-x-2 font-semibold text-white transition-colors top-4 right-4 bg-neutral-900 rounded-xl hover:bg-neutral-800"
              onClick={handleGetDirections}
              aria-label={`Get directions to Apollo Medical Group at ${clinicAddress}`}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
