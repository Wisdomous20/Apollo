'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingSession {
  selectedDate: string;
  selectedTime: string;
  doctor: string;
  phone: string;
  isAuthenticated: boolean;
}

interface BookingContextType {
  bookingSession: BookingSession | null;
  startBookingSession: (
    bookingData: Omit<BookingSession, 'isAuthenticated'>
  ) => void;
  updateBookingSession: (updates: Partial<BookingSession>) => void;
  clearBookingSession: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

function useBookingProvider(): BookingContextType {
  const [bookingSession, setBookingSession] = useState<BookingSession | null>(
    null
  );

  const startBookingSession = (
    bookingData: Omit<BookingSession, 'isAuthenticated'>
  ) => {
    setBookingSession({
      ...bookingData,
      isAuthenticated: false,
    });
    // Store in session storage for persistence
    sessionStorage.setItem(
      'bookingSession',
      JSON.stringify({
        ...bookingData,
        isAuthenticated: false,
      })
    );
  };

  const updateBookingSession = (updates: Partial<BookingSession>) => {
    if (bookingSession) {
      const updatedSession = { ...bookingSession, ...updates };
      setBookingSession(updatedSession);
      sessionStorage.setItem('bookingSession', JSON.stringify(updatedSession));
    }
  };

  const clearBookingSession = () => {
    setBookingSession(null);
    sessionStorage.removeItem('bookingSession');
  };

  return {
    bookingSession,
    startBookingSession,
    updateBookingSession,
    clearBookingSession,
  };
}

interface BookingProviderProps {
  children: ReactNode;
}

export function BookingProvider({ children }: BookingProviderProps) {
  const booking = useBookingProvider();

  return (
    <BookingContext.Provider value={booking}>
      {children}
    </BookingContext.Provider>
  );
}
