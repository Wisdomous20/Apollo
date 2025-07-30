"use server";

import jwt from 'jsonwebtoken';
import { JWTPayload } from "@/lib/auth";
const JWT_SECRET = process.env.JWT_SECRET_KEY || 'secret-key';

export async function getUserFromToken(token: string): Promise<JWTPayload | null> {
  try {
    const verifiedPayload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return verifiedPayload;
  } catch (error) {
    console.error(error)
    return null;
  }
}