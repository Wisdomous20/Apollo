'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Award,
  Shield,
  CheckCircle,
  TrendingUp,
  Building,
  Users,
  Clock,
  Heart,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    description: 'Regular Patient',
    content:
      "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my entire visit. I couldn't be happier with the service and would highly recommend this practice to anyone looking for quality healthcare.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    description: 'Family Patient',
    content:
      'Outstanding medical care for our entire family. The doctors take time to listen and explain everything clearly. The facility is modern and clean, and the appointment scheduling is very convenient. Truly a five-star healthcare experience.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    description: 'New Patient',
    content:
      'From scheduling to treatment, everything was seamless. The medical team is knowledgeable and compassionate. Highly recommend this practice to anyone seeking quality care.',
    rating: 5,
  },
];

const metrics = [
  { label: 'Patient Satisfaction', value: 98, suffix: '%', icon: Heart },
  { label: 'Treatment Success Rate', value: 96, suffix: '%', icon: TrendingUp },
  { label: 'On-Time Appointments', value: 99, suffix: '%', icon: Clock },
  { label: 'Patient Retention', value: 94, suffix: '%', icon: Users },
];

const awards = [
  'Healthcare Excellence Award 2024',
  'Patient Safety Recognition',
  'Innovation in Medical Care',
  'Community Health Champion',
];

const certifications = [
  'HIPAA Compliant',
  'Joint Commission Accredited',
  'Medicare Certified',
  'State Licensed',
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animatedMetrics, setAnimatedMetrics] = useState(
    metrics.map((metric) => ({ ...metric, displayValue: 0 }))
  );

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics(
        metrics.map((metric) => ({
          ...metric,
          displayValue: metric.value,
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative z-10 py-[clamp(3rem,8vw,8rem)] bg-transparent overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Mirrored Images at Bottom */}
      <div className="absolute left-0 right-0 top-full -translate-y-1/2 flex justify-center z-0 pointer-events-none select-none w-full">
        <div className="relative w-1/2 h-auto flex justify-end">
          <Image
            src="/2.png"
            alt="Decorative left mirrored"
            width={800}
            height={600}
            className="w-full h-auto opacity-60 scale-x-[-1] object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%)]"
            aria-hidden="true"
            priority
          />
        </div>
        <div className="relative w-1/2 h-auto flex justify-start">
          <Image
            src="/2.png"
            alt="Decorative right"
            width={800}
            height={600}
            className="w-full h-auto opacity-60 object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%)]"
            aria-hidden="true"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-[clamp(1rem,4vw,2.5rem)] lg:px-[clamp(2rem,6vw,4rem)] relative z-10 pb-[clamp(7rem,14vw,14rem)]">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-[clamp(2rem,5vw,5rem)] text-center"
        >
          <h2
            id="testimonials-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4 tracking-tight font-serif"
            tabIndex={0}
          >
            Patient Stories
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/80 max-w-2xl mx-auto font-serif">
            Real experiences from our patients and the excellence behind our
            care
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Testimonials Section */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center font-serif">
                What Our Patients Say
              </h3>
              <section aria-label="Testimonials carousel" className="relative">
                <motion.article
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-[480px] relative"
                  tabIndex={0}
                  aria-label={`Testimonial from ${currentTestimonial.name}`}
                  ref={cardRef}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <Card className="bg-white shadow-lg h-full rounded-2xl relative overflow-hidden group">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevTestimonial}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 p-0 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 text-slate-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextTestimonial}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 p-0 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-600" />
                    </Button>
                    <CardContent className="p-8 text-center flex flex-col justify-center h-full space-y-6 font-serif">
                      <Quote
                        className="w-12 h-12 text-blue-600 mx-auto"
                        aria-hidden="true"
                      />
                      <div
                        className="flex justify-center space-x-1"
                        aria-label={`Rating: ${currentTestimonial.rating} out of 5`}
                      >
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-blue-400 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg text-slate-700 leading-relaxed italic max-w-lg mx-auto flex-1 flex items-center font-serif">
                        <span>&quot;{currentTestimonial.content}&quot;</span>
                      </blockquote>
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-lg font-serif">
                            {currentTestimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 font-serif">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-slate-500 font-serif">
                            {currentTestimonial.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
                <nav
                  className="flex justify-center items-center gap-2 mt-6"
                  aria-label="Testimonials navigation"
                >
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </nav>
              </section>
            </motion.div>
          </div>

          {/* Supporting Content - Multiple Cards */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center font-serif">
                Excellence & Trust
              </h3>

              <div className="space-y-4 h-[480px] flex flex-col">
                {/* Awards Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full border-t-4 border-t-blue-500">
                    <CardContent className="p-4 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800 font-serif">
                          Recent Awards
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {awards.slice(0, 2).map((award, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-2 bg-blue-50 rounded-lg"
                          >
                            <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-700 leading-tight font-serif">
                              {award}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Certifications Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full border-b-4 border-b-blue-500">
                    <CardContent className="p-4 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800 font-serif">
                          Certifications
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 p-2 bg-blue-50 rounded-lg"
                          >
                            <Building className="w-3 h-3 text-blue-500 flex-shrink-0" />
                            <span className="text-xs text-slate-700 leading-tight font-serif">
                              {cert}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Matching Pagination Space */}
              <div className="h-6 mt-6"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
