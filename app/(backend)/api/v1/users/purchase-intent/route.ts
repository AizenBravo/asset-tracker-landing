import connectDB from '@backend/config/mongo-db';
import User from '@backend/schemas/user.schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required to log intent' },
        { status: 400 },
      );
    }

    // Atomic update: finds user, increments counter by 1, and appends to the log array
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $inc: { numberOfIntentsToBuy: 1 },
        $push: {
          interactions: { action: 'CLICKED_PAY', timestamp: new Date() },
        },
      },
      { new: true }, // Returns the modified document rather than the old one
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Intent tracked successfully',
      numberOfIntentsToBuy: updatedUser.numberOfIntentsToBuy,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
