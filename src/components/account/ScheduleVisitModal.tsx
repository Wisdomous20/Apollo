'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
import { User } from '@/types/account';
import { getAllDoctors } from '@/lib/actions/user-actions';
import { bookAppointment } from '@/lib/actions/appointment-actions';

type FormValues = {
  date: Date | undefined;
  time: string;
  doctor: string;
  serviceType: string;
  description: string;
};

export default function ScheduleVisitModal({
  open,
  onClose,
  userId,
}: {
  open: boolean;
  onClose: () => void;
  userId: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      date: undefined,
      time: '',
      doctor: '',
      serviceType: '',
      description: '',
    },
  });

  const [doctorLists, setDoctorLists] = useState<User[]>();

  // 9am-5pm, 1 hour slots
  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour = 9 + i;
    return `${hour}:00 - ${hour + 1}:00`;
  });

  const serviceTypes = ['Primary Care', 'Specialized Care', 'Emergency Care'];

  useEffect(() => {
    async function fetchDoctors() {
      const doctorsData = await getAllDoctors();
      setDoctorLists(doctorsData);
    }
    fetchDoctors();
  }, []);

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

  const onSubmit = async (data: FormValues) => {
    if (!doctorLists || doctorLists.length === 0) {
      console.error('No doctors available');
      return;
    }
    await bookAppointment({
      dateRequested: data.date ? new Date(data.date) : new Date(),
      timeRequested: data.time,
      serviceType: data.serviceType,
      doctorId: doctorLists.find(d => d.name === data.doctor)?.id ?? '',
      patientId: userId,
      description: data.description,
    })
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

            {isSubmitSuccessful ? (
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
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Date Picker */}
                <label className="font-semibold text-sm sm:text-base">
                  Select Date
                </label>
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      fromDate={new Date()}
                      className="mb-1 border rounded-md w-full"
                    />
                  )}
                />

                {/* Time Select */}
                <label className="font-semibold text-sm sm:text-base">
                  Select Time
                </label>
                <Controller
                  control={control}
                  name="time"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  )}
                />

                {/* Service Type Dropdown */}
                <label className="font-semibold text-sm sm:text-base">
                  Service Type
                </label>
                <Controller
                  control={control}
                  name="serviceType"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="text-base"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {/* Doctor Select */}
                <label className="font-semibold text-sm sm:text-base">
                  Select Doctor
                </label>
                <Controller
                  control={control}
                  name="doctor"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorLists?.map((d) => (
                          <SelectItem
                            key={d.name}
                            value={d.name}
                            className="text-base"
                          >
                            {d.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                <label className="font-semibold text-sm sm:text-base">
                  Description
                </label>
                <Input
                  type="text"
                  placeholder="Brief reason for appointment"
                  className="w-full"
                  {...register('description', { required: true })}
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
