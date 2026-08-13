'use client';

import React, { useState } from 'react';
import Phase1CrowdfundModal from './phase-1-crowdfund-modal';
import { bodyParagraph, monoBadge, sectionTitle } from '@core/css-custom-classes/text';

const mockRegisterUser = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network lag
  if (!email || !email.includes('@')) throw new Error('Invalid email address');
  return { success: true };
};

const mockTrackPurchaseIntention = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
};

export default function Phase1Crowdfund() {
  const [step, setStep] = useState(1); // 1 = Email, 2 = Intent Lock, 3 = Closed Modal
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await mockRegisterUser(email);
      setStep(2);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleStep2Submit = async () => {
    setLoading(true);
    setError('');
    try {
      await mockTrackPurchaseIntention(email);
      setStep(3);
    } catch (err) {
      setError('Connection timeout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="crowdfund-section" className="w-full max-w-5xl mx-auto px-4 py-20 font-sans transition-colors duration-300">
      {/* Outer Layout Container - Grid Layout */}
      <div id="presale-form" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-6 md:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
        {/* Decorative Speed-Line & Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Left Side: Offer and Value Proposition (5 Cols) */}
        <div className="md:col-span-5 flex flex-col justify-between z-10 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono tracking-widest uppercase mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span>Alpha Phase — Founders Circle</span>
            </div>
            <h3 className={sectionTitle}>
              Secure Your{' '}
              <span className="bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 bg-clip-text text-transparent dark:from-yellow-600 dark:via-amber-100 dark:to-yellow-600">
                Lifetime Access
              </span>
            </h3>
            <p className={`mt-4 ${bodyParagraph} text-sm`}>
              Ditch future platform subscription fees forever. Join our
              ultra-exclusive early cohort today.
            </p>
          </div>

          <div className="space-y-4 border-t border-zinc-200 dark:border-zinc-900 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-zinc-900 dark:text-white">$15</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                one-time payment / permanent lock
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Full access to all
                upcoming core features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Priority engineering
                team email channel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Permanent Founding
                Member profile badge
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Morphing Form Terminal Modal (7 Cols) */}
        <Phase1CrowdfundModal
          step={step}
          email={email}
          setEmail={setEmail}
          loading={loading}
          error={error}
          onStep1Submit={handleStep1Submit}
          onStep2Submit={handleStep2Submit}
        />
      </div>
    </section>
  );
}
