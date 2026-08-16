import {
  sectionHorizontalPadding,
  sectionVerticalPadding,
} from '@core/css-custom-classes/section';
import { EnumeratePipe } from '@core/helpers/enumerate.pipe';
import { Separator } from '@ui/separator';

import { navbarConfig } from '@core/config/navbar-config';
import { Rocket } from 'lucide-react';
import { glassmorphism } from '@core/css-custom-classes/card';

// Footer navigation sections (can be extended later)
const footerNavSections = navbarConfig;

// const socialMediaLinks = [
//   { name: 'Twitter', href: '#', icon: Twitter },
//   { name: 'LinkedIn', href: '#', icon: LinkedIn },
// ];

const FooterV2 = ({ hasSeparator = true }: { hasSeparator?: boolean }) => {
  const contactEmail = '3gs.saegisul@gmail.com';
  const authors = ['Aizen Bravo', '3GS (Saegisul)'];
  return (
    <footer className={`${glassmorphism} mt-8 md:mt-12`}>
      {hasSeparator && <Separator />}
      <div
        className={`container mx-auto ${sectionHorizontalPadding} ${sectionVerticalPadding}`}
      >
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium mb-2">Contact us</h3>
          <p className="text-sm">Email: {contactEmail}</p>
          <p className="text-xs mt-2" style={{ color: 'var(--footer-muted)' }}>
            {EnumeratePipe.transform(authors)} &nbsp;{`—`}&nbsp; All rights
            reserved
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--footer-muted)' }}>
            © 2026 3GS. Powered by Saegisul Technologies.
          </p>
          {/* Modern icon for automation */}
          <div className="mt-4 flex items-center justify-center md:justify-start">
            <Rocket className="w-6 h-6" color="var(--footer-accent)" />
            {/* <span
                className="ml-2 text-sm"
                style={{ color: 'var(--footer-accent)' }}
              >
                Automation
              </span> */}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          Column 1 – Navigation */}
        {/* <nav
            aria-label="Footer navigation"
            className="flex flex-col space-y-2"
          >
            {footerNavSections.map((item, i) => (
              <a
                href={item.href}
                key={i}
                className="text-sm md:text-base"
                aria-label={item.title}
              >
                {item.title}
              </a>
            ))}
          </nav> */}
        {/* Column 2 – Contact & Credits */}
        {/* Column 3 – Social Media (commented out) */}
        {/*
          <div className="hidden md:flex flex-col space-y-2">
            {socialMediaLinks.map((s) => (
              <a href={s.href} key={s.name} aria-label={s.name} rel="noopener noreferrer" className="text-sm hover:underline flex items-center">
                <s.icon className="inline w-5 h-5 mr-1" /> {s.name}
              </a>
            ))}
          </div>
          */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default FooterV2;
