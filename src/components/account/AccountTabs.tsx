'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProfileSection from './ProfileSection';
import AppointmentsSection from './AppointmentsSection';
import { User as UserType, Appointment } from '@/types/account';

interface AccountTabsProps {
  user: UserType;
  appointments: Appointment[];
}

export default function AccountTabs({ user, appointments }: AccountTabsProps) {
  const [activeTab, setActiveTab] = useState('profile');

  // Handle hash navigation for direct links to appointments
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#appointments') {
        setActiveTab('appointments');
      }
    }
  }, []);

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
    },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: Calendar,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-slate-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="profile" className="mt-0">
          <ProfileSection user={user} />
        </TabsContent>

        <TabsContent value="appointments" className="mt-0" id="appointments">
          <AppointmentsSection appointments={appointments} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
