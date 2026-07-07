import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const SecurityNotice = () => {
  return (
    <Layout>
      <SEO 
        title="Security Notice | Third Leap Labs LLC" 
        description="Security is a core part of how Third Leap Labs thinks about software products."
      />
      
      <HeroSection 
        title="Security Notice"
        subtitle="Security is a core part of how Third Leap Labs thinks about software products."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed space-y-12">
        <div>
          <SectionHeading title="Important Security Rules" />
          <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-white)] font-medium">
            <li className="text-red-400">Third Leap Labs will never ask for your seed phrase.</li>
            <li className="text-red-400">Third Leap Labs will never ask for your private key.</li>
            <li className="text-red-400">Third Leap Labs will never ask for your wallet recovery phrase.</li>
            <li>Third Leap Labs will never ask you to transfer funds to verify your identity.</li>
            <li>Third Leap Labs will never guarantee financial returns.</li>
          </ul>
        </div>

        <div>
          <SectionHeading title="Web3 Safety" />
          <p>
            Always verify URLs, wallet prompts, payment requests, and official communication channels. Be cautious with unknown links, 
            impersonators, fake support accounts, and unexpected wallet connection requests.
          </p>
        </div>

        <div>
          <SectionHeading title="Product Boundaries" />
          <p>
            WhaleScanner is informational and does not provide trading advice. GoPaySol is designed for non-custodial payment workflows 
            and does not hold user funds.
          </p>
        </div>

        <div>
          <SectionHeading title="Reporting" />
          <p>
            If you believe someone is impersonating Third Leap Labs or misusing the brand, contact <a href="mailto:info@thirdleaplabs.com" className="text-[var(--color-accent-cyan)] hover:underline">info@thirdleaplabs.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};
