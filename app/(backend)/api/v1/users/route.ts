import connectDB from '@backend/config/mongo-db';
import User from '@backend/schemas/user.schema';
import { emailRegex } from '@backend/constants/regex';
import { NextResponse } from 'next/server';

// ONLY to create users for the Landing page (Phases: [1, 2])
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email } = body || {};

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 },
      );
    }

    // Attempt to find and update an existing user atomically
    const existingUser = await User.findOneAndUpdate(
      { email: normalizedEmail },
      {
        $inc: { numberOfIntentsToRegisterUser: 1 },
        $push: {
          interactions: {
            action: 'ATTEMPTED_RE_REGISTRATION',
            timestamp: new Date(),
          },
        },
      },
      { returnDocument: 'after' }, // Returns the newly updated document
    );

    // If an existing user was found and updated, return the custom welcome back message
    if (existingUser) {
      return NextResponse.json(
        {
          success: true,
          message: `Welcome back user with email: ${normalizedEmail}. You already have an account, please proceed`,
          userId: existingUser._id,
        },
        { status: 200 },
      );
    }

    // If no user exists, create a brand new one
    const newUser = await User.create({
      email: normalizedEmail,
      phaseOfSale: 0,
      numberOfIntentsToBuy: 0,
      numberOfIntentsToRegisterUser: 1, // First intent log
      interactions: [{ action: 'EMAIL_REGISTERED', timestamp: new Date() }],
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        userId: newUser._id,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: error.name === 'ValidationError' ? 400 : 500 },
    );
  }
}
