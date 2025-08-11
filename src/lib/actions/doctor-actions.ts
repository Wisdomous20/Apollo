"use server";

import { prisma } from "@/lib/utils";

export async function reserveDay(doctorId: string, date: Date) {
  await prisma.doctorAvailability.create({
    data: {
      doctorId,
      date,
      isAvailable: false
    }
  });
}

export async function getReservedDays(doctorId: string) {
  return await prisma.doctorAvailability.findMany({
    where: {
      doctorId
    }
  });
}

export async function getAllReservedDays() {
  return await prisma.doctorAvailability.findMany();
}