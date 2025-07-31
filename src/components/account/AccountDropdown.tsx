'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  LogOut,
  Calendar,
  ChevronDown,
  LogIn,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AccountDropdown({ name, email }: { name?: string; email?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    // Navigate to account page
    window.location.href = '/account';
  };
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleAppointmentsClick = () => {
    // Navigate to account page and scroll to appointments section
    window.location.href = '/account#appointments';
  };

  const handleLogoutClick = () => {
    // Placeholder for logout functionality
    localStorage.removeItem('accessToken');
    setIsOpen(false);
    window.location.href = '/'
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
            <AvatarImage src="/profile-default.svg" alt={name} />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-semibold">
              {name!
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <span className="hidden lg:block text-sm font-medium text-slate-700">
            {name!.split(' ')[0]}
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
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-slate-500">
              {email}
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

        <DropdownMenuItem onClick={handleLogin} className="cursor-pointer">
          <LogIn className="mr-2 h-4 w-4" />
          <span>Login</span>
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
