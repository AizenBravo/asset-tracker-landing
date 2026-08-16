'use client';

import React, { useState, useEffect } from 'react';
import CTAButton from './cta-buttton';
import { secondaryCtaButton } from '@core/css-custom-classes/button';
import {
  bodyParagraph,
  heroTitle,
  monoBadge,
} from '@core/css-custom-classes/text';

const HeroV2 = () => {
  // const headline = `Stop Wrestling with Excel. Get Audit-Ready Crypto FIFO Reports in 60 Seconds.`;
  const headline = {
    part1: 'Stop Wrestling with Excel.',
    highlight: 'Get Audit-Ready',
    part2: 'Reports in 60s.',
  };
  const subheadline = `Ditch the messy spreadsheets. Log your transactions and download a PDF P&L report for tax season.`;
  const cta = `Secure Lifetime Access`;

  const demoVideoSource = '/assets/videos/demo_comp_v2.mp4';
  const [videoBlobUrl, setVideoBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let createdUrl: string | null = null;

    fetch(demoVideoSource)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        if (!isMounted) return;
        const mp4Blob = new Blob([blob], { type: 'video/mp4' });
        createdUrl = URL.createObjectURL(mp4Blob);
        setVideoBlobUrl(createdUrl);
      })
      .catch((err) => {
        console.error('Failed to load video blob:', err);
      });

    return () => {
      isMounted = false;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [demoVideoSource]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-zinc-50 flex items-center">
      {/* Dynamic Speed-Line Background (Minimalist, non-distracting) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(45deg,transparent_45%,#008080_50%,transparent_55%)] bg-[size:60px_60px]" />

      {/* Subtle Color Aura behind text to add depth without looking "rainbow" */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none dark:bg-teal-500/5" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copy & Core Proposition (7 Cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Small subtle tag indicating the speed focus */}
            <div className={monoBadge}>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span>Instant FIFO Generation</span>
            </div>

            <h1 className={heroTitle}>
              Stop Wrestling with Excel. <br />
              <span className="bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 bg-clip-text text-transparent dark:from-yellow-600 dark:via-amber-100 dark:to-yellow-600">
                Get Audit-Ready
              </span>{' '}
              Reports in 60s.
            </h1>

            <p className={`${bodyParagraph} max-w-xl`}>
              Ditch messy spreadsheets. Manually log your altcoin buys and
              sells, track cost basis automatically, and download a flawless PDF
              profit/loss report for tax season.
            </p>

            {/* Action Buttons using your Palette */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <CTAButton href="#presale-form">{cta}</CTAButton>
              <a href="#crowdfund-section" className={secondaryCtaButton}>
                See Campaign Goals
              </a>
            </div>
          </div>

          {/* Column 2: The Fast Product Demo Container (5 Cols on large screens) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            {/* Speed Slash Shape Frame to break the rectangle pattern */}
            <div className="relative w-full max-w-[680px] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 p-3 rounded-lg overflow-hidden group shadow-2xl">
              {/* Internal Accent Lines to draw eyes to the video */}
              <div className="absolute top-0 right-0 h-16 w-[1px] bg-teal-500/40" />
              <div className="absolute bottom-0 left-0 h-16 w-[1px] bg-amber-500/40" />

              {/* Main Video/GIF Content Window */}
              <div className="w-full h-full relative overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-950 flex items-center justify-center border border-zinc-300/40 dark:border-zinc-900">
                {/* YOUR DEMO FILE REPLACES THIS */}
                {/* <video src="/demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" /> */}
                <video
                  src={videoBlobUrl || demoVideoSource}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                />

                {/* Placeholder graphic showing layout intent */}
                {/* <div className="text-center p-6 space-y-3 font-mono opacity-60">
                  <div className="text-teal-600 dark:text-teal-400 text-2xl font-bold">
                    ▶ APP DEMO GIF
                  </div>
                  <p className="text-xs text-zinc-500">
                    Inputs Data → Generates PDF → Shows Clean Report Outcomes
                  </p>
                </div> */}

                {/* Subtle speed-blur lighting indicator at the bottom of the video */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70 group-hover:scale-x-110 transition-transform duration-700 pointer-events-none" />
              </div>
            </div>

            {/* Micro Badge floating near the video to build trust */}
            <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 rounded shadow-xl flex items-center space-x-3 font-mono text-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                PDF Engine: Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
