'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

export function BackgroundWrapper({
  children,
  className = '',
}: BackgroundWrapperProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Base marble gradient background using CSS variables */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-slate-900" />

      {/* Marble texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-gradient-to-br from-transparent via-primary/30 to-transparent"
          style={{
            backgroundImage: `
                 radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 40%),
                 radial-gradient(circle at 40% 80%, rgba(255,255,255,0.08) 0%, transparent 60%)
               `,
          }}
        />
      </div>

      {/* Large architectural SVG shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        {/* Top Greek column-inspired border */}
        <motion.path
          d="M0,100 Q250,80 500,100 T1000,100 L1000,0 L0,0 Z"
          fill="url(#marbleGradient1)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Mid-section wave divider */}
        <motion.path
          d="M0,400 Q200,350 400,400 T800,400 Q900,420 1000,400 L1000,600 Q900,580 800,600 T400,600 Q200,650 0,600 Z"
          fill="url(#marbleGradient2)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
        />

        {/* Bottom architectural foundation */}
        <motion.path
          d="M0,800 Q166,780 333,800 T666,800 Q833,820 1000,800 L1000,1000 L0,1000 Z"
          fill="url(#marbleGradient3)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
        />

        {/* Greek geometric border pattern */}
        <motion.rect
          x="0"
          y="0"
          width="1000"
          height="20"
          fill="url(#geometricPattern)"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />

        <motion.rect
          x="0"
          y="980"
          width="1000"
          height="20"
          fill="url(#geometricPattern)"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />

        {/* Gradient definitions using CSS variables */}
        <defs>
          <linearGradient
            id="marbleGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.2)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
          </linearGradient>

          <linearGradient
            id="marbleGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.15)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
          </linearGradient>

          <linearGradient
            id="marbleGradient3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.2)" />
          </linearGradient>

          <pattern
            id="geometricPattern"
            x="0"
            y="0"
            width="100"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="20"
              fill="hsl(var(--primary) / 0.1)"
            />
            <rect
              x="10"
              y="5"
              width="15"
              height="10"
              fill="hsl(var(--primary) / 0.3)"
            />
            <rect
              x="35"
              y="5"
              width="15"
              height="10"
              fill="hsl(var(--primary) / 0.3)"
            />
            <rect
              x="60"
              y="5"
              width="15"
              height="10"
              fill="hsl(var(--primary) / 0.3)"
            />
            <rect
              x="85"
              y="5"
              width="15"
              height="10"
              fill="hsl(var(--primary) / 0.3)"
            />
          </pattern>
        </defs>
      </svg>

      {/* Floating architectural elements */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[clamp(12rem,20vw,20rem)] h-[clamp(12rem,20vw,20rem)] opacity-10"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full border border-primary/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            background: `linear-gradient(45deg, transparent, hsl(var(--primary) / 0.1), transparent)`,
          }}
        />
      </motion.div>

      {/* Content container with proper z-index */}
      <div className="relative z-10 w-full h-auto">{children}</div>

      {/* Bottom architectural fade */}
      <div className="absolute bottom-0 left-0 w-full h-[clamp(4rem,8vw,8rem)] bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
}

// Updated CombinedSection component
import Services from './Services';
import Testimonials from './Testimonials';

export default function CombinedSection() {
  return (
    <BackgroundWrapper className="font-serif">
      <div className="space-y-0">
        <Services />
        <Testimonials />
      </div>
    </BackgroundWrapper>
  );
}
