'use client';

import Navigation from '@/components/Navigation';
import About from '@/components/sections/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
}
