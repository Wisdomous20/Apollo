'use client';

import { useState, useEffect } from 'react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon, Phone, Heart, ChevronDown } from 'lucide-react';
import { Calendar as DayPicker } from '@/components/ui/calendar';
import { motion, AnimatePresence } from 'framer-motion';
import { bookAppointment } from '@/lib/actions/appointment-actions';
import { getUserFromToken } from '@/lib/actions/jwt-actions';
import { getPublicReservedDays } from '@/lib/actions/doctor-actions';
import { sendEmail } from '@/lib/actions/email-actions';

// Service and pricing data
import { ALL_SERVICES } from '@/types/services';

const services = ALL_SERVICES.map((service) => ({
  id: service.id,
  name: service.name,
  icon: service.icon || '🩺',
}));

export function BookingForm() {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    service: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [reservedDays, setReservedDays] = useState<Date[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Initialize form data with default values
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      getUserFromToken(token).then((user) => {
        if (user) {
          setToken(token);
          setUserId(user.userId);
          setUserEmail(user.email);
        }
      });
    }
  }, []);

  useEffect(() => {
    async function fetchReservedDays() {
      const reserved = await getPublicReservedDays();

      if (!reserved) return;

      setReservedDays(reserved.map((r) => new Date(r.date)));
    }
    fetchReservedDays();
  }, []);

  // Helper function to find the earliest available date
  const findEarliestAvailableDate = () => {
    const today = new Date();
    const checkDate = new Date(today);
    checkDate.setDate(checkDate.getDate() + 1); // Start from tomorrow

    // Keep checking until we find a date that's not reserved
    while (
      reservedDays.some(
        (reservedDate) =>
          reservedDate.toDateString() === checkDate.toDateString()
      )
    ) {
      checkDate.setDate(checkDate.getDate() + 1);
    }

    return checkDate.toISOString().split('T')[0];
  };

  useEffect(() => {
    // Only set defaults after reservedDays are loaded
    if (reservedDays.length >= 0) {
      // Allow empty array (no reserved days)
      const earliestDate = findEarliestAvailableDate();
      setFormData((prev) => ({
        ...prev,
        selectedDate: earliestDate,
        selectedTime: '08:00', // Earliest available time
        service: services[0].id,
      }));
    }
  }, [reservedDays]); // Remove findEarliestAvailableDate dependency

  // Listen for service pre-selection from Services section
  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceTitle } = event.detail;

      // Try to find exact match first
      let serviceId = services.find((s) => s.name === serviceTitle)?.id;

      // If no exact match, try to find by category title
      if (!serviceId) {
        const categoryMap: Record<string, string> = {
          'Injection Therapies':
            services.find(
              (s) => s.id.includes('injection') || s.id.includes('biotin')
            )?.id || '',
          'IV Drip Therapies':
            services.find((s) => s.id.includes('iv') || s.id.includes('immune'))
              ?.id || '',
          'Advanced Wellness Therapies':
            services.find((s) => s.id.includes('alpha') || s.id.includes('led'))
              ?.id || '',
        };
        serviceId = categoryMap[serviceTitle];
      }

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
  }, []); // Remove services dependency as it's defined outside component

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Phone helpers: keep only digits, limit to 10 (US number), display formatted
  const formatPhone = (digits: string) => {
    const d = digits.replace(/\D/g, '').slice(0, 10);
    if (!d) return '';
    const area = d.slice(0, 3);
    const mid = d.slice(3, 6);
    const last = d.slice(6, 10);
    return `(${area}${mid ? ') ' + mid : ''}${last ? '-' + last : ''}`.replace(
      '() ',
      ''
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digits }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    if (reservedDays.some((d) => d.toDateString() === date.toDateString())) {
      alert('This day is unavailable.');
      return;
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const localDateString = `${year}-${month}-${day}`;

    setFormData((prev) => ({ ...prev, selectedDate: localDateString }));
    setIsCalendarOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.service || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate US phone: must be 10 digits
    if (formData.phone.replace(/\D/g, '').length !== 10) {
      alert('Please enter a valid 10-digit US phone number.');
      return;
    }

    if (!token) {
      alert('Please log in first in order to book an appointment.');
      return;
    }

    setIsSubmitting(true);
    try {
      const submission = await bookAppointment({
        dateRequested: formData.selectedDate
          ? new Date(formData.selectedDate)
          : new Date(),
        timeRequested: formData.selectedTime,
        serviceType: formData.service,
        patientId: userId,
        description: formData.service,
      });

      await sendEmail(userEmail);

      if (typeof submission === 'string') {
        alert(submission);
        return;
      }

      alert(
        `Appointment request submitted successfully!\n\nService: ${formData.service}\nDate: ${formData.selectedDate}`
      );

      // Reset form with earliest available date
      const earliestDate = findEarliestAvailableDate();
      setFormData({
        selectedDate: earliestDate,
        selectedTime: '08:00',
        service: services[0].id,
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1], // easeOut cubic-bezier
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.15,
        ease: [0.4, 0.0, 1, 1], // easeIn cubic-bezier
      },
    },
  } as const;

  return (
    <>
      <motion.div
        className="absolute bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-3 right-3 xs:left-4 xs:right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-20 max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-card backdrop-blur-md p-2.5 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl rounded-lg border border-border/30 font-serif"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {/* Enhanced Mobile Layout (xs and sm) */}
          <div className="flex flex-col gap-2.5 xs:gap-3 sm:hidden">
            {/* Row 1: Service - full width on very small screens */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-3">
              <motion.div
                className="space-y-1.5 xs:space-y-2"
                variants={fieldVariants}
              >
                <label className="text-xs font-medium text-foreground flex items-center gap-1">
                  <Heart className="w-3 h-3 text-secondary" />
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-2 py-2 w-full focus:outline-none text-xs xs:text-sm leading-4 h-8 xs:h-9 font-normal font-sans"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.icon} {service.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Row 2: Date and Time */}
            <div className="grid grid-cols-2 gap-2.5 xs:gap-3">
              <motion.div
                className="space-y-1.5 xs:space-y-2"
                variants={fieldVariants}
              >
                <label className="text-xs font-medium text-foreground flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3 text-secondary" />
                  Date
                </label>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsCalendarOpen(true)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && setIsCalendarOpen(true)
                  }
                  className="bg-input border border-border rounded-md px-1.5 xs:px-2 py-2 w-full focus:outline-none text-xs xs:text-sm leading-4 h-8 xs:h-9 font-normal font-sans text-left flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate text-xs xs:text-sm">
                    {formData.selectedDate
                      ? new Date(formData.selectedDate).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                          }
                        )
                      : 'Date'}
                  </span>
                  <ChevronDown className="w-3 h-3 xs:w-4 xs:h-4 text-secondary ml-1 xs:ml-2 flex-shrink-0" />
                </div>
              </motion.div>
              <motion.div
                className="space-y-1.5 xs:space-y-2"
                variants={fieldVariants}
              >
                <label className="text-xs font-medium text-foreground flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3 text-secondary" />
                  Time
                </label>
                <select
                  name="selectedTime"
                  value={formData.selectedTime}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-1.5 xs:px-2 py-2 w-full focus:outline-none text-xs xs:text-sm leading-4 h-8 xs:h-9 font-normal font-sans"
                >
                  <option value="08:00">8 AM</option>
                  <option value="09:00">9 AM</option>
                  <option value="10:00">10 AM</option>
                  <option value="11:00">11 AM</option>
                  <option value="12:00">12 PM</option>
                  <option value="13:00">1 PM</option>
                  <option value="14:00">2 PM</option>
                  <option value="15:00">3 PM</option>
                  <option value="16:00">4 PM</option>
                  <option value="17:00">5 PM</option>
                </select>
              </motion.div>
            </div>

            {/* Row 3: Phone - full width on very small screens */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-3">
              <motion.div
                className="space-y-1.5 xs:space-y-2"
                variants={fieldVariants}
              >
                <label className="text-xs text-foreground flex items-center gap-1 font-normal">
                  <Phone className="w-3 h-3 text-secondary" />
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 xs:px-3 py-2 bg-input border border-border rounded-l-md text-xs xs:text-sm font-normal font-sans">
                    +1
                  </span>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formatPhone(formData.phone)}
                    onChange={handlePhoneChange}
                    className="bg-input border border-border rounded-none rounded-r-md text-xs xs:text-sm leading-4 h-8 xs:h-9 px-1.5 xs:px-2 w-full font-normal font-sans"
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 4: Button - enhanced mobile button */}
            <motion.div
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 xs:px-4 py-2.5 xs:py-2 rounded-md font-medium w-full h-9 xs:h-10 text-xs xs:text-sm"
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
                      <div className="animate-spin rounded-full h-3 w-3 xs:h-4 xs:w-4 border-b-2 border-white mr-1.5 xs:mr-2"></div>
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
            <div className="grid grid-cols-2 gap-3">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Heart className="w-4 h-4 text-secondary" />
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-sm leading-4 h-9 font-normal font-sans"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.icon} {service.name}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Row 2: Date and Time */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-secondary" />
                  Date
                </label>
                <Button
                  variant="outline"
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-left justify-start text-sm leading-4 h-9 font-normal font-sans"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  {formData.selectedDate
                    ? new Date(formData.selectedDate).toLocaleDateString()
                    : 'Select Date'}
                </Button>
              </motion.div>
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-secondary" />
                  Time
                </label>
                <select
                  name="selectedTime"
                  value={formData.selectedTime}
                  onChange={handleInputChange}
                  className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-sm leading-4 h-9 font-normal font-sans"
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
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 bg-input border border-border rounded-l-md text-sm font-normal font-sans">
                    +1
                  </span>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formatPhone(formData.phone)}
                    onChange={handlePhoneChange}
                    className="bg-input border border-border rounded-none rounded-r-md text-sm leading-4 h-9 px-2 w-full font-normal font-sans"
                  />
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
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Heart className="w-4 h-4 text-secondary" />
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-sm leading-4 h-9 font-normal font-sans"
              >
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
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-secondary" />
                Date
              </label>
              <Button
                variant="outline"
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-left justify-start text-sm leading-4 h-9 font-normal font-sans"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                {formData.selectedDate
                  ? new Date(formData.selectedDate).toLocaleDateString()
                  : 'Select Date'}
              </Button>
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-secondary" />
                Time
              </label>
              <select
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleInputChange}
                className="bg-input border border-border rounded-md px-3 py-2 w-full focus:outline-none text-sm leading-4 h-9 font-normal font-sans"
              >
                <option value="08:00">8:00 am</option>
                <option value="09:00">9:00 am</option>
                <option value="10:00">10:00 am</option>
                <option value="11:00">11:00 am</option>
                <option value="12:00">12:00 pm</option>
                <option value="13:00">1:00 pm</option>
                <option value="14:00">2:00 pm</option>
                <option value="15:00">3:00 pm</option>
                <option value="16:00">4:00 pm</option>
                <option value="17:00">5:00 pm</option>
              </select>
            </motion.div>
            <motion.div
              className="space-y-2 w-full lg:flex-1 lg:min-w-0"
              variants={fieldVariants}
            >
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 bg-input border border-border rounded-l-md text-sm font-normal font-sans">
                  +1
                </span>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formatPhone(formData.phone)}
                  onChange={handlePhoneChange}
                  className="bg-input border border-border rounded-none rounded-r-md text-sm leading-4 h-9 px-2 w-full font-normal font-sans"
                />
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

      {/* Enhanced Calendar Modal for mobile */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 xs:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsCalendarOpen(false);
              }
            }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-4 xs:p-6 max-w-sm xs:max-w-md w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 xs:mb-4 pt-6 xs:pt-10">
                <h3 className="text-base xs:text-lg text-gray-900 font-normal">
                  Select Date
                </h3>
              </div>
              <DayPicker
                mode="single"
                selected={
                  formData.selectedDate
                    ? new Date(formData.selectedDate)
                    : undefined
                }
                onSelect={handleDateSelect}
                disabled={[
                  ...reservedDays,
                  (date) => date < new Date(), // Disable past dates
                ]}
                modifiers={{
                  reserved: reservedDays,
                }}
                modifiersClassNames={{
                  reserved: 'bg-red-100 text-red-800 line-through',
                }}
                className="mx-auto text-sm xs:text-base"
              />
              <div className="flex justify-end mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="px-3 xs:px-4 py-2 text-xs xs:text-sm text-gray-600 hover:text-gray-800 transition-colors font-serif"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
