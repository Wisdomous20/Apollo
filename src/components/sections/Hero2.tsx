'use client';

import { useState } from 'react';
import { BookingForm } from './BookingForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Pill,
  Stethoscope,
  UserCheck,
  Heart,
} from 'lucide-react';
import Image from 'next/image';

export function MedicalHeroSection() {
  const [selectedDate, setSelectedDate] = useState('2025-07-29');
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [doctor, setDoctor] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section className="relative min-h-screen overflow-hidden font-fredoka">
      {/* Background: clouds image gradienting to blue */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="w-full h-full absolute inset-0">
          <Image
            src="/clouds.jpg"
            alt="Clouds background"
            fill
            className="object-cover object-center blur-md"
            priority
            quality={90}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, transparent 20%, hsl(var(--background)) 80%, hsl(var(--background)) 100%)',
            }}
          />
        </div>
      </div>

      {/* Pillars removed as requested */}
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left Side - Medical Professionals Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="/APOLLO.png"
                alt="Two medical professionals - a Black woman and white man with glasses, both in white coats"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-foreground space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4 text-center">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight font-greek text-[hsl(var(--foreground))]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                WHERE HEALING
                <br />
                <span
                  className="text-secondary"
                  style={{
                    fontFamily: "'GFS Neohellenic', serif",
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                  }}
                >
                  BEGINS
                </span>
              </h1>
              <p
                className="text-base sm:text-lg lg:text-xl text-[hsl(var(--foreground))] max-w-xl mx-auto font-greek"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                At Apollo Medical Group, we blend trusted care with modern
                treatments to guide you on your path to
                <span
                  className="text-secondary font-bold font-greek"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {' '}
                  wellness.
                </span>
              </p>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 py-6 justify-items-center">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(var(--primary))]/20 flex items-center justify-center backdrop-blur-sm border-2 border-[hsl(var(--primary))]">
                  <Pill className="w-6 h-6 sm:w-7 sm:h-7 text-[hsl(var(--secondary))]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-primary">
                  <span className="text-[hsl(var(--foreground))]">
                    Primary
                    <br />
                    Care
                  </span>
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(var(--primary))]/20 flex items-center justify-center backdrop-blur-sm border-2 border-[hsl(var(--primary))]">
                  <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-[hsl(var(--secondary))]" />
                </div>
                <span className="text-[hsl(var(--foreground))] text-xs sm:text-sm font-medium">
                  Specialized
                  <br />
                  Care
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(var(--primary))]/20 flex items-center justify-center backdrop-blur-sm border-2 border-[hsl(var(--primary))]">
                  <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[hsl(var(--secondary))]" />
                </div>
                <span className="text-[hsl(var(--foreground))] text-xs sm:text-sm font-medium">
                  Emergency
                  <br />
                  Care
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Booking Form - Positioned Absolutely */}
        {/* Overlapping Booking Form - Component */}
        <BookingForm />
      </div>
    </section>
  );
}
