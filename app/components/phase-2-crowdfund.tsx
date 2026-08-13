import { useEffect, useState } from 'react';

// --- CONFIGURATION FOR LIVE PRE-SALE ---
const FUNDING_GOAL = 15;
const CURRENT_BACKERS = 11; // Wire up this value to your live database count later
const PADDLE_PRICE_ID = 'pri_0123456789abcdef'; // Replace with your real live Paddle product ID

export default function Phase2Crowdfund() {
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Smooth progress animation on mount
    const calc = Math.min((CURRENT_BACKERS / FUNDING_GOAL) * 100, 100);
    const timer = setTimeout(() => setProgressPercent(calc), 200);
    return () => clearTimeout(timer);
  }, []);

  const handlePaddleCheckout = () => {
    setLoading(true);
    // Ensure you have initialized Paddle.js in your root layouts or head scripts
    // if (window.Paddle) {
    //   window.Paddle.Checkout.open({
    //     items: [{ priceId: PADDLE_PRICE_ID, quantity: 1 }],
    //     successCallback: (data) => {
    //       console.log('Success payment data:', data);
    //       setLoading(false);
    //     },
    //     closeCallback: () => setLoading(false),
    //   });
    // } else {
    //   alert(
    //     'Paddle SDK failed to load. Please check your tracking blocker scripts.',
    //   );
    //   setLoading(false);
    // }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-24 font-sans text-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch border border-[#00f2fe]/20 bg-neutral-950 p-6 md:p-10 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.03)]">
        {/* Left Side: Campaign Text copy (6 Cols) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-8 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
              ⏳ Join the Founders Circle (21 Days Only)
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Live Crowdfunded <br />
              Launch Tracker
            </h3>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              We build 100% in public. We need exactly {FUNDING_GOAL} backing
              founders to fully guarantee our dedicated cloud database and
              secure API hosting costs.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl space-y-2">
            <p className="text-xs text-neutral-400 leading-relaxed font-mono">
              <span className="text-white font-bold">
                🛡️ Transparency Banner:
              </span>{' '}
              If the node objective fails to reach its baseline target within 21
              days, your $15 funding transaction is instantly and automatically
              returned to your card balance via Paddle with zero platform
              deductions. Full safety, complete visibility.
            </p>
          </div>
        </div>

        {/* Right Side: Live Metrics Gauge & Checkout Hook (6 Cols) */}
        <div className="md:col-span-6 border border-neutral-800 bg-neutral-900/20 rounded-xl p-6 md:p-8 flex flex-col justify-center space-y-8 z-10 relative">
          {/* Dynamic Progress Tracker block */}
          <div className="space-y-3">
            <div className="flex justify-between items-end font-mono text-xs text-neutral-400">
              <span>METRIC NODE STATUS</span>
              <span className="text-white font-bold">
                {CURRENT_BACKERS} / {FUNDING_GOAL} BACKERS
              </span>
            </div>

            {/* Custom Minimal Progress Track */}
            <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <div
                className="h-full bg-gradient-to-r from-[#00f2fe] to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(0,242,254,0.4)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
              <span>0% CAP</span>
              <span>{Math.round(progressPercent)}% FUNDED</span>
              <span>100% DEPLOYED</span>
            </div>
          </div>

          {/* Pricing Box & Real Button Checkout */}
          <div className="border-t border-neutral-800/80 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-black text-white">$15.00</div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-tight">
                Lifetime Founders Deal
              </div>
            </div>

            <button
              onClick={handlePaddleCheckout}
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00f2fe] text-black font-bold uppercase tracking-wider text-xs hover:bg-[#00d6e0] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all disabled:opacity-50"
            >
              {loading ? 'Initializing Gateway...' : 'Back This Project'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
