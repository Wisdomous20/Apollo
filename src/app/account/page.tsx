'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AccountTabs from '@/components/account/AccountTabs';
import { User, Appointment } from '@/types/account';
import { getAppointmentsByUserId } from '@/lib/actions/appointment-actions';
import { getUserFromToken } from '@/lib/actions/jwt-actions';
import { getUserById } from '@/lib/actions/user-actions';

export default function AccountPage() {

  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setToken(token);
  }, []);

  useEffect(() => {
    async function fetchAppointments() {
      setIsLoading(true);
      try {
        if (!token) {
          console.log("No token. Please try Again.")
          return;
        }
        const user = await getUserFromToken(token);
        if (!user) {
          console.error('Invalid or missing token');
          return;
        }
        const [userData, appointmentsData] = await Promise.all([
          getUserById(user.userId),
          getAppointmentsByUserId(user.userId)
        ])
        if (typeof userData === 'string' || !appointmentsData) {
          console.error('Failed to fetch appointments');
        } else {
          setAppointments(appointmentsData);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAppointments();
  }, [token]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <p className="text-lg text-slate-600">Loading...</p>
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
              Welcome Back, {user?.name.split(' ')[0]}!
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
          {((appointments && user) && (
            <AccountTabs user={user} appointments={appointments} />
          ))}
        </motion.div>
      </main>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  );
}
