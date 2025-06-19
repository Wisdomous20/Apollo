'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-20 bg-cover bg-center" />

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <motion.h2
          className="mb-8 text-4xl font-bold lg:text-5xl text-gradient-vibrant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hear from Our Happy Patients
        </motion.h2>

        <motion.div
          className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl"
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
