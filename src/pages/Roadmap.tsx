import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TrustNotice } from '../components/ui/TrustNotice';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const Roadmap = () => {
  return (
    <Layout>
      <SEO 
        title="Roadmap | Third Leap Labs Product Direction" 
        description="A transparent product direction for Third Leap Labs, WhaleScanner, GoPaySol, and future software utilities."
      />
      
      <HeroSection 
        title="Roadmap"
        subtitle="A transparent product direction for Third Leap Labs, WhaleScanner, GoPaySol, and future software utilities."
      />

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-slate-600 leading-relaxed">
        <p>
          This roadmap explains the current direction of the company and its product portfolio. It is a planning guide, not a guarantee. Priorities may change based on user feedback, technical learning, security considerations, and product maturity.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Roadmap Philosophy" />
        <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed">
          <p>
            A roadmap should help people understand direction without creating false promises. Third Leap Labs uses roadmap communication to explain what we are building, why it matters, and how the product portfolio may evolve.
          </p>
          <p className="text-red-500">
            We do not use roadmap language to promise financial outcomes, guarantee delivery dates, or create artificial urgency.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-24 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="md:pr-12 md:text-right">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Phase 1: Foundation</h2>
              <div className="space-y-4">
                <FeatureCard title="Corporate Website" description="Create a clean, modern Third Leap Labs website that presents the company as a serious software product studio." />
                <FeatureCard title="Product Positioning" description="Define clear, responsible positioning for WhaleScanner, GoPaySol, and Labs." />
                <FeatureCard title="Legal and Safety Pages" description="Publish legal disclaimer, privacy policy, and security notice pages to make product boundaries clear." />
                <FeatureCard title="Brand Identity" description="Establish a clean visual identity based on the three-leap mark: idea, build, and scale." />
                <FeatureCard title="Firebase Hosting" description="Deploy a fast static website with clean routes, sitemap, robots.txt, and Firebase Hosting configuration." />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-start relative">
              <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-800 absolute -left-4 z-10 shadow-sm"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="hidden md:flex items-center justify-end relative">
              <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-800 absolute -right-4 z-10 shadow-sm"></div>
            </div>
            <div className="md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Phase 2: Product Readiness</h2>
              <div className="space-y-4">
                <FeatureCard title="WhaleScanner Preview Workflows" description="Shape the first useful wallet visibility workflows, including wallet activity context and large movement visibility." />
                <FeatureCard title="GoPaySol Payment Link Workflows" description="Prepare payment request pages, QR payment flows, and payment verification concepts." />
                <FeatureCard title="Documentation" description="Create clearer explanations of product boundaries, safety practices, and intended use cases." />
                <FeatureCard title="Feedback Channels" description="Create contact and inquiry flows for early users, partners, and product discussions." />
                <FeatureCard title="Product Landing Refinement" description="Improve product pages as the tools mature, replacing broad descriptions with specific product screens and examples." />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="md:pr-12 md:text-right">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Phase 3: Product Expansion</h2>
              <div className="space-y-4">
                <FeatureCard title="Wallet Intelligence Enhancements" description="Expand WhaleScanner with better wallet profiles, behavior summaries, historical views, and suspicious pattern awareness." />
                <FeatureCard title="Payment Verification Improvements" description="Improve GoPaySol payment verification, receipt views, and seller dashboards." />
                <FeatureCard title="Community Analytics Experiments" description="Explore tools that help communities understand activity and engagement with less noise." />
                <FeatureCard title="Builder Discovery Concepts" description="Research safer ways to connect builders, projects, communities, and interested users." />
                <FeatureCard title="AI-Assisted Summaries" description="Use AI carefully to explain complex activity in plain language without making financial recommendations." />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-start relative">
              <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-800 absolute -left-4 z-10 shadow-sm"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="hidden md:flex items-center justify-end relative">
              <div className="w-8 h-8 rounded-full bg-white border-4 border-slate-800 absolute -right-4 z-10 shadow-sm"></div>
            </div>
            <div className="md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Phase 4: Mature Product Ecosystem</h2>
              <div className="space-y-4">
                <FeatureCard title="Connected Product Suite" description="Bring related products together under a clearer Third Leap Labs product ecosystem." />
                <FeatureCard title="Developer Tools" description="Explore APIs, embeddable components, and integration flows where useful." />
                <FeatureCard title="Product Dashboards" description="Create stronger dashboards for users, teams, and business workflows." />
                <FeatureCard title="Trust Infrastructure" description="Improve brand safety, product documentation, verification flows, and responsible communication." />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <TrustNotice title="Important Notice">
          <p>This roadmap is for communication and planning only. It does not represent investment advice, a product guarantee, or a commitment to any financial result.</p>
        </TrustNotice>
      </section>

      <CTASection 
        title="Follow the product journey"
        description="Third Leap Labs is building practical software products one clear step at a time."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
