import Link from 'next/link';
import React from 'react';

const CTAButton = ({
  children,
  href = '',
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link href={href} className="flex items-center justify-center">
      <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-medium tracking-wide rounded-sm shadow-lg shadow-teal-600/20 dark:shadow-teal-900/30 transition-all duration-200 hover:-translate-y-0.5 text-center cursor-pointer">
        {children}
      </button>
    </Link>
  );
};

export default CTAButton;
