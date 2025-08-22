"use server";

import { prisma } from "../utils";
import { $Enums } from "@/generated/client";
import { verifyAccessToken } from "../auth";
import { cookies } from "next/headers";

interface AppointmentData {
  dateRequested: Date;
  timeRequested: string;
  serviceType: string;
  description: string;
  patientId: string;
}

async function verifyDoctorAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    throw new Error('Authentication required');
  }

  const payload = verifyAccessToken(token);
  if (!payload || payload.userType !== 'DOCTOR') {
    throw new Error('Doctor access required');
  }

  return payload;
}

export async function bookAppointment(data: AppointmentData) {

  const reservationExists = await prisma.appointment.findFirst({
    where: {
      dateRequested: data.dateRequested,
      timeRequested: data.timeRequested,
    }
  });

  if (reservationExists) return "This date and time is already reserved. Please select another schedule."

  return await prisma.appointment.create({
    data
  })
}

export async function getAllAppointments() {
  // Verify doctor authorization
  await verifyDoctorAuth();

  const result = await prisma.appointment.findMany({
    include: {
      patient: true
    }
  });
  return result;
}

export async function getAppointmentsByUserId(id: string) {
  const result = await prisma.appointment.findMany({
    where: {
      patientId: id
    },
    include: {
      patient: true
    }
  });
  return result;
}

export async function handleAppointmentStatus(appointmentId: string, status: $Enums.AppointmentStatus) {
  // Verify doctor authorization
  await verifyDoctorAuth();

  await prisma.appointment.update({
    where: {
      id: appointmentId
    },
    data: {
      status: status
    }
  })
}