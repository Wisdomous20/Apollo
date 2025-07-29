'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Calendar as LucideCalendar } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { getAppointmentsByUserId } from '@/lib/actions/appointment-actions';
import { Appointment } from '@/types/account';
import { getUserFromToken } from '@/lib/actions/jwt-actions';

export default function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [token, setToken] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredAppointments = appointments.filter(
    (a) =>
      a.serviceType.toLowerCase().includes(search.toLowerCase()) ||
      (a.patient?.name &&
        a.patient.name.toLowerCase().includes(search.toLowerCase())) ||
      (a.patient?.email &&
        a.patient.email.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(filteredAppointments.length / pageSize);
  const paginatedAppointments = filteredAppointments.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const latestAppointments = [...appointments]
    .sort(
      (a, b) =>
        new Date(b.dateRequested).getTime() -
        new Date(a.dateRequested).getTime()
    )
    .slice(0, 5);

  const handleApprove = (idx: number) => {
    setAppointments((prev) =>
      prev.map((a, i) => (i === idx ? { ...a, status: 'APPROVED' } : a))
    );
  };
  const handleReject = (idx: number) => {
    setAppointments((prev) =>
      prev.map((a, i) => (i === idx ? { ...a, status: 'REJECTED' } : a))
    );
  };

  const getUserInfo = (appointment: Appointment) => {
    if (appointment.patient) {
      return (
        <span className="text-xs text-slate-500">
          {appointment.patient.name} ({appointment.patient.email})
        </span>
      );
    }
    return null;
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setToken(token);
  }, []);

  useEffect(() => {
    async function fetchAppointments() {
      if (!token) {
        console.log("No token. Please try Again.")
        return;
      }
      const user = await getUserFromToken(token);
      if (!user) {
        console.error('Invalid or missing token');
        return;
      }
      const data = await getAppointmentsByUserId(user.userId);
      if (data) {
        setAppointments(data);
      } else {
        console.error('Failed to fetch appointments');
      }
    }
    fetchAppointments();
  }, [token]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center font-serif">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Calendar */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <LucideCalendar className="h-6 w-6 text-blue-600" /> Calendar
              </h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
            {/* Latest Appointments */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Latest Appointments
              </h2>
              <ul className="divide-y divide-slate-200">
                {latestAppointments.map((a, idx) => (
                  <li
                    key={a.dateRequested + a.serviceType + idx}
                    className="py-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-medium text-slate-800">
                        {a.serviceType}
                      </span>
                      <span className="text-sm text-slate-500">
                        {new Date(a.dateRequested).toLocaleDateString()}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded capitalize ${a.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : a.status === 'APPROVED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                      >
                        {a.status}
                      </span>
                    </div>
                    {getUserInfo(a)}
                    {a.description && (
                      <div className="text-xs text-slate-500 mt-1">
                        {a.description}
                      </div>
                    )}
                    {a.status === 'PENDING' && (
                      <div className="mt-2 flex gap-2">
                        <button
                          className="px-3 py-1 rounded bg-green-500 text-white text-xs hover:bg-green-600"
                          onClick={() =>
                            handleApprove(
                              appointments.findIndex((ap) => ap === a)
                            )
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="px-3 py-1 rounded bg-red-500 text-white text-xs hover:bg-red-600"
                          onClick={() =>
                            handleReject(
                              appointments.findIndex((ap) => ap === a)
                            )
                          }
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* All Appointments Tab */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">All Appointments</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Search by service, name, or email..."
                className="border border-slate-300 rounded px-3 py-2 w-full sm:w-64"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <span className="text-xs text-slate-500">
                {filteredAppointments.length} results
              </span>
            </div>
            <ul className="divide-y divide-slate-200">
              {paginatedAppointments.map((a, idx) => {
                // Find the real index in appointments for approve/reject
                const realIdx = appointments.findIndex(
                  (ap) =>
                    ap.dateRequested === a.dateRequested &&
                    ap.serviceType === a.serviceType &&
                    ap.patient?.email === a.patient?.email
                );
                return (
                  <li
                    key={a.dateRequested + a.serviceType + idx}
                    className="py-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-medium text-slate-800">
                        {a.serviceType}
                      </span>
                      <span className="text-sm text-slate-500">
                        {new Date(a.dateRequested).toLocaleDateString()}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded capitalize ${a.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : a.status === 'APPROVED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                      >
                        {a.status}
                      </span>
                    </div>
                    {getUserInfo(a)}
                    {a.description && (
                      <div className="text-xs text-slate-500 mt-1">
                        {a.description}
                      </div>
                    )}
                    {a.status === 'PENDING' && (
                      <div className="mt-2 flex gap-2">
                        <button
                          className="px-3 py-1 rounded bg-green-500 text-white text-xs hover:bg-green-600"
                          onClick={() => handleApprove(realIdx)}
                        >
                          Approve
                        </button>
                        <button
                          className="px-3 py-1 rounded bg-red-500 text-white text-xs hover:bg-red-600"
                          onClick={() => handleReject(realIdx)}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                className="px-3 py-1 rounded bg-slate-200 text-slate-700 text-xs disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="text-xs text-slate-500">
                Page {page} of {totalPages}
              </span>
              <button
                className="px-3 py-1 rounded bg-slate-200 text-slate-700 text-xs disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <div className="h-16" />
    </div>
  );
}
