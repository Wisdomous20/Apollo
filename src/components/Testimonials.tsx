'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-20 bg-cover bg-center" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hear from Our Happy Patients
        </motion.h2>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl">Reviews coming soon!</p>
        </motion.div>
      </div>
    </section>
  );
}
