import connectDB from '@backend/config/mongo-db';
import User from '@backend/schemas/user.schema';
import { emailRegex } from '@backend/constants/regex';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email } = body || {};

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required to log intent' },
        { status: 400 },
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 },
      );
    }

    // Atomic update: finds user, increments counter by 1, and appends to the log array
    const updatedUser = await User.findOneAndUpdate(
      { email: normalizedEmail },
      {
        $inc: { numberOfIntentsToBuy: 1 },
        $push: {
          interactions: { action: 'CLICKED_PAY', timestamp: new Date() },
        },
      },
      { returnDocument: 'after' }, // Returns the newly updated document
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found. Please register your email first.' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Intent tracked successfully',
      numberOfIntentsToBuy: updatedUser.numberOfIntentsToBuy,
      userId: updatedUser._id,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: error.name === 'ValidationError' ? 400 : 500 },
    );
  }
}
