"use server";

import { prisma } from "@/lib/utils";
import { verifyAccessToken } from "../auth";
import { cookies } from "next/headers";

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

export async function reserveDay(date: Date) {
  // Verify doctor authorization
  await verifyDoctorAuth();

  await prisma.doctorAvailability.create({
    data: {
      date,
      isAvailable: false
    }
  });
}

export async function getReservedDays() {
  // Verify doctor authorization
  await verifyDoctorAuth();

  return await prisma.doctorAvailability.findMany();
}

// Public function for booking form - no auth required
export async function getPublicReservedDays() {
  return await prisma.doctorAvailability.findMany();
}

export async function getAllReservedDays() {
  // Verify doctor authorization
  await verifyDoctorAuth();

  return await prisma.doctorAvailability.findMany();
}