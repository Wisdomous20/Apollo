'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { z } from 'zod';

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  agreeToTerms: z
    .boolean()
    .refine(
      (val) => val === true,
      'You must agree to the terms and conditions'
    ),
});

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

const heroSlides = [
  {
    title: 'Excellence',
    subtitle:
      'Committed to the highest standards of medical care and continuous improvement.',
    backgroundImage: '/login-background.jpg',
  },
  {
    title: 'Compassion',
    subtitle: 'Treating every patient with empathy, respect, and genuine care.',
    backgroundImage: '/login-background2.jpg',
  },
  {
    title: 'Innovation',
    subtitle:
      'Embracing cutting-edge technology and progressive treatment methods.',
    backgroundImage: '/login-background3.jpg',
  },
];

export default function SignupForm() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrors({}); // Clear all errors when switching modes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLoginMode) {
        // For login, validate email format first
        if (!formData.email) {
          setErrors({ email: 'Email is required' });
          return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setErrors({ email: 'Please enter a valid email address' });
          return;
        }
        if (!formData.password) {
          setErrors({ password: 'Email or password is incorrect' });
          return;
        }
        // If we reach here, format is valid, proceed with login attempt
        loginSchema.parse({
          email: formData.email,
          password: formData.password,
        });
      } else {
        registerSchema.parse({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          agreeToTerms: formData.agreeToTerms,
        });
      }

      setErrors({});
      // Handle form submission here
      console.log('Form is valid', formData);
    } catch (err) {
      if (err instanceof z.ZodError && !isLoginMode) {
        const newErrors: { [key: string]: string } = {};
        err.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(newErrors);
      } else if (isLoginMode) {
        // For login mode, show generic error for password issues
        setErrors({ password: 'Email or password is incorrect' });
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left side - Hero section */}
      <motion.div
        className="flex-1 relative bg-primary/70 flex flex-col min-h-[40vh] lg:min-h-screen overflow-hidden order-1 lg:order-2"
        variants={itemVariants}
      >
        {/* Header */}
        <motion.div
          className="flex justify-between items-center p-4 sm:p-6 lg:p-8 relative z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-white text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            APOLLO
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-white/10 border-white/30 text-white hover:text-secondary hover:bg-white hover:border-white/50 backdrop-blur-sm"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-xs sm:text-sm transition-colors"
              >
                Back to website
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Background image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentSlide].backgroundImage}
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 lg:p-8 relative z-10">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-white text-2xl sm:text-3xl lg:text-4xl font-light mb-2 leading-tight whitespace-pre-line"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-white/80 text-sm sm:text-base max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                className={`h-1 rounded transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 sm:w-8 bg-white'
                    : 'w-6 sm:w-8 bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right side - Sign up form */}
      <motion.div
        className="flex-1 relative flex items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1"
        variants={itemVariants}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/building.png"
            alt="background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </div>

        <motion.div
          className="w-full max-w-md space-y-4 sm:space-y-6 relative z-10"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            className="text-center space-y-2 sm:space-y-4"
            variants={itemVariants}
          >
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-4 sm:mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative">
                <Image
                  src="/logo.png"
                  alt="Apollo Medical Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
              {isLoginMode ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-primary text-sm sm:text-base lg:text-lg">
              {isLoginMode
                ? "Don't have an account? "
                : 'Already have an account? '}
              <button
                onClick={toggleMode}
                className="text-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]/80 transition-colors underline"
              >
                {isLoginMode ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            className="space-y-3 sm:space-y-4"
            variants={containerVariants}
            onSubmit={handleSubmit}
          >
            {/* Name fields - Only show in signup mode */}
            {!isLoginMode && (
              <motion.div
                className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4"
                variants={itemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    className={`bg-white border-border text-foreground placeholder:text-muted-foreground rounded-lg h-11 sm:h-12 transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Input
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    className={`bg-white border-border text-foreground placeholder:text-muted-foreground rounded-lg h-11 sm:h-12 transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            )}

            {/* Email field */}
            <motion.div
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-white border-border text-foreground placeholder:text-muted-foreground rounded-lg h-11 sm:h-12 transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Password field */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`bg-white border-border text-foreground placeholder:text-muted-foreground rounded-lg h-11 sm:h-12 pr-12 transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </motion.div>

            {/* Remember me (Login) / Terms checkbox (Signup) */}
            <motion.div
              className="flex items-start space-x-3 pt-1"
              variants={itemVariants}
            >
              <Checkbox
                id={isLoginMode ? 'remember' : 'terms'}
                checked={
                  isLoginMode ? formData.rememberMe : formData.agreeToTerms
                }
                onCheckedChange={(checked) =>
                  handleInputChange(
                    isLoginMode ? 'rememberMe' : 'agreeToTerms',
                    checked as boolean
                  )
                }
                className="border-border data-[state=checked]:bg-secondary data-[state=checked]:border-secondary mt-0.5 bg-white"
              />
              <label
                htmlFor={isLoginMode ? 'remember' : 'terms'}
                className="text-foreground text-sm leading-relaxed"
              >
                {isLoginMode ? (
                  'Remember me'
                ) : (
                  <>
                    I agree to the{' '}
                    <Link
                      href="#"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </>
                )}
              </label>
              {!isLoginMode && errors.agreeToTerms && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.agreeToTerms}
                </p>
              )}
            </motion.div>

            {/* Forgot password - Only show in login mode */}
            {isLoginMode && (
              <motion.div
                className="text-right"
                variants={itemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Link
                  href="#"
                  className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </motion.div>
            )}

            {/* Submit button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-11 sm:h-12 text-sm sm:text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoginMode ? 'Sign in' : 'Create account'}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
