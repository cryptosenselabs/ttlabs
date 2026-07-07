import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { ArchitectureStackVisual } from '../components/ui/ArchitectureStackVisual';
import { FeatureCard } from '../components/ui/FeatureCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Database, Zap, Globe, Network, Code, Activity } from 'lucide-react';

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

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            title="Data & Operational Views" 
            description="We build systems that organize complex information into clearer dashboards, summaries, alerts, and operational views." 
            icon={<Activity className="w-6 h-6 text-blue-600" />} 
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
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
