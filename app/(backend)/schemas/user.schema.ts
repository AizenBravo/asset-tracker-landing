import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '@backend/interfaces/i-user.interface';
import { emailRegex } from '@backend/constants/regex';

// 2. Define the Schema Mongoose will enforce
const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, 'Please provide a valid email address'],
    },
    password: {
      type: String, // Will be used with bcrypt in Phase 2
      required: false,
    },
    phaseOfSale: {
      type: Number,
      default: 0, // Default to registered email phase
    },
    numberOfIntentsToBuy: {
      type: Number,
      default: 0, // Increments every time they click 'Pay'
    },
    interactions: [
      {
        action: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],

    // --- PHASE 2 OPTIONAL: Paddle Billing ---
    /*
    paddleCustomerId: { type: String, required: false },
    paddleSubscriptionId: { type: String, required: false },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], required: false },
    */

    // --- FUTURE MVP OPTIONAL: Roles & Token Caps ---
    /*
    role: { 
      type: String, 
      enum: ['FREE', 'TIER_1', 'TIER_2', 'TIER_3', 'VIP', 'ADMIN', 'KING'], 
      default: 'FREE' 
      // Note for future execution logic:
      // VIP & KING -> Unlimited PDF generation
      // FREE, TIER_1, TIER_2, TIER_3 -> Capped (max 150 txs per user except KING), uses tokenBalance for extra prints
    },
    tokenBalance: { 
      type: Number, 
      default: 0 
    },
    */
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  },
);

// 3. Export the model, ensuring we don't compile it multiple times in Next.js development
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
