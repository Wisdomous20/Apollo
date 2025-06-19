'use client';

import Navigation from '@/components/Navigation';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
