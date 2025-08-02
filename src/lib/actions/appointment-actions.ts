"use server";

import { prisma } from "../utils";
import { $Enums } from "../../../generated/prisma";

interface AppointmentData {
  dateRequested: Date;
  timeRequested: string;
  serviceType: string;
  description: string;
  doctorId: string;
  patientId: string;
}

export async function bookAppointment(data: AppointmentData) {
  return await prisma.appointment.create({
    data
  })
}

export async function getAppointmentsByUserId(id: string) {
  const result = await prisma.appointment.findMany({
    where: {
      OR: [
        { doctorId: id },
        { patientId: id }
      ]
    },
    include: {
      doctor: true,
      patient: true
    }
  });
  return result;
}

export async function handleAppointmentStatus(appointmentId: string, status: $Enums.AppointmentStatus) {
  await prisma.appointment.update({
    where: {
      id: appointmentId
    },
    data: {
      status: status
    }
  })
}