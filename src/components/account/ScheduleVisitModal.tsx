'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScheduleVisitModal({
  open,
  onClose,
  services,
  preselectedService,
}: {
  open: boolean;
  onClose: () => void;
  services: { title: string }[];
  preselectedService?: string;
}) {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Set service if preselectedService changes and modal is open
  useEffect(() => {
    if (open && preselectedService) {
      setService(preselectedService);
    } else if (open && !preselectedService) {
      setService('');
    }
  }, [open, preselectedService]);

  // 9am-5pm, 1 hour slots
  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour = 9 + i;
    return `${hour}:00 - ${hour + 1}:00`;
  });

  // Trap focus inside modal
  useEffect(() => {
    if (!open) return;
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!focusable || focusable.length === 0) return;
      if (e.key === 'Tab') {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <motion.div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md mx-2 sm:mx-0 relative flex flex-col max-h-[90vh] overflow-y-auto"
            initial={{ y: 60, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.98, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 28,
              duration: 0.32,
            }}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-full transition-colors duration-150"
              onClick={onClose}
              aria-label="Close"
              tabIndex={0}
              type="button"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 sm:mb-4 text-center text-blue-900">
              Schedule Your Visit
            </h2>
            {submitted ? (
              <motion.div
                className="text-green-600 text-center py-12 font-semibold text-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Appointment scheduled!
              </motion.div>
            ) : (
              <form
                className="flex flex-col gap-3 sm:gap-4 w-full"
                onSubmit={handleSubmit}
              >
                <label className="font-semibold text-sm sm:text-base">
                  Select Date
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  required
                  fromDate={new Date()}
                  className="mb-1 border rounded-md w-full"
                />
                <label className="font-semibold text-sm sm:text-base">
                  Select Time
                </label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot} className="text-base">
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <label className="font-semibold text-sm sm:text-base">
                  Service Type
                </label>
                <Select
                  key={service}
                  value={service}
                  onValueChange={setService}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem
                        key={s.title}
                        value={s.title}
                        className="text-base"
                      >
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <label className="font-semibold text-sm sm:text-base">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="w-full"
                />
                <label className="font-semibold text-sm sm:text-base">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                  className="w-full"
                />
                <Button
                  type="submit"
                  className="mt-2 bg-blue-900 text-white hover:bg-blue-950 transition-all duration-150 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-400"
                  size="lg"
                >
                  Book Appointment
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
