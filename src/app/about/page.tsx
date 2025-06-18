'use client';

import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
}
