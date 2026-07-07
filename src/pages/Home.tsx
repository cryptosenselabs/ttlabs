import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { TrustNotice } from '../components/ui/TrustNotice';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Code, Database, Globe, Network, ShieldCheck, Zap } from 'lucide-react';

export const Home = () => {
  return (
    <Layout>
      <SEO 
        title="Third Leap Labs LLC | Software Products for the Next Leap" 
        description="Third Leap Labs LLC builds SaaS platforms, automation systems, Web3 utilities, payment software, and digital product infrastructure for teams that need practical technology with clear architecture."
      />
      
      <HeroSection 
        isMainPage={true}
        title={<>Building Software Products for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-indigo)]">Next Leap</span></>}
        subtitle="Third Leap Labs LLC builds SaaS platforms, automation systems, Web3 utilities, payment software, and digital product infrastructure for teams that need practical technology with clear architecture."
        primaryAction={{ text: "Explore Products", to: "/products" }}
        secondaryAction={{ text: "Contact Third Leap Labs", to: "/contact" }}
      />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-[var(--color-muted-text)] leading-relaxed">
        <p>
          We work at the intersection of product thinking, software architecture, and real-world implementation. Our focus is not on building noisy prototypes. Our focus is on building useful systems that can be understood, maintained, trusted, and improved over time.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="The Third Leap Philosophy" 
          subtitle="From idea to product to scale"
          centered
        />
        
        <div className="prose prose-invert max-w-4xl mx-auto text-center text-lg text-[var(--color-muted-text)] leading-relaxed mb-16">
          <p>
            Every meaningful product moves through three important leaps. The first leap is the idea: identifying a real problem worth solving. The second leap is the build: turning that idea into working software with the right architecture. The third leap is maturity: making the product reliable, understandable, secure, and useful in real-world conditions.
          </p>
          <p className="font-semibold text-[var(--color-text-white)] mt-4">
            Third Leap Labs exists to help products reach that third leap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Idea" description="We begin with the problem, the user, and the purpose. Good software starts with clarity before code." />
          <FeatureCard title="Build" description="We design and implement practical systems using modern software architecture, clean interfaces, and maintainable engineering." />
          <FeatureCard title="Scale" description="We prepare products for real use, stronger trust, clearer communication, and long-term evolution." />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="What We Build" 
            subtitle="Third Leap Labs builds software products and technical platforms across several connected areas. Each product is designed around a clear use case, not around hype."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <FeatureCard title="SaaS Platforms" description="Customer-facing and internal software platforms designed for workflows, dashboards, operations, data, and automation." icon={<Globe className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
            <FeatureCard title="Web3 Utilities" description="Blockchain-enabled tools that focus on visibility, verification, payments, and user safety without misleading financial claims." icon={<Database className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
            <FeatureCard title="Payment Software" description="Payment request flows, QR payments, receipts, verification workflows, and non-custodial payment infrastructure." icon={<Zap className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
            <FeatureCard title="Automation Systems" description="Tools that reduce manual work, connect data, improve operations, and help teams move faster with fewer errors." icon={<Code className="w-8 h-8 text-[var(--color-accent-cyan)]" />} />
            <FeatureCard title="Community and Data Tools" description="Analytics, dashboards, monitoring, and community intelligence products for digital ecosystems." icon={<Network className="w-8 h-8 text-[var(--color-accent-indigo)]" />} />
            <FeatureCard title="Product Prototypes" description="Early-stage product builds that help validate ideas before expanding into larger platforms." icon={<ShieldCheck className="w-8 h-8 text-[var(--color-accent-magenta)]" />} />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading 
          title="Product Portfolio" 
          subtitle="Focused products for practical digital workflows"
        />
        
        <div className="prose prose-invert max-w-4xl text-lg text-[var(--color-muted-text)] leading-relaxed mb-12">
          <p>
            Our product portfolio begins with two focused Web3 products: WhaleScanner and GoPaySol. These products are designed to solve real operational problems around on-chain visibility and payment workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="WhaleScanner"
            subtitle="Web3 wallet intelligence and whale activity visibility"
            description="WhaleScanner is being built to help communities, builders, analysts, and users understand wallet activity with better context. It focuses on whale movements, wallet behavior, token activity, suspicious pattern awareness, and AI-assisted wallet summaries."
            icon={Database}
            to="/products/whalescanner"
            buttonText="Explore WhaleScanner"
            accentColorClass="text-accent-cyan"
          />
          <ProductCard 
            title="GoPaySol"
            subtitle="Solana payment links and QR payment workflows"
            description="GoPaySol is designed to help freelancers, creators, Web3 teams, and businesses create payment links, QR requests, receipts, and non-custodial Solana payment flows."
            icon={Zap}
            to="/products/gopaysol"
            buttonText="Explore GoPaySol"
            accentColorClass="text-accent-magenta"
          />
          <ProductCard 
            title="Labs and Future Utilities"
            subtitle="Experiments that may become products"
            description="Third Leap Labs continues to explore practical tools across wallet-risk education, builder discovery, community analytics, automation, and AI-assisted software workflows."
            icon={Code}
            to="/labs"
            buttonText="View Labs"
            accentColorClass="text-accent-indigo"
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Trust is part of the product" />
            <div className="prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed">
              <p>
                Third Leap Labs treats trust, clarity, and security as product requirements. Our Web3 products are built with clear boundaries. WhaleScanner is informational and does not provide financial advice, trading signals, or investment recommendations. GoPaySol is designed as non-custodial payment workflow software and does not hold user funds or request wallet recovery information.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
              <FeatureCard title="No seed phrases" description="" />
              <FeatureCard title="No private keys" description="" />
              <FeatureCard title="No financial guarantees" description="" />
              <FeatureCard title="No trading signal claims" description="" />
              <FeatureCard title="Clear product boundaries" description="" />
              <FeatureCard title="Responsible Web3 communication" description="" />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Have a product, platform, or Web3 utility to build?"
        description="Third Leap Labs can help shape the idea, define the architecture, and build the first serious version."
        buttonText="Start a Conversation"
        to="/contact"
      />
    </Layout>
  );
};
