'use client';
import { useState, useEffect } from 'react';
import type React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, UserCheck, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingForm() {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    doctor: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form data with default values
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData({
      selectedDate: tomorrow.toISOString().split('T')[0],
      selectedTime: '09:00',
      doctor: '',
      phone: '',
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Appointment request submitted successfully!');
      // Reset form
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData({
        selectedDate: tomorrow.toISOString().split('T')[0],
        selectedTime: '09:00',
        doctor: '',
        phone: '',
      });
    } catch (error) {
      alert('Failed to submit appointment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.0,
      },
    },
  } as const;

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  } as const;

  return (
    <>
      <motion.div
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-20 max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-card/100 backdrop-blur-md p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl rounded-lg border border-border/30"
          style={{ fontFamily: "'Cinzel', serif" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {/* Mobile Layout (sm and below) */}
          <div className="flex flex-col gap-3 sm:hidden">
            {/* Row 1: Date and Time */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Date
                </label>
                <Input
                  type="date"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleInputChange}
                  className="bg-input border-border text-xs h-9"
                  style={{ fontFamily: "'Cinzel', serif" }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Time
                </label>
                <select
                  name="selectedTime"
                  value={formData.selectedTime}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-2 py-2 w-full focus:outline-none text-xs h-9"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </motion.div>
            </div>

            {/* Row 2: Doctor */}
            <motion.div className="space-y-2" variants={fieldVariants}>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <UserCheck className="w-3 h-3" />
                Doctor Name
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-2 py-2 w-full focus:outline-none text-xs h-9"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <option value="">Select a doctor</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</option>
                <option value="Dr. David Thompson">Dr. David Thompson</option>
                <option value="Dr. Lisa Park">Dr. Lisa Park</option>
              </select>
            </motion.div>

            {/* Row 3: Phone */}
            <motion.div className="space-y-2" variants={fieldVariants}>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" />
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-input border-border text-xs h-9"
                style={{ fontFamily: "'Cinzel', serif" }}
              />
            </motion.div>

            {/* Row 4: Button */}
            <motion.div
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium w-full h-10 text-sm"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Book Appointment
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Tablet Layout (sm to lg) */}
          <div className="hidden sm:flex lg:hidden flex-col gap-4">
            {/* Row 1: Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date
                </label>
                <Input
                  type="date"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                  style={{ fontFamily: "'Cinzel', serif" }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Time
                </label>
                <select
                  name="selectedTime"
                  value={formData.selectedTime}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </motion.div>
            </div>

            {/* Row 2: Doctor and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Doctor Name
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="">Select a doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Rodriguez">
                    Dr. Emily Rodriguez
                  </option>
                  <option value="Dr. David Thompson">Dr. David Thompson</option>
                  <option value="Dr. Lisa Park">Dr. Lisa Park</option>
                </select>
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-input border-border"
                  style={{ fontFamily: "'Cinzel', serif" }}
                />
              </motion.div>
            </div>

            {/* Row 3: Button */}
            <motion.div
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium w-full h-[42px]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Book Appointment
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Desktop Layout (lg and above) - Original Layout Preserved */}
          <div className="hidden lg:flex flex-col gap-3 sm:gap-4 items-end w-full lg:flex-row">
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <Input
                type="date"
                name="selectedDate"
                value={formData.selectedDate}
                onChange={handleInputChange}
                className="bg-input border-border"
                style={{ fontFamily: "'Cinzel', serif" }}
                min={new Date().toISOString().split('T')[0]}
              />
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Time
              </label>
              <select
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <option value="08:00">8:00 AM</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Doctor Name
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <option value="">Select a doctor</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</option>
                <option value="Dr. David Thompson">Dr. David Thompson</option>
                <option value="Dr. Lisa Park">Dr. Lisa Park</option>
              </select>
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-input border-border"
                style={{ fontFamily: "'Cinzel', serif" }}
              />
            </motion.div>
            <motion.div
              className="space-y-2 flex flex-col justify-end h-full w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium whitespace-nowrap w-full h-[42px]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Book Appointment
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
