import React from 'react';
import { ArchitectureStackVisual } from '../components/ui/ArchitectureStackVisual';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Code, Database, Globe, Network, ShieldCheck, Zap, Lock, Lightbulb, Blocks, CheckCircle2, RefreshCw, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Layout>
      <SEO 
        title="Third Leap Labs LLC | Software Solutions for the Next Digital Leap" 
        description="Third Leap Labs LLC builds software solutions around blockchain, payments, SaaS, automation, and digital platforms."
      />
      
      {/* 1. Hero Section (Light-First with Navy Right Card) */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative bg-[#F8FAFC]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
            
            <div className="flex-1 max-w-2xl">
              <p className="text-[14px] font-bold uppercase tracking-wider text-blue-600 mb-4">
                Blockchain-aware software engineering
              </p>
              <h1 className="hero-title font-bold text-[#0F172A] mb-6">
                Software Solutions <br />
                for the <span className="text-blue-600">Next Digital Leap</span>
              </h1>
              <p className="text-[18px] text-[#475569] leading-relaxed mb-8 max-w-xl">
                Third Leap Labs LLC designs and builds blockchain-enabled platforms, payment workflows, SaaS systems, automation tools, and Web3 utilities for modern digital ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-[#0F172A] border border-[#E2E8F0] font-semibold hover:bg-slate-50 transition-colors shadow-sm">
                  Contact Third Leap Labs
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[440px] shrink-0">
              <div className="bg-[#0B1220] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative glow inside navy card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
                
                <h3 className="text-white font-bold text-[18px] mb-6 relative z-10">System Architecture</h3>
                <div className="relative z-10">
                  <ArchitectureStackVisual />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Trust Strip (What We Build) */}
      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[#475569] font-medium text-[15px] text-center">
            <span className="flex items-center gap-2 justify-center"><Globe className="w-4 h-4 text-blue-500"/> SaaS Platforms</span>
            <span className="flex items-center gap-2 justify-center"><Database className="w-4 h-4 text-cyan-500"/> Blockchain Engineering</span>
            <span className="flex items-center gap-2 justify-center"><Zap className="w-4 h-4 text-indigo-500"/> Payment Systems</span>
            <span className="flex items-center gap-2 justify-center"><Code className="w-4 h-4 text-slate-500"/> Automation</span>
          </div>
        </div>
      </section>

      {/* 3. Solution Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <div className="max-w-3xl mb-16">
          <SectionHeading 
            title="Solutions around blockchain, payments, SaaS, and automation" 
            subtitle="We help ideas move from concept to working software by combining product thinking, software architecture, blockchain engineering, and practical implementation."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Blockchain Platforms" description="We design and build blockchain-aware software systems that support visibility, verification, wallet-aware workflows, and Web3 integrations without unnecessary hype." icon={<Database className="w-6 h-6 text-cyan-600" />} />
          <FeatureCard title="Web3 Utilities" description="We build practical utilities for communities, builders, and digital ecosystems, including wallet intelligence, safety workflows, and on-chain visibility tools." icon={<Globe className="w-6 h-6 text-indigo-600" />} />
          <FeatureCard title="Payment Systems" description="We create payment request flows, QR payments, receipt records, and non-custodial payment workflow software for blockchain-based payment use cases." icon={<Zap className="w-6 h-6 text-blue-600" />} />
          <FeatureCard title="SaaS Platforms" description="We build dashboards, portals, admin systems, workflow platforms, and cloud-based applications for businesses and product teams." icon={<Network className="w-6 h-6 text-cyan-600" />} />
          <FeatureCard title="Automation Systems" description="We help reduce manual work by connecting tools, data, and workflows into reliable software systems." icon={<Code className="w-6 h-6 text-indigo-600" />} />
          <FeatureCard title="Data & Intelligence" description="We build systems that organize complex information into clearer dashboards, summaries, alerts, and operational views." icon={<Activity className="w-6 h-6 text-blue-600" />} />
        </div>
      </section>

      {/* 4. Internal Labs and Initiatives */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionHeading 
              title="Labs and internal initiatives" 
              subtitle="Third Leap Labs also develops internal initiatives that explore specific use cases in blockchain intelligence, payment workflows, and software automation."
            />
          </div>
          
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
              buttonText="View WhaleScanner Initiative"
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
              buttonText="View GoPaySol Initiative"
              accentColorClass="text-indigo-600"
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <div className="max-w-3xl mb-16">
          <SectionHeading 
            title="How we approach software delivery" 
            subtitle="Building reliable software is a process of understanding, designing, building, and iterating."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Understand the problem" description="Every solution begins with a clear understanding of the real-world workflow and business needs." icon={<Lightbulb className="w-6 h-6 text-blue-600" />} />
          <FeatureCard title="Shape the architecture" description="We design practical interfaces and logical data models before writing any code." icon={<Blocks className="w-6 h-6 text-indigo-600" />} />
          <FeatureCard title="Build the first version" description="We focus on shipping reliable, working software over endless, complex prototyping." icon={<Code className="w-6 h-6 text-cyan-600" />} />
          <FeatureCard title="Validate the workflow" description="We ensure the system actually solves the problem in real production environments." icon={<CheckCircle2 className="w-6 h-6 text-blue-600" />} />
          <FeatureCard title="Improve and scale" description="Software is iteratively refined and strengthened as usage and requirements grow." icon={<RefreshCw className="w-6 h-6 text-indigo-600" />} />
          <FeatureCard title="Maintain security" description="Security and proper data handling are built into the foundation, not bolted on later." icon={<ShieldCheck className="w-6 h-6 text-cyan-600" />} />
        </div>
      </section>

      {/* 6. Trust & Security */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <SectionHeading title="Trust is part of the architecture" />
            <div className="prose max-w-none text-[16px] text-[#475569] leading-relaxed">
              <p>
                Third Leap Labs treats trust, clarity, and security as absolute engineering requirements. Our Web3 and payment solutions are built with clear boundaries. We do not engage in misleading financial claims or unnecessary risk.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="modern-card p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-[#0F172A]">No seed phrases</h4>
              </div>
              <div className="modern-card p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="font-bold text-[#0F172A]">No private keys</h4>
              </div>
              <div className="modern-card p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-indigo-600" />
                </div>
                <h4 className="font-bold text-[#0F172A]">No financial guarantees</h4>
              </div>
              <div className="modern-card p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5 text-slate-600" />
                </div>
                <h4 className="font-bold text-[#0F172A]">No trading signals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection 
        title="Looking for a software engineering partner?"
        description="We can help shape the idea, define the architecture, and build the first serious version of your platform."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
