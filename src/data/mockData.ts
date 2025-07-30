import { User, Appointment } from '@/types/account';

export const mockUser: User = {
  id: '2',
  name: 'Alex Kim',
  email: 'alex.kim@apollomedical.com',
  avatar: '/logo.png',
  dateJoined: new Date('2024-02-10'),
  phoneNumber: '+1 (555) 987-6543',
};

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    dateRequested: new Date('2024-01-15'),
    serviceType: 'Primary Care Consultation',
    status: 'APPROVED',
    description: 'Annual checkup scheduled for next week',
    doctor: mockUser,
    patient: mockUser
  },
  {
    id: '2',
    dateRequested: new Date('2024-01-20'),
    serviceType: 'Mental Health Session',
    status: 'PENDING',
    description: 'Follow-up session for anxiety management',
    doctor: mockUser,
    patient: mockUser
  },
  {
    id: '3',
    dateRequested: new Date('2024-01-25'),
    serviceType: 'Aesthetic Treatment',
    status: 'REJECTED',
    description: 'Botox treatment - requires consultation first',
    doctor: mockUser,
    patient: mockUser
  },
  {
    id: '4',
    dateRequested: new Date('2024-02-01'),
    serviceType: 'Specialized Care',
    status: 'APPROVED',
    description: 'Cardiology consultation',
    doctor: mockUser,
    patient: mockUser
  },
];
