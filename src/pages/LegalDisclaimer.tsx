import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const LegalDisclaimer = () => {
  return (
    <Layout>
      <SEO 
        title="Legal Disclaimer | Third Leap Labs LLC" 
        description="Legal disclaimer regarding the software products, technology services, and digital utilities provided by Third Leap Labs LLC."
      />
      
      <HeroSection 
        title="Legal Disclaimer"
        subtitle="Third Leap Labs LLC provides software products, technology services, informational tools, and digital utilities. The content on this website is provided for general informational purposes only."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed space-y-12">
        <div>
          <SectionHeading title="No Financial Advice" />
          <p>
            Nothing on this website should be interpreted as financial advice, investment advice, trading advice, legal advice, 
            tax advice, or any recommendation to buy, sell, hold, or trade any asset.
          </p>
        </div>

        <div>
          <SectionHeading title="Web3 Tools" />
          <p>
            Web3-related products, including WhaleScanner and GoPaySol, are provided as software tools. WhaleScanner is intended 
            for informational wallet and on-chain activity visibility. It does not provide trading signals, price predictions, 
            investment recommendations, or guarantees.
          </p>
        </div>

        <div>
          <SectionHeading title="Non-Custodial Position" />
          <p>
            GoPaySol is intended to support payment workflows and verification. It is designed as a non-custodial tool and does not 
            hold user funds or request private keys, seed phrases, or wallet recovery information.
          </p>
        </div>

        <div>
          <SectionHeading title="User Responsibility" />
          <p>
            Users are responsible for their own decisions, wallet security, compliance obligations, and independent research.
          </p>
        </div>

        <div>
          <SectionHeading title="No Guarantees" />
          <p>
            Third Leap Labs LLC does not guarantee uninterrupted service, error-free data, financial outcomes, business outcomes, 
            or specific product availability.
          </p>
        </div>
      </section>
    </Layout>
  );
};
