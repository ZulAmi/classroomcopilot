import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';
import { Footer } from './Footer';

interface WebsiteHomepageProps {
  includeFooter?: boolean;
}

export const WebsiteHomepage: React.FC<WebsiteHomepageProps> = ({ includeFooter = true }) => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      {includeFooter && <Footer />}
    </>
  );
};
