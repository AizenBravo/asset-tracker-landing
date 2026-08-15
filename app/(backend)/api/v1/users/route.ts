import connectDB from '@backend/config/mongo-db';
import User from '@backend/schemas/user.schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Attempt to find and update an existing user atomically
    const existingUser = await User.findOneAndUpdate(
      { email },
      {
        $inc: { numberOfIntentsToRegisterUser: 1 },
        $push: {
          interactions: {
            action: 'ATTEMPTED_RE_REGISTRATION',
            timestamp: new Date(),
          },
        },
      },
      { new: true }, // Returns the newly updated document
    );

    // If an existing user was found and updated, return the custom welcome back message
    if (existingUser) {
      return NextResponse.json(
        {
          success: true,
          message: `Welcome back user with email: ${email}. You already have an account, please proceed`,
          userId: existingUser._id,
        },
        { status: 200 },
      );
    }

    // If no user exists, create a brand new one
    const newUser = await User.create({
      email,
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
      { status: 500 },
    );
  }
}
