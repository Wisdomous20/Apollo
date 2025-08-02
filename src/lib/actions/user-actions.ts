"use server";

import { prisma } from "@/lib/utils";
import { $Enums } from "../../../generated/prisma";

export async function getUserById(id: string) {
  const result = await prisma.user.findUnique({
    where: {
      id
    }
  });

  if (!result) return "No user found"

  return result
}

export async function createUser() {
  await prisma.user.create({
    data: {
      name: "Dr. Test Subject",
      email: "testsubject@email.com",
      phoneNumber: "09876543210",
      password: "password1",
      dateJoined: new Date(Date.now()),
      userType: $Enums.UserType.DOCTOR,
    }
  })
}

export async function getAllDoctors() {
  return await prisma.user.findMany({
    where: {
      userType: "DOCTOR"
    }
  })
}