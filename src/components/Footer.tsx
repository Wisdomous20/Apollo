'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 gradient-primary-secondary rounded-2xl flex items-center justify-center transform rotate-12">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient-primary">
              APOLLO MEDICAL GROUP
            </h1>
          </div>
        </div>
        <p className="text-neutral-400">
          © 2024 Apollo Medical Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
