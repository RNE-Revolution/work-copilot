import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FeiAssets } from '@fei/design-system';
import './site.css';
import { SiteHeader } from './Header';
import { Hero } from './Hero';
import { Quote, Services } from './Services';
import { Process } from './Process';
import { Dashboard } from './Dashboard';
import { Testimonials } from './Testimonials';
import { FaqContact } from './FaqContact';
import { SiteFooter } from './Footer';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <FeiAssets base="./assets">
      <SiteHeader />
      <main>
        <Hero />
        <Quote />
        <Services />
        <Process />
        <Dashboard />
        <Testimonials />
        <FaqContact />
      </main>
      <SiteFooter />
    </FeiAssets>
  </StrictMode>,
);
