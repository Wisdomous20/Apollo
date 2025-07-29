'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, UserCheck, Phone } from 'lucide-react';

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('2025-07-29');
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [doctor, setDoctor] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="absolute bottom-8 lg:bottom-16 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-10">
      <div
        className="bg-card/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-2xl rounded-md"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        <div className="flex flex-col gap-3 sm:gap-4 items-end w-full lg:flex-row">
          <div className="space-y-2 w-full lg:flex-1 lg:min-w-0">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date
            </label>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-input border-border"
              style={{ fontFamily: "'Cinzel', serif" }}
            />
          </div>
          <div className="space-y-2 w-full lg:flex-1 lg:min-w-0">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
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
          </div>
          <div className="space-y-2 w-full lg:flex-1 lg:min-w-0">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              Doctor Name
            </label>
            <Input
              type="text"
              placeholder="Dr. John Doe"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="bg-input border-border"
              style={{ fontFamily: "'Cinzel', serif" }}
            />
          </div>
          <div className="space-y-2 w-full lg:flex-1 lg:min-w-0">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-input border-border"
              style={{ fontFamily: "'Cinzel', serif" }}
            />
          </div>
          <div className="space-y-2 flex flex-col justify-end h-full w-full lg:flex-1 lg:min-w-0">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium whitespace-nowrap w-full h-[42px]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
