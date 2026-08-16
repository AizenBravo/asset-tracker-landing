'use client';

import { primaryCtaButton } from '@core/css-custom-classes/button';
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
      className={primaryCtaButton}
    >
      {children}
    </button>
  );
};

export default CTAButton;
