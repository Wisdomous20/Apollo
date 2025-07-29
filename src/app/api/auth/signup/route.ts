import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '../../../../../generated/prisma';
import { generateTokens } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, password } = await request.json();

    // Validate input
    if (!name || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    // Create new user - Always as PATIENT
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        userType: 'PATIENT', // Always create as PATIENT
        dateJoined: new Date(),
      },
    });

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens({
      userId: newUser.id,
      email: newUser.email,
      userType: newUser.userType,
    });

    // Create response
    const response = NextResponse.json(
      {
        message: 'Patient account created successfully',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          userType: newUser.userType,
          phoneNumber: newUser.phoneNumber,
          dateJoined: newUser.dateJoined,
        },
        accessToken,
      },
      { status: 201 }
    );

    // Set refresh token as HTTP-only cookie
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
