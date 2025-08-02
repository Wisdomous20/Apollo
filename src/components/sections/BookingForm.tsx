'use client';
import { useState, useEffect } from 'react';
import type React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, UserCheck, Phone, Heart, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Service and pricing data
const services = [
  { id: 'primary-care', name: 'Primary Care', icon: '🩺' },
  { id: 'specialized-care', name: 'Specialized Care', icon: '⚕️' },
  { id: 'emergency-care', name: 'Emergency Care', icon: '🚨' },
  { id: 'consultation', name: 'Consultation', icon: '💬' },
  { id: 'check-up', name: 'Health Check-up', icon: '🔍' },
];

const doctors = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Practice',
  },
  { id: 'dr-michael-chen', name: 'Dr. Michael Chen', specialty: 'Cardiology' },
  {
    id: 'dr-emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
  },
  {
    id: 'dr-david-thompson',
    name: 'Dr. David Thompson',
    specialty: 'Emergency Medicine',
  },
  { id: 'dr-lisa-park', name: 'Dr. Lisa Park', specialty: 'Internal Medicine' },
];

// Pricing matrix based on doctor and service combination
const pricingMatrix: Record<string, Record<string, number>> = {
  'dr-sarah-johnson': {
    'primary-care': 150,
    'specialized-care': 250,
    'emergency-care': 300,
    consultation: 100,
    'check-up': 120,
  },
  'dr-michael-chen': {
    'primary-care': 180,
    'specialized-care': 350,
    'emergency-care': 400,
    consultation: 150,
    'check-up': 200,
  },
  'dr-emily-rodriguez': {
    'primary-care': 160,
    'specialized-care': 280,
    'emergency-care': 350,
    consultation: 120,
    'check-up': 140,
  },
  'dr-david-thompson': {
    'primary-care': 200,
    'specialized-care': 300,
    'emergency-care': 250,
    consultation: 180,
    'check-up': 220,
  },
  'dr-lisa-park': {
    'primary-care': 170,
    'specialized-care': 320,
    'emergency-care': 380,
    consultation: 130,
    'check-up': 160,
  },
};

export function BookingForm() {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    service: '',
    doctor: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  // Initialize form data with default values
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData({
      selectedDate: tomorrow.toISOString().split('T')[0],
      selectedTime: '09:00',
      service: '',
      doctor: '',
      phone: '',
    });
  }, []);

  // Calculate price when service or doctor changes
  useEffect(() => {
    if (formData.service && formData.doctor) {
      const price = pricingMatrix[formData.doctor]?.[formData.service];
      setCurrentPrice(price || null);
    } else {
      setCurrentPrice(null);
    }
  }, [formData.service, formData.doctor]);

  // Listen for service pre-selection from Services section
  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceTitle } = event.detail;
      const serviceMap: Record<string, string> = {
        'Primary Care': 'primary-care',
        'Specialized Care': 'specialized-care',
        'Emergency Care': 'emergency-care',
      };

      const serviceId = serviceMap[serviceTitle];
      if (serviceId) {
        setFormData((prev) => ({ ...prev, service: serviceId }));
      }
    };

    window.addEventListener(
      'focus-booking-form',
      handleServiceSelection as EventListener
    );
    return () =>
      window.removeEventListener(
        'focus-booking-form',
        handleServiceSelection as EventListener
      );
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.service || !formData.doctor || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const serviceName = services.find((s) => s.id === formData.service)?.name;
      const doctorName = doctors.find((d) => d.id === formData.doctor)?.name;
      alert(
        `Appointment request submitted successfully!\n\nService: ${serviceName}\nDoctor: ${doctorName}\nPrice: $${currentPrice}\nDate: ${formData.selectedDate}\nTime: ${formData.selectedTime}`
      );

      // Reset form
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData({
        selectedDate: tomorrow.toISOString().split('T')[0],
        selectedTime: '09:00',
        service: '',
        doctor: '',
        phone: '',
      });
    } catch {
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
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-20 max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto"
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
            {/* Row 1: Service and Doctor */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-2 py-2 w-full focus:outline-none text-xs h-9"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.icon} {service.name}
                    </option>
                  ))}
                </select>
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <UserCheck className="w-3 h-3" />
                  Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-2 py-2 w-full focus:outline-none text-xs h-9"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="">Select doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Row 2: Date and Time */}
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

            {/* Row 3: Phone and Price */}
            <div className="grid grid-cols-2 gap-3">
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
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  Price
                </label>
                <div className="bg-input border border-border rounded-md px-2 py-2 h-9 flex items-center justify-center text-xs font-bold text-primary">
                  {currentPrice ? `$${currentPrice}` : '--'}
                </div>
              </motion.div>
            </div>

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
            {/* Row 1: Service and Doctor */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.icon} {service.name}
                    </option>
                  ))}
                </select>
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <option value="">Select doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Row 2: Date and Time */}
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

            {/* Row 3: Phone, Price and Button */}
            <div className="grid grid-cols-3 gap-4">
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
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Price
                </label>
                <div className="bg-input border border-border rounded-md px-3 py-2 h-[42px] flex items-center justify-center font-bold text-primary">
                  {currentPrice ? `$${currentPrice}` : '--'}
                </div>
              </motion.div>
              <motion.div
                className="space-y-2 flex flex-col justify-end"
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
          </div>

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:flex flex-col gap-3 sm:gap-4 items-end w-full lg:flex-row">
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.icon} {service.name}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <option value="">Select doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </motion.div>
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
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Price
              </label>
              <div className="bg-input border border-border rounded-md px-3 py-2 h-[42px] flex items-center justify-center font-bold text-primary">
                {currentPrice ? `$${currentPrice}` : '--'}
              </div>
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
