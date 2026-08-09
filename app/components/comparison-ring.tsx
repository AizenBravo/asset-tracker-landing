'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ComparisonItem } from '@/app/interfaces/comparison-item';

interface ComparisonRingProps {
  items: ComparisonItem[];
}

export default function ComparisonRing({ items }: ComparisonRingProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Fixed radius for the circular layout on desktop screens
  const radius = 240;

  return (
    <section className="relative w-full py-20 px-6 bg-white dark:bg-black overflow-hidden flex flex-col items-center justify-center transition-colors duration-300">
      {/* Dynamic Heading Anchor */}
      {/* <div className="text-center max-w-md mx-auto mb-16 space-y-3">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-mono">
          The Pivot To Clarity
        </h2>
        <p className="text-xs tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
          Click the controls to rotate through core workflow comparisons
        </p>
      </div> */}

      {/* Main Structural Container */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center min-h-[580px]">
        {/* ========================================================================= */}
        {/* 1. ARCHITECTURAL SPINNING RING (Desktop Only: Large Screens & Above)       */}
        {/* ========================================================================= */}
        <div className="hidden md:block relative w-[600px] h-[600px] flex items-center justify-center">
          {/* Subtle Structural Track Ring */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none transform -rotate-90"
            viewBox="0 0 600 600"
          >
            <circle
              cx="300"
              cy="300"
              r={radius}
              fill="none"
              // className="stroke-zinc-200/40 dark:stroke-zinc-800/40"
              className="stroke-zinc-800/40  dark:stroke-zinc-200/40"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
          </svg>

          {/* Satellite Orbit Cards */}
          {items.map((item, index) => {
            // Desktop active state check
            const isActive = index === activeIndex;

            // Calculate rotational math positioning relative to active pointer
            // 0 degrees corresponds to the exact top point of our circle coordinate field
            const baseAngle = (index - activeIndex) * (360 / totalItems);
            const correctedAngle = baseAngle - 90;
            const radians = (correctedAngle * Math.PI) / 180;

            const x = Math.cos(radians) * radius;
            const y = Math.sin(radians) * radius;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-20 h-20 rounded-md flex items-center justify-center cursor-pointer transition-all duration-700 ease-out border shadow-md select-none z-30
                  ${
                    isActive
                      ? 'bg-zinc-900 border-zinc-700 text-white dark:bg-zinc-50 dark:border-white dark:text-black scale-110 shadow-xl opacity-100 z-40'
                      : 'bg-white/40 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md text-zinc-400 dark:text-zinc-600 opacity-40 hover:opacity-70 scale-95'
                  } left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="transform transition-transform duration-700 ease-out">
                  {item.collapsedNode}
                </div>
              </div>
            );
          })}

          {/* Central Showcase Anchor Frame (Expanded Element View) */}
          <div className="absolute w-[340px] h-[340px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 rounded-lg p-6 shadow-2xl flex flex-col justify-center items-center z-20 text-center font-sans transition-all duration-500 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {/* bg-zinc-50 dark:bg-zinc-950 */}
            {items[activeIndex].expandedNode}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ADAPTIVE FLATTENED INTERFACE (Mobile & Tablet Screen Viewports)         */}
        {/* ========================================================================= */}
        <div className="md:hidden w-full max-w-md flex flex-col items-center space-y-6">
          {/* Active Condensed Indicator Node */}
          <div className="w-24 h-24 rounded-md bg-zinc-900 border border-zinc-700 text-white dark:bg-zinc-50 dark:border-white dark:text-black shadow-xl flex items-center justify-center scale-105 transition-all duration-300">
            {items[activeIndex].collapsedNode}
          </div>

          {/* Mobile Text Content Container */}
          <div className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-md p-6 shadow-lg min-h-[260px] flex flex-col justify-center items-center text-center">
            {items[activeIndex].expandedNode}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ROTATIONAL UTILITY CONTROLS (Unified Global Position Interface)         */}
        {/* ========================================================================= */}
        <div className="mt-8 lg:absolute lg:mt-0 lg:bottom-4 flex items-center space-x-6 z-40 select-none">
          <button
            onClick={handlePrev}
            aria-label="Rotate view counter-clockwise"
            className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-teal-500 dark:hover:border-teal-500 rounded-full bg-white dark:bg-zinc-900 transition-all duration-200 shadow-md active:scale-95 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Tracker Breadcrumbs indicating sequence depth status */}
          <div className="flex space-x-1.5 px-2">
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-teal-500' : 'w-1.5 bg-zinc-200 dark:bg-zinc-800'}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Rotate view clockwise"
            className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-teal-500 dark:hover:border-teal-500 rounded-full bg-white dark:bg-zinc-900 transition-all duration-200 shadow-md active:scale-95 group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
