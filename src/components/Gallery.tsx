'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical professionals in laboratory',
      title: 'Advanced Laboratory Services',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
      alt: 'Healthcare team consultation',
      title: 'Team Consultation',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical equipment and technology',
      title: 'State-of-the-Art Equipment',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      alt: 'Patient care facility',
      title: 'Patient Care Facilities',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop&crop=center',
      alt: 'Medical research and development',
      title: 'Research & Development',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center',
      alt: 'Healthcare professionals at work',
      title: 'Professional Healthcare Team',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Our Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our state-of-the-art facilities, dedicated healthcare
            professionals, and the advanced medical technology we use to provide
            exceptional care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
