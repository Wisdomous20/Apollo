export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  dateJoined: string;
  contactNumber: string;
}

export interface Appointment {
  id: string;
  dateRequested: string;
  serviceType: string;
  status: 'pending' | 'approved' | 'rejected';
  remarks?: string;
}

export interface AccountTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
