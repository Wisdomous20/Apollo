import { AppointmentStatus } from "../../generated/prisma";

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
  doctorId: string;
  patientId: string;
}

export interface AccountTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
