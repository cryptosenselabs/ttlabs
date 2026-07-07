import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TrustNotice } from '../components/ui/TrustNotice';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const WhaleScanner = () => {
  return (
    <Layout>
      <SEO 
        title="WhaleScanner | Web3 Wallet Intelligence Initiative" 
        description="Web3 wallet intelligence and whale activity visibility for communities, builders, analysts, and users who need better context around on-chain behavior."
      />
      
      <ModernPageHeader 
        eyebrow="Web3 Intelligence"
        title="WhaleScanner"
        subtitle="Web3 wallet intelligence and whale activity visibility for communities, builders, analysts, and users who need better context around on-chain behavior."
        theme="light"
      />

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto text-center text-[18px] text-[#475569] leading-relaxed">
        <p>
          WhaleScanner is being developed to make wallet activity easier to observe, organize, and explain. Instead of depending only on screenshots, rumors, or fragmented blockchain data, users should be able to see wallet behavior with clearer context.
        </p>
      </section>

      <section className="pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
        <TrustNotice>
          <p>WhaleScanner is an informational product. It does not provide financial advice, investment recommendations, price predictions, or trading signals.</p>
        </TrustNotice>
      </section>

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
        <SectionHeading title="The Problem" subtitle="On-chain activity is public, but not always understandable" />
        <div className="prose max-w-none text-[16px] text-[#475569] leading-relaxed mt-8">
          <p>
            Blockchain data is visible, but visibility is not the same as understanding. A wallet movement may look important, but without context it can be hard to know whether it is routine activity, accumulation, distribution, migration, exchange movement, liquidity movement, or something suspicious.
          </p>
          <p>
            Crypto communities often rely on incomplete information. Screenshots move faster than facts. Influencer claims are difficult to verify. Wallets may appear important without a clear history. Project teams may need to explain wallet behavior repeatedly. Users may see large transactions but have no simple way to understand the broader pattern.
          </p>
          <p className="font-semibold text-[#0F172A] mt-6">
            WhaleScanner is designed to reduce that confusion.
          </p>
        </div>
      </section>

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeading title="What WhaleScanner Is" subtitle="A context layer for wallet activity" />
          <div className="prose max-w-none text-[16px] text-[#475569] leading-relaxed mb-16 mt-8 max-w-[800px]">
            <p>
              WhaleScanner is a Web3 intelligence product focused on wallet activity visibility, whale movement monitoring, token activity tracking, suspicious pattern awareness, and AI-assisted wallet behavior summaries.
            </p>
            <p>
              The goal is not to tell users what to buy or sell. The goal is to help users and communities understand what is happening on-chain with more structure and less noise.
            </p>
          </div>

          <h3 className="text-[24px] font-bold text-[#0F172A] mb-8">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title="Wallet Activity Timeline" description="A structured view of wallet transactions over time, helping users understand whether a wallet is active, dormant, accumulating, distributing, rotating assets, or interacting with specific tokens." />
            <FeatureCard title="Whale Movement Visibility" description="Large wallet movements can influence community discussions. WhaleScanner helps surface significant movements so they can be reviewed with context instead of speculation." />
            <FeatureCard title="Token Activity Monitoring" description="Track wallet interactions around selected tokens, including buys, sells, transfers, liquidity-related activity, and other visible on-chain movements." />
            <FeatureCard title="Suspicious Pattern Awareness" description="WhaleScanner can help highlight unusual behavior patterns such as sudden wallet clustering, repeated transfers, rapid movement, possible coordinated activity, or other behavior that deserves closer review." />
            <FeatureCard title="AI-Assisted Wallet Summaries" description="Instead of forcing users to inspect raw transaction lists, WhaleScanner can summarize wallet behavior in plain language. These summaries should help users understand patterns, not make financial decisions." />
            <FeatureCard title="Wallet Profiles" description="Wallet profiles can provide a more readable view of wallet history, behavior style, observed activity, preferred tokens, and repeated interaction patterns." />
            <FeatureCard title="Community Transparency Tools" description="Communities often need better ways to discuss wallet behavior without spreading panic or misinformation. WhaleScanner can help create cleaner explanations and shareable views." />
            <FeatureCard title="Builder and Project Discovery" description="Over time, WhaleScanner may support safer discovery between builders, projects, whales, and communities by showing context around interest, behavior, and activity." />
          </div>
        </div>
      </section>

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-[24px] font-bold text-[#0F172A] mb-8">Who WhaleScanner Is For</h3>
          <div className="grid grid-cols-1 gap-4">
            <FeatureCard title="Crypto Communities" description="For communities that want clearer discussion around wallet movement, large holders, and token activity." />
            <FeatureCard title="Project Teams" description="For teams that need better visibility into ecosystem activity and community-facing wallet questions." />
            <FeatureCard title="Web3 Builders" description="For builders who want to understand user, holder, or whale behavior around their ecosystem." />
            <FeatureCard title="Analysts and Researchers" description="For people studying wallets, token behavior, movement patterns, and on-chain signals with caution and context." />
            <FeatureCard title="Everyday Users" description="For users who want a clearer view of on-chain movement without reading raw blockchain explorers all day." />
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-bold text-[#0F172A] mb-8">Example Use Cases</h3>
          <div className="grid grid-cols-1 gap-4">
            <FeatureCard title="Understanding a Large Holder" description="A community notices that a large wallet moved tokens. WhaleScanner can help show whether the wallet has a history of similar movements, whether the movement was sudden, and what other activity happened around the same time." />
            <FeatureCard title="Reviewing Suspicious Activity" description="A project team sees repeated wallet interactions that look unusual. WhaleScanner can help organize the activity into a clearer timeline for review." />
            <FeatureCard title="Preparing a Community Update" description="Instead of replying to rumors with disconnected screenshots, a team or community moderator can refer to clearer wallet behavior context." />
            <FeatureCard title="Watching Token Activity" description="Users can monitor visible wallet behavior around selected tokens while remembering that on-chain information does not guarantee future price movement." />
            <FeatureCard title="Studying Whale Behavior" description="Analysts can compare wallet behavior patterns such as holding, rotating, entering, exiting, or interacting with liquidity." />
          </div>
        </div>
      </section>

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeading title="Product Direction" subtitle="Where WhaleScanner is going" />
          <div className="prose max-w-none text-[#475569] leading-relaxed text-[16px] mb-12 mt-8 max-w-[800px]">
            <p>
              WhaleScanner is planned as more than a simple wallet watcher. The product direction includes a wider intelligence layer around wallets, communities, builders, and on-chain activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title="Phase 1: Wallet Visibility Foundation" description="Wallet activity timelines, token monitoring, large movement visibility, and clean dashboard views." />
            <FeatureCard title="Phase 2: AI-Assisted Context" description="Plain-language wallet summaries, behavior profiles, activity explanations, and suspicious pattern highlights." />
            <FeatureCard title="Phase 3: Community and Builder Tools" description="Shareable views, community transparency workflows, builder discovery concepts, and safer communication around wallet activity." />
            <FeatureCard title="Phase 4: Optional Identity and Discovery Layers" description="Future features may allow wallets, builders, or projects to voluntarily add more context to their profiles, helping reduce confusion and strengthen trust." />
          </div>
        </div>
      </section>

      <section className="pt-[72px] pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <SectionHeading title="What WhaleScanner Is Not" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="modern-card p-6 border-t-4 border-red-500 bg-white">
            <h3 className="font-semibold text-[#0F172A] mb-2">Not a trading signal platform</h3>
            <p className="text-[14px] text-[#475569]">WhaleScanner does not tell users when to buy, sell, or hold any asset.</p>
          </div>
          <div className="modern-card p-6 border-t-4 border-red-500 bg-white">
            <h3 className="font-semibold text-[#0F172A] mb-2">Not a financial advisor</h3>
            <p className="text-[14px] text-[#475569]">The product provides information and context only. Users are responsible for their own decisions.</p>
          </div>
          <div className="modern-card p-6 border-t-4 border-red-500 bg-white">
            <h3 className="font-semibold text-[#0F172A] mb-2">Not a price prediction tool</h3>
            <p className="text-[14px] text-[#475569]">Wallet activity may be useful context, but it does not guarantee market direction.</p>
          </div>
          <div className="modern-card p-6 border-t-4 border-red-500 bg-white">
            <h3 className="font-semibold text-[#0F172A] mb-2">Not a custody service</h3>
            <p className="text-[14px] text-[#475569]">WhaleScanner does not hold user funds and does not need private keys or seed phrases.</p>
          </div>
          <div className="modern-card p-6 border-t-4 border-red-500 bg-white">
            <h3 className="font-semibold text-[#0F172A] mb-2">Not a replacement for research</h3>
            <p className="text-[14px] text-[#475569]">On-chain visibility is only one part of responsible research.</p>
          </div>
        </div>
      </section>

      <section className="pb-[72px] px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto">
        <TrustNotice title="Safety Language: Built with clear boundaries">
          <p>
            WhaleScanner is designed to improve visibility, not to encourage reckless decisions. Web3 tools must be careful with language because users can mistake information for advice. For that reason, WhaleScanner should always communicate clearly that its outputs are informational, incomplete by nature, and should be interpreted with caution.
          </p>
        </TrustNotice>
      </section>

      <CTASection 
        title="Bring more context to wallet activity"
        description="WhaleScanner is being built for people who want on-chain visibility with better explanations, clearer structure, and stronger safety boundaries."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
