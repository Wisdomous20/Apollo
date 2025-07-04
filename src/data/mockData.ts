import { User, Appointment } from '@/types/account';

export const mockUser: User = {
  id: '2',
  name: 'Alex Kim',
  email: 'alex.kim@apollomedical.com',
  avatar: '/logo.png',
  dateJoined: '2024-02-10',
  contactNumber: '+1 (555) 987-6543',
};

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    dateRequested: '2024-01-15',
    serviceType: 'Primary Care Consultation',
    status: 'approved',
    remarks: 'Annual checkup scheduled for next week',
  },
  {
    id: '2',
    dateRequested: '2024-01-20',
    serviceType: 'Mental Health Session',
    status: 'pending',
    remarks: 'Follow-up session for anxiety management',
  },
  {
    id: '3',
    dateRequested: '2024-01-25',
    serviceType: 'Aesthetic Treatment',
    status: 'rejected',
    remarks: 'Botox treatment - requires consultation first',
  },
  {
    id: '4',
    dateRequested: '2024-02-01',
    serviceType: 'Specialized Care',
    status: 'approved',
    remarks: 'Cardiology consultation',
  },
];
