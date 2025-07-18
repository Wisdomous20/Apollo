'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, LogOut, Calendar, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Updated mock user
const mockUser = {
  id: '2',
  name: 'Alex Kim',
  email: 'alex.kim@apollomedical.com',
  avatar: '/blank-user.svg', // Use a blank default image
  dateJoined: '2024-02-10',
  contactNumber: '+1 (555) 987-6543',
};

export default function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    // Navigate to account page
    window.location.href = '/account';
  };

  const handleAppointmentsClick = () => {
    // Navigate to account page and scroll to appointments section
    window.location.href = '/account#appointments';
  };

  const handleSettingsClick = () => {
    // Placeholder for settings page
    console.log('Settings clicked');
  };

  const handleLogoutClick = () => {
    // Placeholder for logout functionality
    console.log('Logout clicked');
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Account menu"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-semibold">
              {mockUser.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <span className="hidden lg:block text-sm font-medium text-slate-700">
            {mockUser.name.split(' ')[0]}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </motion.div>
        </motion.button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 mt-2" sideOffset={8}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{mockUser.name}</p>
            <p className="text-xs leading-none text-slate-500">
              {mockUser.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleProfileClick}
          className="cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          <span>My Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleAppointmentsClick}
          className="cursor-pointer"
        >
          <Calendar className="mr-2 h-4 w-4" />
          <span>Appointments</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleSettingsClick}
          className="cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogoutClick}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
