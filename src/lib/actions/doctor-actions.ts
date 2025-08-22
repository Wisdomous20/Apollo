"use server";

import { prisma } from "@/lib/utils";

export async function reserveDay(date: Date) {
  await prisma.doctorAvailability.create({
    data: {
      date,
      isAvailable: false
    }
  });
}

export async function getReservedDays() {
  return await prisma.doctorAvailability.findMany();
}

export async function getAllReservedDays() {
  return await prisma.doctorAvailability.findMany();
}