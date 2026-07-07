import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { ArchitectureStackVisual } from '../components/ui/ArchitectureStackVisual';
import { FeatureCard } from '../components/ui/FeatureCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Database, Zap, Globe, Network, Code, Activity, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';

export const Solutions = () => {
  return (
    <Layout>
      <SEO 
        title="Software Solutions | Blockchain, Payments, SaaS and Automation" 
        description="Third Leap Labs LLC designs and builds blockchain-enabled platforms, Web3 utilities, payment workflows, SaaS systems, and automation solutions."
      />
      
      <ModernPageHeader 
        eyebrow="What We Build"
        title="Software Solutions"
        subtitle="We build reliable systems across blockchain, payments, SaaS, and internal automation."
        rightVisual={<ArchitectureStackVisual />}
        theme="light"
      />

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto space-y-16">
        {/* Intro Section */}
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-[28px] font-bold text-[#0F172A]">Why we build internally</h2>
          </div>
          <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
            Third Leap Labs explores architecture patterns and Web3 boundaries through internal initiatives. This allows us to test assumptions, build robust templates, and understand the real friction points in blockchain integrations and payment workflows.
          </p>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            WhaleScanner and GoPaySol act as proving grounds for our engineering standards, ensuring that when we partner with clients, we are building on battle-tested concepts.
          </p>
        </section>

        {/* Internal Labs and Initiatives */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductCard 
              title="WhaleScanner"
              subtitle="Web3 wallet intelligence and visibility"
              description="WhaleScanner is an internal Web3 intelligence initiative focused on wallet activity visibility, whale movement monitoring, suspicious pattern awareness, and AI-assisted wallet behavior summaries."
              features={[
                "Wallet activity visibility",
                "Suspicious pattern awareness",
                "Whale movement monitoring",
                "AI-assisted summaries"
              ]}
              icon={Database}
              to="/labs/whalescanner"
              buttonText="View initiative"
              accentColorClass="text-cyan-600"
              isFeatured={true}
            />
            <ProductCard 
              title="GoPaySol"
              subtitle="Solana payment links and QR workflows"
              description="GoPaySol is an internal payment workflow initiative focused on Solana payment links, QR payment requests, receipt records, and non-custodial payment verification flows."
              features={[
                "Solana payment links",
                "QR code payment requests",
                "Payment verification flows",
                "Non-custodial workflows"
              ]}
              icon={Zap}
              to="/labs/gopaysol"
              buttonText="View initiative"
              accentColorClass="text-indigo-600"
              isFeatured={true}
            />
          </div>
        </section>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeading 
            title="What We Build" 
            subtitle="Software solutions around blockchain, payments, SaaS, and automation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <FeatureCard 
              title="Blockchain Platforms" 
              description="We design and build blockchain-aware software systems that support visibility, verification, wallet-aware workflows, and Web3 integrations without unnecessary hype." 
              icon={<Database className="w-6 h-6 text-cyan-600" />} 
            />
            <FeatureCard 
              title="Payment Systems" 
              description="We create payment request flows, QR payments, receipt records, and non-custodial payment workflow software for blockchain-based payment use cases." 
              icon={<Zap className="w-6 h-6 text-blue-600" />} 
            />
            <FeatureCard 
              title="SaaS & Web Platforms" 
              description="We build dashboards, portals, admin systems, workflow platforms, and cloud-based applications for businesses and product teams." 
              icon={<Network className="w-6 h-6 text-cyan-600" />} 
            />
            <FeatureCard 
              title="Automation & Internal Tools" 
              description="We help reduce manual work by connecting tools, data, and workflows into reliable internal software systems." 
              icon={<Code className="w-6 h-6 text-indigo-600" />} 
            />
            <FeatureCard 
              title="Web3 Intelligence Utilities" 
              description="We build practical utilities for communities, builders, and digital ecosystems, including wallet intelligence and on-chain visibility tools." 
              icon={<Globe className="w-6 h-6 text-indigo-600" />} 
            />
            <FeatureCard 
              title="Technical Architecture and Delivery" 
              description="We help teams design system data models, API connections, and integration boundaries before building reliable production software." 
              icon={<Activity className="w-6 h-6 text-blue-600" />} 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionHeading 
              title="Architecture Approach" 
              subtitle="Software should be maintainable, secure, and built for the actual problem at hand."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card p-8 border-l-4 border-l-blue-500">
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">Pragmatic Tech Stacks</h3>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                We prefer stable, well-understood technologies over unproven hype. Whether it’s a modern frontend framework, a scalable backend architecture, or a targeted blockchain integration, the tech stack is chosen based on what scales safely and is easy to maintain.
              </p>
            </div>
            <div className="modern-card p-8 border-l-4 border-l-indigo-500">
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">Security by Design</h3>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                Security isn't a feature added at the end. For Web3 systems, this means strict non-custodial boundaries. For SaaS platforms, it means proper authentication, role-based access, and secure data handling from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to build?"
        description="Whether you need a blockchain integration, a payment workflow, or a custom SaaS platform, Third Leap Labs is ready to partner with you."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
