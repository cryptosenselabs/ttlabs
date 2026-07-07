import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const Labs = () => {
  return (
    <Layout>
      <SEO 
        title="Labs | Third Leap Labs Experimental Software Utilities" 
        description="Third Leap Labs explores early-stage product ideas, prototypes, and experimental utilities across automation, Web3 safety, payments, and community intelligence."
      />
      
      <HeroSection 
        title="Labs"
        subtitle="Early-stage product exploration across automation, Web3 safety, payments, community intelligence, and AI-assisted software workflows."
      />

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-slate-600 leading-relaxed">
        <p>
          Labs is where Third Leap Labs explores ideas that may become future products. Some concepts may become full platforms. Some may remain internal prototypes. Some may evolve based on user feedback, technical feasibility, and real-world usefulness.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Why Labs Exists" />
        <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed">
          <p>
            Not every useful product starts as a complete platform. Some ideas begin as a pattern noticed repeatedly across communities, founders, businesses, or technical workflows. Labs exists to explore those patterns carefully before turning them into full products.
          </p>
          <p>
            The purpose of Labs is not to create noise. The purpose is to test whether an idea is useful, understandable, technically feasible, and worth building properly.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Exploration Areas" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard title="Wallet-Risk Education" description="Tools that help users understand common wallet risks, suspicious patterns, impersonation tactics, and safer Web3 behavior." />
            <FeatureCard title="Community Analytics" description="Dashboards and lightweight intelligence tools for digital communities that need better visibility into activity, growth, engagement, and safety signals." />
            <FeatureCard title="Builder Discovery" description="Concepts that help builders, communities, and projects find each other through clearer context instead of noisy promotion." />
            <FeatureCard title="Web3 Safety Workflows" description="Utilities that improve verification, reduce confusion, and help users avoid unsafe assumptions around links, wallets, and on-chain activity." />
            <FeatureCard title="Payment Automation" description="Experiments around recurring payment workflows, payment records, payment requests, and lightweight business payment systems." />
            <FeatureCard title="AI-Assisted Product Utilities" description="Tools that use AI to summarize, organize, or explain complex technical information in plain language." />
            <FeatureCard title="On-Chain Behavior Summaries" description="Research into how wallet behavior can be summarized responsibly without turning information into financial advice." />
            <FeatureCard title="Lightweight Business Tools" description="Small software utilities that help founders, freelancers, and small teams reduce manual operational work." />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionHeading title="How Ideas Move Through Labs" />
          <div className="space-y-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-slate-800">
              <h3 className="font-bold mb-2 text-slate-900">Step 1: Observation</h3>
              <p className="text-slate-600">We identify repeated problems, unclear workflows, or areas where users need better tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-slate-800">
              <h3 className="font-bold mb-2 text-slate-900">Step 2: Prototype</h3>
              <p className="text-slate-600">We create a small working version or structured concept to test the idea.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-slate-800">
              <h3 className="font-bold mb-2 text-slate-900">Step 3: Validation</h3>
              <p className="text-slate-600">We evaluate whether the idea solves a real problem and whether users understand it.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-slate-800">
              <h3 className="font-bold mb-2 text-slate-900">Step 4: Product Decision</h3>
              <p className="text-slate-600">The concept may become a product, merge into an existing product, remain experimental, or be discontinued.</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading title="What We Avoid" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Empty hype</div>
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Overpromising</div>
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Misleading financial claims</div>
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Unsafe wallet behavior</div>
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Products without real users</div>
            <div className="p-4 bg-white border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-slate-800">Complexity for its own sake</div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Have an idea worth exploring?"
        description="Third Leap Labs is open to product conversations around SaaS, Web3 utilities, payments, automation, and community tools."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
