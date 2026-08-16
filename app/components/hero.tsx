import React from 'react';

const Hero = () => {
  // const headline = `Stop Wrestling with Excel. Get Audit-Ready Crypto FIFO Reports in 60 Seconds.`;
  const headline = `Audit-Ready Crypto FIFO Reports in 60 Seconds.`;
  const subheadline = `Ditch the messy spreadsheets. Log your transactions and download a PDF P&L report for tax season.`;
  const cta = `Secure Lifetime Access`;

  return (
    <section className="flex flex-col items-center text-center pt-20 pb-10 space-y-6 container max-w-5xl">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {headline}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subheadline}</p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors">
        {cta}
      </button>
    </section>
  );
};

export default Hero;
