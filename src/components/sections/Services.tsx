'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Stethoscope, Activity } from 'lucide-react';
import Image from 'next/image';

// Helper to open modal from anywhere
function openScheduleModalWithService(serviceTitle: string) {
  window.dispatchEvent(
    new CustomEvent('open-schedule-modal', { detail: { serviceTitle } })
  );
}

const services = [
  {
    icon: Heart,
    title: 'Primary Care',
    duration: '30 min/Visit',
    description:
      'Comprehensive primary care services as your first point of contact for all health needs. Our dedicated team provides personalized care and preventive health management.',
    buttonText: 'Learn More',
  },
  {
    icon: Stethoscope,
    title: 'Specialized Care',
    duration: '45 min/Visit',
    description:
      'Expert specialized medical services with board-certified specialists. Advanced diagnostics and treatment plans tailored to your specific health conditions.',
    buttonText: 'Learn More',
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    duration: '24/7 Available',
    description:
      'Round-the-clock emergency medical services with rapid response times. State-of-the-art emergency facilities staffed by experienced medical professionals.',
    buttonText: 'Learn More',
  },
];

export default function Services() {
  // Carousel state for mobile
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Snap to card on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth || 1;
      const scrollLeft = el.scrollLeft;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="relative py-[clamp(2.5rem,6vw,7rem)] bg-transparent font-serif"
      aria-labelledby="services-heading"
    >
      {/* Decorative Top Images */}
      <div className="absolute left-0 right-0 top-0 -translate-y-1/2 flex justify-center z-0 pointer-events-none select-none w-full">
        <div className="relative w-1/2 h-auto flex justify-end">
          <Image
            src="/2.png"
            alt="Decorative left"
            width={800}
            height={600}
            className="w-full h-auto opacity-60 rotate-180 object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%)]"
            aria-hidden="true"
            priority
          />
        </div>
        <div className="relative w-1/2 h-auto flex justify-start">
          <Image
            src="/2.png"
            alt="Decorative right mirrored"
            width={800}
            height={600}
            className="w-full h-auto opacity-60 scale-x-[-1] rotate-180 object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%)]"
            aria-hidden="true"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-[clamp(1rem,4vw,2.5rem)] relative z-10">
        {/* Spacer for top margin above heading */}
        <div className="h-[clamp(2.5rem,6vw,5rem)]" />
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-[clamp(2rem,5vw,5rem)] text-center"
        >
          <h2
            id="services-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4 tracking-tight font-serif"
            tabIndex={0}
          >
            Our Services
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/80 max-w-2xl mx-auto font-serif">
            Comprehensive healthcare solutions designed around your needs
          </p>
        </motion.header>

        {/* Carousel for mobile, grid for tablet/desktop */}
        <div className="block sm:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            aria-label="Service offerings carousel"
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                tabIndex={0}
                className="group outline-none focus-visible:ring-4 focus-visible:ring-sky-400 rounded-2xl min-w-full max-w-full snap-center flex-shrink-0"
              >
                <Card className="h-full bg-white/95 dark:bg-blue-900/90 shadow-xl border border-blue-200 dark:border-white/10 flex flex-col justify-between p-0 rounded-2xl transition-transform duration-200 group-hover:-translate-y-1 group-focus:-translate-y-1">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 min-w-14 min-h-14 bg-white dark:bg-blue-800 rounded-full flex items-center justify-center shadow-sm border border-red-200 dark:border-white/10">
                        <service.icon
                          className="w-8 h-8 text-red-700 dark:text-sky-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-white leading-tight mb-1 font-serif">
                          {service.title}
                        </h3>
                        <p className="text-xs text-blue-700/80 dark:text-white/70 mb-0 font-serif">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-900 dark:text-white text-sm leading-relaxed mb-6 mt-1 font-serif">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto gap-2">
                      <button
                        className="text-blue-900 dark:text-sky-300 text-sm font-semibold underline underline-offset-2 hover:text-blue-950 dark:hover:text-white transition-colors duration-200 px-0 bg-transparent border-none font-serif focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                        tabIndex={0}
                      >
                        + More
                      </button>
                      <Button
                        className="bg-blue-900 hover:bg-blue-950 focus-visible:ring-2 focus-visible:ring-sky-400 text-white font-bold px-4 py-2 rounded shadow-none ml-auto font-serif transition-colors duration-200"
                        tabIndex={0}
                        onClick={() =>
                          openScheduleModalWithService(service.title)
                        }
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
          {/* Scroll indicators (dots) styled like Testimonials */}
          <nav
            className="flex justify-center items-center gap-2 mt-2"
            aria-label="Services navigation"
          >
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  el.scrollTo({
                    left: idx * el.clientWidth,
                    behavior: 'smooth',
                  });
                }}
                aria-label={`Go to service ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === activeIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </nav>
        </div>

        {/* Grid for tablet/desktop */}
        <section
          aria-label="Service offerings"
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              tabIndex={0}
              className="group outline-none focus-visible:ring-4 focus-visible:ring-sky-400 rounded-2xl"
            >
              <Card className="h-full bg-white/95 dark:bg-blue-900/90 shadow-xl border border-blue-200 dark:border-white/10 flex flex-col justify-between p-0 rounded-2xl transition-transform duration-200 group-hover:-translate-y-1 group-focus:-translate-y-1">
                <CardContent className="p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 min-w-14 min-h-14 bg-white dark:bg-blue-800 rounded-full flex items-center justify-center shadow-sm border border-red-200 dark:border-white/10">
                      <service.icon
                        className="w-8 h-8 text-red-700 dark:text-sky-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white leading-tight mb-1 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-blue-700/80 dark:text-white/70 mb-0 font-serif">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-900 dark:text-white text-sm md:text-base leading-relaxed mb-6 mt-1 font-serif">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto gap-2">
                    <button
                      className="text-blue-900 dark:text-sky-300 text-sm font-semibold underline underline-offset-2 hover:text-blue-950 dark:hover:text-white transition-colors duration-200 px-0 bg-transparent border-none font-serif focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                      tabIndex={0}
                    >
                      + More
                    </button>
                    <Button
                      className="bg-blue-900 hover:bg-blue-950 focus-visible:ring-2 focus-visible:ring-sky-400 text-white font-bold px-4 py-2 rounded shadow-none ml-auto font-serif transition-colors duration-200"
                      tabIndex={0}
                      onClick={() =>
                        openScheduleModalWithService(service.title)
                      }
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </section>
      </div>
    </section>
  );
}
