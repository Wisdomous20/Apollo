'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-8 border-t border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center space-y-2"
          >
            <Image
              src="/logo.png"
              alt="Apollo Medical Group Logo"
              width={64}
              height={64}
              className="w-16 h-16 mb-2"
              priority
            />
            <h3 className="text-2xl font-serif font-bold text-gray-900 text-center">
              Apollo <span className="text-red-600">Medical Group</span>
            </h3>
            <p className="text-xs text-blue-600 font-serif font-medium tracking-wide text-center">
              WHERE HEALING BEGINS
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-100"
        >
          <p className="text-sm text-gray-500">
            Copyright © 2025 WisdomousTech - All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
