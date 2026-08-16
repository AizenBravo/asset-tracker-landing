'use client';

import React from 'react';
import {
  terminalOutlineButton,
  terminalSubmitButton,
} from '@core/css-custom-classes/button';

interface Phase1CrowdfundModalProps {
  step: number;
  email: string;
  setEmail: (email: string) => void;
  loading: boolean;
  error: string;
  onStep1Submit: (e: React.FormEvent) => void;
  onStep2Submit: () => void;
}

export default function Phase1CrowdfundModal({
  step,
  email,
  setEmail,
  loading,
  error,
  onStep1Submit,
  onStep2Submit,
}: Phase1CrowdfundModalProps) {
  const totalSteps = 3;

  return (
    <div className="md:col-span-7 border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col justify-center relative z-10 min-h-[320px] shadow-lg">
      {/* Terminal Header Bar & Functional Step Counter */}
      <div className="absolute top-4 inset-x-6 flex items-center justify-between pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
          Terminal Step {String(step).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNum = index + 1;
            const isActive = stepNum === step;
            const isCompleted = stepNum < step;

            return (
              <div
                key={stepNum}
                title={`Step ${stepNum}`}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 rounded-full bg-teal-500 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.8)]'
                    : isCompleted
                    ? 'w-2 h-2 rounded-full bg-teal-600'
                    : 'w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-800'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Terminal Body Content */}
      <div className="pt-6">
        {step === 1 && (
          <form onSubmit={onStep1Submit} className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-mono">
                01 // Enter Priority Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-3 text-zinc-900 dark:text-white text-lg focus:outline-none focus:border-teal-500 transition-colors font-mono rounded-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                disabled={loading}
              />
              {error && (
                <p className="text-rose-500 text-xs font-mono mt-1 font-medium">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={terminalSubmitButton}
            >
              {loading ? 'Processing...' : 'Claim Lifetime Access'}
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="inline-block text-xs font-mono text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded">
                ✓ Email Verified
              </span>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-2 tracking-tight">
                High Demand Detection
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
                Only 15 slots remaining for this exclusive initial server
                cluster node. Click below to securely pre-authorize your deal
                slot.
              </p>
            </div>
            {error && (
              <p className="text-rose-500 text-xs font-mono mt-1 font-medium">
                {error}
              </p>
            )}
            <button
              onClick={onStep2Submit}
              disabled={loading}
              className={terminalOutlineButton}
            >
              {loading
                ? 'Securing Node...'
                : '🔒 Lock In $15 Lifetime Deal Now'}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center py-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 mx-auto flex items-center justify-center text-xl font-mono">
              ✓
            </div>
            <h4 className="text-lg font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Cohort #01 Capped
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              To guarantee maximum infrastructure stability, our initial
              allocation is locked. We have automatically flagged your profile{' '}
              <span className="text-teal-600 dark:text-teal-400 font-mono font-semibold">({email})</span> with
              priority alpha status. Watch your inbox closely for your early
              access invitation link.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
