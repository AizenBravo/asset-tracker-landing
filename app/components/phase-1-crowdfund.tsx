'use client';

import { SubmitEventHandler, useState } from 'react';

const mockRegisterUser = async (email: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network lag
  if (!email || !email.includes('@')) throw new Error('Invalid email address');
  return { success: true };
};

const mockTrackPurchaseIntention = async (email) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
};

export default function Phase1Crowdfund() {
  const [step, setStep] = useState(1); // 1 = Email, 2 = Intent Lock, 3 = Closed Modal
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStep1Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await mockRegisterUser(email);
      setStep(2);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
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
    <section className="w-full max-w-5xl mx-auto px-4 py-24 font-sans text-neutral-200">
      {/* Outer Layout Container - Asymmetric Cyberpunk Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch border border-neutral-800 bg-neutral-950 p-6 md:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
        {/* Decorative Grid Lines to match your UI aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        {/* Left Side: Offer and Value Proposition (5 Cols) */}
        <div className="md:col-span-5 flex flex-col justify-between z-10 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-mono tracking-widest uppercase mb-4 animate-pulse">
              ● Alpha Phase — Founders Circle
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Secure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                Lifetime Access
              </span>
            </h3>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              Ditch future platform subscription fees forever. Join our
              ultra-exclusive early cohort today.
            </p>
          </div>

          <div className="space-y-3 border-t border-neutral-900 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">$15</span>
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                one-time payment / permanent lock
              </span>
            </div>

            <ul className="space-y-2 text-xs text-neutral-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-[#00f2fe]">✓</span> Full access to all
                upcoming core features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00f2fe]">✓</span> Priority engineering
                team email channel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00f2fe]">✓</span> Permanent Founding
                Member profile badge
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Weird/Creative Morphing Form Terminal (7 Cols) */}
        <div className="md:col-span-7 border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col justify-center relative z-10 min-h-[300px]">
          {/* Terminal Accents */}
          <div className="absolute top-3 right-4 flex gap-1.5 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div className="w-2 h-2 rounded-full bg-[#00f2fe]/40" />
          </div>

          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-neutral-500 font-mono">
                  01 // Enter Priority Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-lg focus:outline-none focus:border-[#00f2fe] transition-colors font-mono rounded-none"
                  disabled={loading}
                />
                {error && (
                  <p className="text-rose-500 text-xs font-mono mt-1">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#00f2fe] text-black font-bold uppercase tracking-wider text-sm hover:bg-[#00d6e0] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : 'Claim Lifetime Access'}
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="inline-block text-xs font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-0.5 rounded">
                  Email Verified
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  High Demand Detection
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  Only 15 slots remaining for this exclusive initial server
                  cluster node. Click below to securely pre-authorize your deal
                  slot.
                </p>
              </div>
              <button
                onClick={handleStep2Submit}
                disabled={loading}
                className="w-full py-4 rounded-lg bg-transparent border border-[#00f2fe] text-[#00f2fe] font-bold uppercase tracking-widest text-xs hover:bg-[#00f2fe]/5 active:scale-98 transition-all flex items-center justify-center gap-3"
              >
                {loading
                  ? 'Securing Node...'
                  : '🔒 Lock In $15 Lifetime Deal Now'}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-center py-4 animate-scaleUp">
              <div className="w-12 h-12 rounded-full border border-neutral-700 mx-auto flex items-center justify-center text-xl text-neutral-400 font-mono">
                !
              </div>
              <h4 className="text-lg font-mono font-bold text-white uppercase tracking-wider">
                Cohort #01 Capped
              </h4>
              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                To guarantee maximum infrastructure stability, our initial
                allocation is locked. We have automatically flagged your profile{' '}
                <span className="text-[#00f2fe] font-mono">({email})</span> with
                priority alpha status. Watch your inbox closely for your early
                access invitation link.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
