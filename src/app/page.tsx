'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/Footer';
import Payment from '@/components/sections/Payment';
import CombinedSection from '@/components/sections/CombinedSection';
import ContactSection from '@/components/sections/Contact';

export default function ApolloMedical() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-blue-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      {/* <About /> */}
      <CombinedSection />
      <Gallery />
      <Payment />
      <ContactSection />
      <Footer />
    </div>
  );
}
