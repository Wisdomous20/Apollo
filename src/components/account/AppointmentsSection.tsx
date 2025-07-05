'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, FileText, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Appointment } from '@/types/account';

interface AppointmentsSectionProps {
  appointments: Appointment[];
}

export default function AppointmentsSection({
  appointments,
}: AppointmentsSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusIcon = (status: Appointment['status']) => {
    switch (status) {
      case 'approved':
        return <Calendar className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Calendar className="h-4 w-4 text-slate-600" />;
    }
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'approved':
        return 'approved';
      case 'pending':
        return 'pending';
      case 'rejected':
        return 'rejected';
      default:
        return 'default';
    }
  };

  if (appointments.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            No Appointments
          </h3>
          <p className="text-slate-600 mb-6">
            You haven&apos;t scheduled any appointments yet. Book your first
            appointment to get started.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Appointment
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Your Appointments
        </h2>
        <Badge variant="outline" className="text-sm">
          {appointments.length} appointment
          {appointments.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment, index) => (
          <motion.div
            key={appointment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        {getStatusIcon(appointment.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {appointment.serviceType}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(appointment.dateRequested)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {appointment.remarks && (
                      <div className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                        <FileText className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <p className="flex-1">{appointment.remarks}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={getStatusColor(appointment.status)}>
                      {appointment.status.charAt(0).toUpperCase() +
                        appointment.status.slice(1)}
                    </Badge>
                    <div className="text-xs text-slate-500">
                      ID: {appointment.id}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
