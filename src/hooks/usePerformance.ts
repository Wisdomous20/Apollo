'use client';

import { useEffect, useState } from 'react';

export function usePerformance() {
  const [isSlowDevice, setIsSlowDevice] = useState(false);

  useEffect(() => {
    // Check device performance capabilities
    const checkPerformance = () => {
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 1;
      // Check memory (if available)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const memory = (navigator as any).deviceMemory || 4;

      // Simple performance test
      const start = performance.now();
      for (let i = 0; i < 100000; i++) {
        Math.random();
      }
      const duration = performance.now() - start;

      // Determine if device is slow
      const isSlow = cores < 4 || memory < 4 || duration > 10;
      setIsSlowDevice(isSlow);
    };

    checkPerformance();
  }, []);

  return { isSlowDevice };
}
