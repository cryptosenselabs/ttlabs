import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const Solutions = () => {
  return (
    <Layout>
      <SEO 
        title="Software Solutions | Third Leap Labs LLC" 
        description="We build practical software systems around blockchain, payments, automation, SaaS, and digital operations."
      />
      
      <HeroSection 
        title="Software Solutions"
        subtitle="We build practical software systems around blockchain, payments, automation, SaaS, and digital operations."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border-main)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Solution Areas" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard 
              title="Blockchain Solutions" 
              description="Third Leap Labs builds blockchain-enabled software for real-world workflows. This may include wallet-aware applications, transaction visibility, token activity tools, verification layers, and Web3 user interfaces." 
            />
            <FeatureCard 
              title="Payment Workflow Systems" 
              description="We build payment software around payment links, QR payment requests, receipt records, transaction status tracking, and non-custodial payment flows." 
            />
            <FeatureCard 
              title="SaaS and Web Platforms" 
              description="We design and build modern SaaS platforms, dashboards, portals, admin tools, workflow systems, and customer-facing web applications." 
            />
            <FeatureCard 
              title="Automation and Internal Tools" 
              description="We help businesses reduce repetitive manual work by building automation systems, internal tools, and integrations." 
            />
            <FeatureCard 
              title="Web3 Intelligence Utilities" 
              description="We build tools that help users and teams understand on-chain activity with more context while maintaining responsible boundaries." 
            />
            <FeatureCard 
              title="Technical Architecture and Product Delivery" 
              description="We help shape software from idea to architecture to first serious version." 
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Looking for a technical partner?"
        description="Third Leap Labs can help move an idea from early concept to structured architecture and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
