// 1. Interface defining the properties a User document has
export interface IUser extends Document {
  email: string;
  password?: string; // Optional for Phase 1
  phaseOfSale: number; // 0 = Registered email, 1 = Paid Phase 2, etc.
  numberOfIntentsToBuy: number; // Raw counter for landing page "Pay" button clicks
  interactions: Array<{
    action: string;
    timestamp: Date;
  }>;
  createdAt: Date;
  updatedAt: Date;

  // --- PHASE 2 OPTIONAL: Paddle Billing Placeholders ---
  /*
  paddleCustomerId?: string;
  paddleSubscriptionId?: string;
  paymentStatus?: 'pending' | 'completed' | 'failed';
  */

  // --- FUTURE MVP OPTIONAL: Roles & Token Cap Placeholders ---
  /*
  role: 'FREE' | 'TIER_1' | 'TIER_2' | 'TIER_3' | 'VIP' | 'ADMIN' | 'KING';
  tokenBalance: number; // For buying extra transaction/PDF credits
  */
}
