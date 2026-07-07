import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { HeroVisual } from '../components/ui/HeroVisual';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Code, Database, Globe, Network, ShieldCheck, Zap, Lock, Lightbulb, Blocks, CheckCircle2, RefreshCw, Activity } from 'lucide-react';

export const Home = () => {
  return (
    <Layout>
      <SEO 
        title="Third Leap Labs LLC | Software Solutions" 
        description="Third Leap Labs LLC builds software solutions around blockchain, payments, SaaS, automation, and digital platforms."
      />
      
      {/* 1. Hero Section */}
      <HeroSection 
        isMainPage={true}
        eyebrow="Blockchain-aware software engineering"
        title={
          <>
            Software Solutions <br/>
            for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Next Digital Leap</span>
          </>
        }
        subtitle="Third Leap Labs LLC designs and builds blockchain-enabled platforms, Web3 utilities, payment workflows, SaaS systems, and automation solutions for modern digital ecosystems."
        supportingLine="We help ideas move from concept to working software through product thinking, architecture, blockchain engineering, and practical implementation."
        primaryAction={{ text: "Explore Solutions", to: "/solutions" }}
        secondaryAction={{ text: "Contact Third Leap Labs", to: "/contact" }}
        rightContent={<HeroVisual />}
      />

      {/* 2. Trust Strip (What We Build) */}
      <section className="border-b border-[var(--color-border-main)] bg-[var(--color-section-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[var(--color-secondary-text)] font-medium text-sm text-center">
            <span className="flex items-center gap-1.5 justify-center"><Globe className="w-3.5 h-3.5 opacity-70"/> SaaS Platforms</span>
            <span className="flex items-center gap-1.5 justify-center"><Database className="w-3.5 h-3.5 opacity-70"/> Blockchain Engineering</span>
            <span className="flex items-center gap-1.5 justify-center"><Zap className="w-3.5 h-3.5 opacity-70"/> Payment Systems</span>
            <span className="flex items-center gap-1.5 justify-center"><Code className="w-3.5 h-3.5 opacity-70"/> Automation</span>
          </div>
        </div>
      </section>

      {/* 3. Solution Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="Solutions around blockchain, payments, SaaS, and automation" 
          subtitle="We help ideas move from concept to working software by combining product thinking, software architecture, blockchain engineering, and practical implementation."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <FeatureCard title="Blockchain-Enabled Platforms" description="We design and build blockchain-aware software systems that support visibility, verification, wallet-aware workflows, and Web3 integrations without unnecessary hype." icon={<Database className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Web3 Utilities" description="We build practical utilities for communities, builders, and digital ecosystems, including wallet intelligence, safety workflows, and on-chain visibility tools." icon={<Globe className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Payment Systems" description="We create payment request flows, QR payments, receipt records, and non-custodial payment workflow software for blockchain-based payment use cases." icon={<Zap className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
          <FeatureCard title="SaaS Platforms" description="We build dashboards, portals, admin systems, workflow platforms, and cloud-based applications for businesses and product teams." icon={<Network className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Automation Systems" description="We help reduce manual work by connecting tools, data, and workflows into reliable software systems." icon={<Code className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Data and Intelligence Tools" description="We build systems that organize complex information into clearer dashboards, summaries, alerts, and operational views." icon={<Activity className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
        </div>
      </section>

      {/* 4. Internal Labs and Initiatives */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-section-surface)] border-y border-[var(--color-border-main)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Labs and internal initiatives" 
            subtitle="Third Leap Labs also develops internal initiatives that explore specific use cases in blockchain intelligence, payment workflows, and software automation."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
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
              buttonText="View WhaleScanner Initiative"
              accentColorClass="text-[var(--color-accent-cyan)]"
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
              buttonText="View GoPaySol Initiative"
              accentColorClass="text-[var(--color-accent-magenta)]"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* 5 & 6. How We Work & Why Third Leap Labs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="Why Third Leap Labs" 
          subtitle="How we approach software architecture and product delivery."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <FeatureCard title="Understand the problem" description="Every solution begins with a clear understanding of the real-world workflow." icon={<Lightbulb className="w-6 h-6 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Shape the solution" description="We design practical interfaces and logical data models before writing code." icon={<Blocks className="w-6 h-6 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Define the architecture" description="We choose maintainable, modern tech stacks tailored to the project's scale." icon={<ShieldCheck className="w-6 h-6 text-[var(--color-accent-magenta)]" />} />
          <FeatureCard title="Build the first serious version" description="We focus on shipping reliable, working software over endless prototyping." icon={<Globe className="w-6 h-6 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Validate the workflow" description="We ensure the system actually solves the problem in production environments." icon={<CheckCircle2 className="w-6 h-6 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Improve and scale" description="Software is iteratively refined and strengthened as usage grows." icon={<RefreshCw className="w-6 h-6 text-[var(--color-accent-magenta)]" />} />
        </div>
      </section>

      {/* 7. Trust & Security */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-bg)] border-t border-[var(--color-border-main)] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <SectionHeading title="Trust is part of the architecture" />
            <div className="prose max-w-none text-lg text-[var(--color-secondary-text)] leading-relaxed">
              <p>
                Third Leap Labs treats trust, clarity, and security as absolute engineering requirements. Our Web3 and payment solutions are built with clear boundaries. We do not engage in misleading financial claims or unnecessary risk.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <Lock className="w-8 h-8 text-[var(--color-accent-cyan)] mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No seed phrases</h4>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-8 h-8 text-[var(--color-accent-cyan)] mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No private keys</h4>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <Activity className="w-8 h-8 text-[var(--color-accent-indigo)] mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No financial guarantees</h4>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <Network className="w-8 h-8 text-[var(--color-accent-indigo)] mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No trading signals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection 
        title="Looking for a software engineering partner?"
        description="We can help shape the idea, define the architecture, and build the first serious version of your platform."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
