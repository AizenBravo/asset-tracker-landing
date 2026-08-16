import {
  sectionHorizontalPadding,
  sectionVerticalPadding,
} from '@core/css-custom-classes/section';
import { EnumeratePipe } from '@core/helpers/enumerate.pipe';
import { Separator } from '@ui/separator';

import { Rocket } from 'lucide-react';
import { glassmorphism } from '@core/css-custom-classes/card';

const FooterV1 = ({ hasSeparator = true }: { hasSeparator?: boolean }) => {
  const contactEmail = '3gs.saegisul@gmail.com';
  const authors = ['Aizen Bravo', '3GS (Saegisul)'];
  return (
    <footer className={`${glassmorphism} mt-8 md:mt-12 w-full`}>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV1;
