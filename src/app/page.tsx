'use client';

import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import { usePerformance } from '@/hooks/usePerformance';

// Lazy load non-critical components
const About = lazy(() => import('@/components/sections/About'));
const Services = lazy(() => import('@/components/sections/Services'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
function SectionSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ApolloMedical() {
  const { isSlowDevice } = usePerformance();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div className="py-12 bg-neutral-800"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
