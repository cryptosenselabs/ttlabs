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
        title="Third Leap Labs LLC | Premium Software Products" 
        description="Third Leap Labs LLC builds SaaS platforms, automation systems, Web3 utilities, and digital product infrastructure for teams that need practical technology with clear architecture."
      />
      
      {/* 1. Hero Section (Two-Column) */}
      <HeroSection 
        isMainPage={true}
        title={<>Building Software Products for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-indigo)]">Next Leap</span></>}
        subtitle="We build SaaS platforms, automation systems, and Web3 utilities. Practical technology with clear architecture for modern teams."
        primaryAction={{ text: "Explore Products", to: "/products" }}
        secondaryAction={{ text: "Contact Us", to: "/contact" }}
        rightContent={<HeroVisual />}
      />

      {/* 2. Trust Strip */}
      <section className="border-b border-[var(--color-border-main)] bg-[var(--color-section-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-[var(--color-muted-text)] font-semibold text-xs md:text-sm tracking-widest uppercase">
            <span className="flex items-center gap-2"><Globe className="w-4 h-4 opacity-70"/> SaaS Platforms</span>
            <span className="flex items-center gap-2"><Database className="w-4 h-4 opacity-70"/> Web3 Utilities</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 opacity-70"/> Payment Workflows</span>
            <span className="flex items-center gap-2"><Code className="w-4 h-4 opacity-70"/> Automation Systems</span>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="What We Build" 
          subtitle="Software platforms and digital utilities focused on practical workflows, real-world utility, and clear architecture."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <FeatureCard title="SaaS Platforms" description="Customer-facing and internal software platforms designed for workflows, dashboards, operations, data, and automation." icon={<Globe className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Web3 Utilities" description="Blockchain-enabled tools that focus on visibility, verification, payments, and user safety without misleading financial claims." icon={<Database className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Payment Software" description="Payment request flows, QR payments, receipts, verification workflows, and non-custodial payment infrastructure." icon={<Zap className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
          <FeatureCard title="Automation Systems" description="Tools that reduce manual work, connect data, improve operations, and help teams move faster with fewer errors." icon={<Code className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Community & Data Tools" description="Analytics, dashboards, monitoring, and community intelligence products for digital ecosystems." icon={<Network className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Product Prototypes" description="Early-stage product builds that help validate ideas before expanding into larger platforms." icon={<ShieldCheck className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-section-surface)] border-y border-[var(--color-border-main)] relative overflow-hidden">
        {/* Subtle background glow for products section */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Focused products for practical digital workflows"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <ProductCard 
              title="WhaleScanner"
              subtitle="Web3 wallet intelligence and visibility"
              description="WhaleScanner helps communities and builders understand on-chain activity with better context. Focuses on actionable data rather than noise."
              features={[
                "Wallet activity visibility",
                "Suspicious pattern awareness",
                "Whale movement tracking",
                "AI-assisted summaries"
              ]}
              icon={Database}
              to="/products/whalescanner"
              buttonText="Explore WhaleScanner"
              accentColorClass="text-[var(--color-accent-cyan)]"
              isFeatured={true}
            />
            <ProductCard 
              title="GoPaySol"
              subtitle="Solana payment links and QR workflows"
              description="GoPaySol helps freelancers and businesses create non-custodial payment requests quickly and verify settlements on-chain."
              features={[
                "Solana payment links",
                "QR code payments",
                "Payment verification",
                "Non-custodial flows"
              ]}
              icon={Zap}
              to="/products/gopaysol"
              buttonText="Explore GoPaySol"
              accentColorClass="text-[var(--color-accent-magenta)]"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* 5. Why Third Leap Labs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="Why Third Leap Labs" 
          subtitle="How we approach software architecture and product delivery."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <FeatureCard title="Product-first thinking" description="We begin with the problem, the user, and the purpose. Good software starts with clarity before code." icon={<Lightbulb className="w-6 h-6 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Senior architecture mindset" description="We design systems that are scalable, maintainable, and built on proven engineering patterns." icon={<Blocks className="w-6 h-6 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Security-aware design" description="Security isn't an afterthought. We build with clear boundaries and defensive programming." icon={<ShieldCheck className="w-6 h-6 text-[var(--color-accent-magenta)]" />} />
          <FeatureCard title="Clear communication" description="We keep you informed with transparent timelines, direct answers, and honest feedback." icon={<Globe className="w-6 h-6 text-[var(--color-accent-cyan)]" />} />
          <FeatureCard title="Practical delivery" description="We focus on shipping useful software that solves real problems, avoiding unnecessary complexity." icon={<CheckCircle2 className="w-6 h-6 text-[var(--color-accent-indigo)]" />} />
          <FeatureCard title="Long-term maintainability" description="Our codebases are built to be understood, extended, and supported long after the first launch." icon={<RefreshCw className="w-6 h-6 text-[var(--color-accent-magenta)]" />} />
        </div>
      </section>

      {/* 6. Trust & Safety */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-bg)] border-t border-[var(--color-border-main)] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <SectionHeading title="Trust is part of the product" />
            <div className="prose max-w-none text-lg text-[var(--color-secondary-text)] leading-relaxed">
              <p>
                Third Leap Labs treats trust, clarity, and security as absolute product requirements. Our Web3 products are built with clear boundaries. We do not engage in misleading financial claims or unnecessary risk.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 border border-red-500/20 bg-red-500/5 flex flex-col items-center justify-center text-center">
                <Lock className="w-8 h-8 text-red-400 mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No seed phrases</h4>
              </div>
              <div className="glass-card p-6 border border-red-500/20 bg-red-500/5 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-8 h-8 text-red-400 mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No private keys</h4>
              </div>
              <div className="glass-card p-6 border border-orange-500/20 bg-orange-500/5 flex flex-col items-center justify-center text-center">
                <Activity className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No financial guarantees</h4>
              </div>
              <div className="glass-card p-6 border border-orange-500/20 bg-orange-500/5 flex flex-col items-center justify-center text-center">
                <Network className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold text-[var(--color-primary-text)]">No trading signals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection 
        title="Have a product, platform, or Web3 utility to build?"
        description="Third Leap Labs can help shape the idea, define the architecture, and build the first serious version."
        buttonText="Start a Conversation"
        to="/contact"
      />
    </Layout>
  );
};
