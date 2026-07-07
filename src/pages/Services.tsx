import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const Services = () => {
  return (
    <Layout>
      <SEO 
        title="Services | SaaS, Web3, Automation and Product Development" 
        description="Third Leap Labs helps founders, product teams, and businesses design, build, and modernize software products with a practical architecture-first mindset."
      />
      
      <HeroSection 
        title="Services"
        subtitle="Third Leap Labs helps founders, product teams, and businesses design, build, and modernize software products with an architecture-first mindset."
      />

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-[var(--color-muted-text)] leading-relaxed">
        <p>
          We support product work from early idea to implementation. Our services are useful for teams that need clear technical direction, product structure, reliable engineering, and practical delivery.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="What We Offer" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <FeatureCard title="SaaS Product Development" description="Design and build SaaS platforms, dashboards, customer portals, workflow tools, and cloud-based product systems." />
          <FeatureCard title="Web Application Development" description="Create modern web applications with clean front-end architecture, responsive interfaces, and maintainable code." />
          <FeatureCard title="Web3 Utility Development" description="Build blockchain-enabled tools for visibility, payments, verification, and community workflows with responsible safety boundaries." />
          <FeatureCard title="Payment Workflow Software" description="Design payment request flows, QR payment systems, receipt records, and verification workflows." />
          <FeatureCard title="Automation Systems" description="Automate repetitive manual processes and connect disconnected workflows through practical software." />
          <FeatureCard title="Technical Architecture Consulting" description="Help teams choose better architecture, avoid unnecessary complexity, and plan for long-term maintainability." />
          <FeatureCard title="MVP to Production Planning" description="Move from prototype to reliable product with clearer scope, stronger technical foundations, and realistic milestones." />
          <FeatureCard title="Product Modernization" description="Improve older software systems, user interfaces, workflows, and architecture to support future growth." />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="How We Work" />
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-cyan)] text-black font-bold flex items-center justify-center flex-shrink-0">1</div>
                <div><h3 className="font-bold text-lg">Understand the problem</h3></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-indigo)] text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
                <div><h3 className="font-bold text-lg">Shape the product direction</h3></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-magenta)] text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
                <div><h3 className="font-bold text-lg">Define the architecture</h3></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-cyan)] text-black font-bold flex items-center justify-center flex-shrink-0">4</div>
                <div><h3 className="font-bold text-lg">Build the first serious version</h3></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-indigo)] text-white font-bold flex items-center justify-center flex-shrink-0">5</div>
                <div><h3 className="font-bold text-lg">Validate and improve</h3></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-magenta)] text-white font-bold flex items-center justify-center flex-shrink-0">6</div>
                <div><h3 className="font-bold text-lg">Prepare for scale and maintainability</h3></div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading title="Best Fit Clients" />
            <div className="space-y-4 mt-8">
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Founders building early products</div>
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Product teams needing technical execution</div>
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Businesses modernizing workflows</div>
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Web3 teams needing responsible tools</div>
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Communities needing safer visibility tools</div>
              <div className="glass-card p-4 border-l-4 border-l-[var(--color-text-white)] text-[var(--color-text-white)] font-medium">Small teams needing automation</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need help building a practical software product?"
        buttonText="Start a Conversation"
        to="/contact"
      />
    </Layout>
  );
};
