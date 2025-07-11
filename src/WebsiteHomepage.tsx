import React from 'react';
import { Navbar } from './Navbar.tsx';
import { Hero } from './Hero.tsx';
import { Features } from './Features.tsx';
import { Testimonials } from './Testimonials.tsx';
import { CTA } from './CTA.tsx';
import { Footer } from './Footer.tsx';

export const WebsiteHomepage: React.FC = () => {
  return (
    <div className="website-homepage">
      <Navbar />
      <main className="website-content">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
