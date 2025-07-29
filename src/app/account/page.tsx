'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AccountTabs from '@/components/account/AccountTabs';
import { getUserById } from '@/lib/actions/user-actions';
import { User, Appointment } from '@/types/account';
import { getAppointmentsByUserId } from '@/lib/actions/user-actions';

export default function AccountPage() {

  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      const userId = 'cmdnsjrag0000iu8g9buf5co5';
      const fetchedUser = await getUserById(userId);
      if (typeof fetchedUser === 'string') {
        console.error(fetchedUser);
        setIsLoading(false);
      } else {
        setUser(fetchedUser);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchAppointments() {
      if (user) {
        const fetchedAppointments = await getAppointmentsByUserId(user.id);
        setAppointments(fetchedAppointments);
      }
    }

    fetchAppointments();
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <p className="text-lg text-slate-600">Loading...</p>
      </div>
    );
  }

  if (!user || !appointments) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <p className="text-lg text-slate-600">no user data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-serif"
              style={{
                fontFamily: 'Georgia, Times New Roman, Times, serif',
              }}
            >
              Welcome Back, {user.name.split(' ')[0]}!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Manage your profile information and view your appointment history
              all in one place.
            </motion.p>
          </div>

          {/* Tabs Content */}
          <AccountTabs user={user} appointments={appointments} />
        </motion.div>
      </main>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  );
}
