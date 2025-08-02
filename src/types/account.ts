import { AppointmentStatus } from "@/generated/client";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  dateJoined: Date;
  phoneNumber: string;
}

export interface Appointment {
  id: string;
  dateRequested: Date;
  serviceType: string;
  status: AppointmentStatus;
  description: string | null;
  doctor: User;
  patient: User;
}

export interface AccountTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
