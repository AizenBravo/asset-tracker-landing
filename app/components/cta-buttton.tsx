'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const CTAButton = ({
  children,
  href = '',
  onClick = null,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: ((data: any) => void) | null;
}) => {
  const router = useRouter();

  const handleNavigation = (data: any) => {
    // Check if the href variable exists and is not empty
    if (href) {
      console.log('Href: ', href);
      return router.push(href);
    } else {
      console.log('No Href');
    }
  };

  const handleClick = onClick || handleNavigation;

  return (
    <button
      onClick={(data) => handleClick(data)}
      className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-medium tracking-wide rounded-sm shadow-lg shadow-teal-600/20 dark:shadow-teal-900/30 transition-all duration-200 hover:-translate-y-0.5 text-center cursor-pointer"
    >
      {children}
    </button>
  );
};

export default CTAButton;
