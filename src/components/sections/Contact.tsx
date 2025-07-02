'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/3110+E+Sunset+Rd,+Paradise,+NV+89120';
const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.8947!2d-115.0847!3d36.1023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0f0f0f0f0f0%3A0x0!2s3110%20E%20Sunset%20Rd%2C%20Paradise%2C%20NV%2089120!5e0!3m2!1sen!2sus!4v1234567890';

export default function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern SVG */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="greek-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <rect width="120" height="120" fill="none" />
              <path
                d="M20 20h80v80h-80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40 40h40v40h-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="60"
                cy="60"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M20 60h20M80 60h20M60 20v20M60 80v20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#greek-pattern)"
            className="text-slate-600"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-serif">
            Better yet, see us in person! We love our customers, so feel free to
            visit during normal business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Business Info Card */}
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 relative overflow-hidden">
              <div className="grid sm:grid-cols-2 gap-6 relative">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white border border-red-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wide font-serif">
                      Phone
                    </p>
                    <a
                      href="tel:+17024447744"
                      className="text-slate-900 font-semibold hover:text-blue-600 transition-colors font-serif"
                    >
                      (702) 444-7744
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white border border-red-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wide font-serif">
                      Hours
                    </p>
                    <p className="text-slate-900 font-semibold font-serif">
                      09:00 AM – 05:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-950 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-4 relative bg-blue">
                <Mail className="w-6 h-6" />
                <h3 className="text-xl font-bold font-serif">
                  Drop Us a Line!
                </h3>
              </div>
              <p className="text-blue-100 mb-6 font-serif">
                Have questions or need to schedule an appointment? We're here to
                help.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-50 font-semibold font-serif relative"
              >
                Send Message
              </Button>
            </div>
          </motion.div>

          {/* Right: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              <div className="aspect-[4/3] relative">
                {/* Interactive Google Maps Embed */}
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apollo Medical Group Location"
                  className="absolute inset-0"
                />
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
                {/* Footer Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="footer-pattern"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect width="30" height="30" fill="none" />
                        <path
                          d="M0 15h30"
                          stroke="currentColor"
                          strokeWidth="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#footer-pattern)"
                      className="text-slate-600"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
