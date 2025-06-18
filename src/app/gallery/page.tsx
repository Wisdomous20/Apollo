'use client';

import Navigation from '@/components/Navigation';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
