import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Database, Code, Zap } from 'lucide-react';

export const Products = () => {
  return (
    <Layout>
      <SEO 
        title="Products | Third Leap Labs LLC" 
        description="Third Leap Labs builds focused software products for real-world digital workflows across Web3 intelligence, payment infrastructure, automation, and product operations."
      />
      
      <HeroSection 
        title="Product Portfolio"
        subtitle="Third Leap Labs builds focused software products for real-world digital workflows across Web3 intelligence, payment infrastructure, automation, and product operations."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-[var(--color-muted-text)] leading-relaxed">
        <p>
          Our product portfolio is built around a simple principle: useful software should solve a clear problem. We do not build products around empty trends. We build tools that help people observe, verify, automate, and operate with more confidence.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Featured Products" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <ProductCard 
              title="WhaleScanner"
              subtitle="Web3 wallet intelligence and whale activity visibility"
              description={<>
                <p className="mb-4">WhaleScanner is a Web3 intelligence product focused on making wallet activity easier to understand. It is being developed for communities, builders, analysts, and users who need better context around on-chain movements.</p>
                <p className="mb-4">The product direction includes wallet activity timelines, whale movement visibility, token monitoring, suspicious pattern awareness, AI-assisted wallet behavior summaries, and community-facing transparency tools.</p>
                <p className="mb-4 text-sm text-red-400">WhaleScanner is informational software. It is not a trading signal platform, not a financial advisor, and not a price prediction tool.</p>
                <ul className="list-disc pl-5 mt-4 space-y-1 text-sm text-[var(--color-text-white)]">
                  <li>Wallet activity visibility</li>
                  <li>Whale movement monitoring</li>
                  <li>Token activity tracking</li>
                  <li>Suspicious pattern awareness</li>
                  <li>AI-assisted wallet behavior summaries</li>
                  <li>Community transparency workflows</li>
                  <li>Builder and project discovery concepts</li>
                </ul>
              </>}
              icon={Database}
              to="/products/whalescanner"
              buttonText="Explore WhaleScanner"
              accentColorClass="text-accent-cyan"
            />
            
            <ProductCard 
              title="GoPaySol"
              subtitle="Solana payment links and non-custodial payment workflows"
              description={<>
                <p className="mb-4">GoPaySol is a payment workflow product for people and teams who want a simpler way to request, verify, and record Solana payments. It is designed for freelancers, creators, Web3 service providers, developers, and small businesses.</p>
                <p className="mb-4">The product direction includes payment links, QR payment requests, receipt generation, on-chain verification, payment records, and developer-friendly payment flows.</p>
                <p className="mb-4 text-sm text-red-400">GoPaySol is designed to be non-custodial. It does not hold user funds and does not ask for seed phrases, private keys, or wallet recovery information.</p>
                <ul className="list-disc pl-5 mt-4 space-y-1 text-sm text-[var(--color-text-white)]">
                  <li>Payment links</li>
                  <li>QR payment requests</li>
                  <li>Payment status visibility</li>
                  <li>Receipt records</li>
                  <li>On-chain verification</li>
                  <li>Developer-ready payment flows</li>
                  <li>Non-custodial design</li>
                </ul>
              </>}
              icon={Zap}
              to="/products/gopaysol"
              buttonText="Explore GoPaySol"
              accentColorClass="text-accent-magenta"
            />

            <ProductCard 
              title="Labs and Future Utilities"
              subtitle="Early-stage product exploration"
              description={<>
                <p className="mb-4">Third Leap Labs also explores early product concepts across automation, wallet-risk education, community analytics, builder discovery, and AI-assisted software workflows. Labs projects may evolve into full products after validation.</p>
                <ul className="list-disc pl-5 mt-4 space-y-1 text-sm text-[var(--color-text-white)]">
                  <li>Wallet-risk education</li>
                  <li>Community analytics</li>
                  <li>Builder discovery</li>
                  <li>Web3 safety workflows</li>
                  <li>Automation tools</li>
                  <li>AI-assisted product utilities</li>
                </ul>
              </>}
              icon={Code}
              to="/labs"
              buttonText="View Labs"
              accentColorClass="text-accent-indigo"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="How we decide what to build" subtitle="Product Principles" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard title="Clear problem" description="Every product should begin with a problem that real users can recognize." />
          <FeatureCard title="Practical workflow" description="A product should make an existing task easier, safer, clearer, or faster." />
          <FeatureCard title="Security-aware design" description="Especially in Web3, safety boundaries must be designed into the product from the beginning." />
          <FeatureCard title="Honest communication" description="We avoid exaggerated claims, misleading language, and unclear product promises." />
          <FeatureCard title="Maintainable architecture" description="Software should be built so that it can evolve without becoming fragile." />
          <FeatureCard title="Real user value" description="A product should be useful even without hype." />
        </div>
      </section>

      <CTASection 
        title="Looking for a product partner?"
        description="Third Leap Labs can help move an idea from early concept to structured product direction and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
