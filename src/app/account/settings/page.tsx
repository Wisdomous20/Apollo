'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Settings,
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import { mockUser } from '@/data/mockData';

export default function AccountSettingsPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  const handleSettingClick = (setting: string) => {
    console.log(`${setting} clicked`);
    // Placeholder for settings functionality
  };

  const settingsCategories = [
    {
      title: 'Account Settings',
      icon: User,
      color: 'blue',
      settings: [
        {
          name: 'Profile Information',
          description: 'Update your personal details and contact information',
          icon: User,
          action: 'Edit',
        },
        {
          name: 'Password & Security',
          description: 'Change your password and manage security settings',
          icon: Shield,
          action: 'Update',
        },
        {
          name: 'Notification Preferences',
          description: 'Manage how you receive notifications and updates',
          icon: Bell,
          action: 'Configure',
        },
      ],
    },
    {
      title: 'Appearance & Language',
      icon: Palette,
      color: 'purple',
      settings: [
        {
          name: 'Theme & Display',
          description: 'Customize the appearance of your account',
          icon: Palette,
          action: 'Customize',
        },
        {
          name: 'Language & Region',
          description: 'Set your preferred language and regional settings',
          icon: Globe,
          action: 'Set',
        },
      ],
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      color: 'green',
      settings: [
        {
          name: 'Help Center',
          description: 'Access tutorials, FAQs, and support resources',
          icon: HelpCircle,
          action: 'View',
        },
        {
          name: 'Contact Support',
          description: 'Get in touch with our customer support team',
          icon: Settings,
          action: 'Contact',
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="mt-40">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-sm border-b border-slate-200"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackClick}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
                <div className="h-6 w-px bg-slate-300" />
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Settings
                </h1>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
                style={{
                  fontFamily: 'Georgia, Times New Roman, Times, serif',
                }}
              >
                Account Settings
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
              >
                Customize your account preferences and manage your personal
                information
              </motion.p>
            </div>

            {/* User Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-4 border-white shadow-lg">
                        <AvatarImage
                          src={mockUser.avatar}
                          alt={mockUser.name}
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                          {mockUser.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                          {mockUser.name}
                        </CardTitle>
                        <p className="text-slate-600 text-sm sm:text-base">
                          {mockUser.email}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-300"
                    >
                      <Settings className="h-4 w-4" />
                      <span className="hidden sm:inline">Quick Settings</span>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Settings Categories */}
            <div className="space-y-8">
              {settingsCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + categoryIndex * 0.1,
                  }}
                >
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}
                        >
                          <category.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-slate-900">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.settings.map((setting, settingIndex) => (
                          <motion.div
                            key={setting.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay:
                                0.7 + categoryIndex * 0.1 + settingIndex * 0.05,
                            }}
                            className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
                            onClick={() => handleSettingClick(setting.name)}
                          >
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(category.color)} group-hover:scale-110 transition-transform`}
                            >
                              <setting.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                                {setting.name}
                              </h3>
                              <p className="text-slate-600 text-sm">
                                {setting.description}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-slate-500 hover:text-blue-600 transition-colors"
                            >
                              {setting.action}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Logout Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-100 text-red-600 group-hover:scale-110 transition-transform">
                        <LogOut className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-red-900 font-semibold mb-1 group-hover:text-red-700 transition-colors">
                          Sign Out
                        </h3>
                        <p className="text-red-700 text-sm">
                          Securely log out of your account
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        Sign Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </main>

        {/* Footer Spacing */}
        <div className="h-16" />
      </div>
    </div>
  );
}
