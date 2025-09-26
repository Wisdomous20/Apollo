'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Syringe,
  Droplets,
  Microscope,
  Shield,
  Zap,
  Dumbbell,
  Clock,
  Target,
  RefreshCcw,
  Sparkles,
  Martini,
  Leaf,
  Crown,
  Activity,
  Citrus,
  Heart,
  Brain,
  Lightbulb,
} from 'lucide-react';
import Image from 'next/image';
import { ServiceCategoryInfo, SERVICE_CATEGORIES } from '@/types/services';

// Helper to scroll to booking form in hero section
function scrollToBookingForm(serviceTitle: string) {
  // First scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  // Then trigger the booking form with the service pre-selected
  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent('focus-booking-form', { detail: { serviceTitle } })
    );
  }, 800); // Wait for scroll to complete
}

// Icon mapping for service categories
const categoryIcons = {
  INJECTION_THERAPIES: Syringe,
  IV_DRIP_THERAPIES: Droplets,
  ADVANCED_WELLNESS_THERAPIES: Microscope,
};

// Icon mapping for individual services to replace emojis
const serviceIcons: Record<string, React.ComponentType<any>> = {
  '💉': Syringe,
  '🩺': Shield,
  '⚡': Zap,
  '💪': Dumbbell,
  '⏰': Clock,
  '🎯': Target,
  '🔄': RefreshCcw,
  '💧': Droplets,
  '🔬': Microscope,
  '✨': Sparkles,
  '🍸': Martini,
  '🌿': Leaf,
  '👑': Crown,
  '🧬': Activity, // DNA/science-related
  '🍊': Citrus,
  '🩸': Heart, // Blood-related
  '🛡️': Shield,
  '🧠': Brain,
  '💡': Lightbulb,
};

export default function Services() {
  // State for services data
  const [serviceCategories, setServiceCategories] = useState<
    ServiceCategoryInfo[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carousel state for mobile
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch services on component mount
  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        // Use static data from types file
        const categories = SERVICE_CATEGORIES;
        setServiceCategories(categories);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

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
  }, [serviceCategories]);

  // Loading state
  if (loading) {
    return (
      <section className="relative py-[clamp(2.5rem,6vw,7rem)] bg-transparent font-serif">
        <div className="container mx-auto px-[clamp(1rem,4vw,2.5rem)] relative z-10">
          <div className="text-center text-white">
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded mb-4 max-w-md mx-auto"></div>
              <div className="h-4 bg-white/10 rounded max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="relative py-[clamp(2.5rem,6vw,7rem)] bg-transparent font-serif">
        <div className="container mx-auto px-[clamp(1rem,4vw,2.5rem)] relative z-10">
          <div className="text-center text-white">
            <p className="text-red-300">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Uniform ServiceCard component to ensure consistent design across breakpoints
  function ServiceCard({
    category,
    onBook,
  }: {
    category: ServiceCategoryInfo;
    onBook: (title: string) => void;
  }) {
    const IconComponent =
      categoryIcons[category.category as keyof typeof categoryIcons];

    return (
      <article
        className="group outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-2xl"
        tabIndex={0}
      >
        <Card className="h-full bg-white/95 dark:bg-primary/90 shadow-xl border border-primary/20 dark:border-white/10 flex flex-col justify-between p-0 rounded-2xl transition-transform duration-200 group-hover:-translate-y-1 group-focus:-translate-y-1">
          <CardContent className="p-5 md:p-6 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 min-w-14 min-h-14 bg-white dark:bg-primary rounded-full flex items-center justify-center shadow-sm border border-secondary/20 dark:border-white/10">
                <IconComponent
                  className="w-8 h-8 text-secondary dark:text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white leading-tight mb-1 font-serif min-h-[3.5rem] flex items-center justify-end">
                  <span className="text-balance">{category.title}</span>
                </h3>
              </div>
            </div>

            <p className="text-primary dark:text-white text-sm md:text-base leading-relaxed mb-6 mt-1 font-serif min-h-[3rem] flex items-start">
              <span>{category.description}</span>
            </p>

            <div className="mb-6 flex-grow min-h-[12rem]">
              <ul className="text-sm text-primary dark:text-white/90 space-y-2">
                {category.services.slice(0, 6).map((service) => {
                  const ServiceIconComponent =
                    serviceIcons[service.icon || '💉'] || Syringe;
                  return (
                    <li key={service.id} className="flex items-start gap-3">
                      <span className="text-secondary mt-0.5 flex-shrink-0">
                        <ServiceIconComponent className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium block truncate">
                          {service.name}
                        </span>
                        <span className="text-xs text-foreground block">
                          {service.duration}
                        </span>
                      </div>
                    </li>
                  );
                })}
                {category.services.length > 6 && (
                  <li className="text-secondary/70 text-sm italic">
                    +{category.services.length - 6} more services available
                  </li>
                )}
              </ul>
            </div>

            <div className="flex items-center justify-end mt-auto gap-2">
              <Button
                className="bg-primary hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary text-white font-bold px-4 py-2 rounded shadow-none ml-auto font-serif transition-colors duration-200"
                tabIndex={0}
                onClick={() => onBook(category.title)}
              >
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    );
  }

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
            Apollo Medical Group – Wellness & Anti-Aging Services
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/80 max-w-3xl mx-auto font-serif">
            Comprehensive wellness and anti-aging solutions designed for optimal
            health and vitality
          </p>
        </motion.header>

        {/* Carousel for mobile */}
        <div className="block sm:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            aria-label="Service categories carousel"
          >
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="min-w-full max-w-full snap-center flex-shrink-0"
              >
                <ServiceCard category={category} onBook={scrollToBookingForm} />
              </div>
            ))}
          </div>
          <nav
            className="flex justify-center items-center gap-2 mt-2"
            aria-label="Services navigation"
          >
            {serviceCategories.map((_, idx) => (
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
                aria-label={`Go to service category ${idx + 1}`}
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
          aria-label="Service categories"
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <ServiceCard
              key={index}
              category={category}
              onBook={scrollToBookingForm}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
