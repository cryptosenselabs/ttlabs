import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TrustNotice } from '../components/ui/TrustNotice';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const GoPaySol = () => {
  return (
    <Layout>
      <SEO 
        title="GoPaySol | Solana Payment Links and QR Payments" 
        description="Solana payment links, QR payments, receipts, and non-custodial payment workflows for freelancers, creators, Web3 teams, and businesses."
      />
      
      <HeroSection 
        title="GoPaySol"
        subtitle="Solana payment links, QR payments, receipts, and non-custodial payment workflows for freelancers, creators, Web3 teams, and businesses."
        primaryAction={{ text: "Visit GoPaySol.com", to: "https://gopaysol.com" }}
        secondaryAction={{ text: "Discuss Product", to: "/contact" }}
      />

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-[var(--color-muted-text)] leading-relaxed">
        <p>
          GoPaySol is designed to make Solana payments easier to request, verify, and record. It focuses on the payment workflow around the transaction, without holding user funds or asking for wallet recovery information.
        </p>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <TrustNotice>
          <p>GoPaySol is payment workflow software. It does not hold user funds, does not custody assets, and does not ask for seed phrases, private keys, or wallet recovery phrases.</p>
        </TrustNotice>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="The Problem" subtitle="Crypto payments are fast, but the workflow around them is often messy" />
        <div className="prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed">
          <p>
            Sending a payment on-chain can be simple. Managing the business workflow around that payment is harder. Sellers need to create payment requests, share the right wallet address, avoid mistakes, generate QR codes, track whether payment happened, connect the payment to a customer or invoice, and keep a clear record.
          </p>
          <p>
            Without a proper workflow, crypto payments can become confusing. Screenshots may be used as proof. Wallet addresses can be copied incorrectly. Buyers may send the wrong amount. Sellers may struggle to confirm payment status quickly.
          </p>
          <p className="font-semibold text-[var(--color-text-white)]">
            GoPaySol is designed to make that process cleaner.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What GoPaySol Is" subtitle="A payment request and verification workflow for Solana" />
          <div className="prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed mb-16">
            <p>
              GoPaySol helps users create structured Solana payment requests that can be shared as links or QR codes. The goal is to make payment requests easier to understand, easier to complete, and easier to verify.
            </p>
            <p>
              The product is designed for practical use cases: freelance payments, creator payments, Web3 services, digital products, small business payments, and developer payment flows.
            </p>
          </div>

          <SectionHeading title="Core Capabilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard title="Payment Links" description="Create simple payment links that can be shared with buyers, clients, or customers. A payment link reduces confusion by presenting the payment request in a clear format." />
            <FeatureCard title="QR Payment Requests" description="Generate QR codes for in-person or mobile-friendly payment flows. This is useful for creators, events, merchants, service providers, and quick checkout experiences." />
            <FeatureCard title="Payment Status Tracking" description="Track whether a payment request has been completed, pending, expired, or requires attention. Status clarity reduces manual checking." />
            <FeatureCard title="Receipt Records" description="Generate clean payment records that help sellers and buyers keep basic proof of payment. Receipts should support clarity without pretending to replace legal or tax documentation." />
            <FeatureCard title="On-Chain Verification" description="GoPaySol can verify payment status using on-chain data, helping users avoid relying only on screenshots or manual claims." />
            <FeatureCard title="Developer-Friendly Payment Flows" description="Future product direction may include APIs, callbacks, or webhook-style flows for developers who want to connect Solana payments into apps, dashboards, or business workflows." />
            <FeatureCard title="Non-Custodial Design" description="GoPaySol is designed so funds move through the user's own wallet flow. The platform does not hold funds and does not require seed phrases or private keys." />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="How It Works" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-border)] -z-10 -translate-y-1/2"></div>
          
          <div className="glass-card p-6 text-center border-t-4 border-t-[var(--color-accent-cyan)] bg-[var(--color-primary-dark)]">
            <div className="text-sm font-bold text-[var(--color-accent-cyan)] mb-2 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold mb-2">Create a payment request</h3>
            <p className="text-sm text-[var(--color-muted-text)]">The seller enters the payment details, such as amount, wallet destination, description, and optional reference information.</p>
          </div>
          <div className="glass-card p-6 text-center border-t-4 border-t-[var(--color-accent-indigo)] bg-[var(--color-primary-dark)]">
            <div className="text-sm font-bold text-[var(--color-accent-indigo)] mb-2 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold mb-2">Share the link or QR code</h3>
            <p className="text-sm text-[var(--color-muted-text)]">The seller sends the payment request to a buyer, client, or customer using a link or QR code.</p>
          </div>
          <div className="glass-card p-6 text-center border-t-4 border-t-[var(--color-accent-magenta)] bg-[var(--color-primary-dark)]">
            <div className="text-sm font-bold text-[var(--color-accent-magenta)] mb-2 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold mb-2">Buyer pays from a compatible wallet</h3>
            <p className="text-sm text-[var(--color-muted-text)]">The buyer reviews the request and completes the payment using a compatible Solana wallet.</p>
          </div>
          <div className="glass-card p-6 text-center border-t-4 border-t-[var(--color-accent-cyan)] bg-[var(--color-primary-dark)]">
            <div className="text-sm font-bold text-[var(--color-accent-cyan)] mb-2 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold mb-2">Payment is verified</h3>
            <p className="text-sm text-[var(--color-muted-text)]">GoPaySol checks the payment status using on-chain information and updates the payment record.</p>
          </div>
          <div className="glass-card p-6 text-center border-t-4 border-t-[var(--color-accent-indigo)] bg-[var(--color-primary-dark)]">
            <div className="text-sm font-bold text-[var(--color-accent-indigo)] mb-2 uppercase tracking-wider">Step 5</div>
            <h3 className="font-bold mb-2">Record is available</h3>
            <p className="text-sm text-[var(--color-muted-text)]">The seller gets a clearer record of the request and payment status, reducing manual confusion.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Who GoPaySol Is For" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <FeatureCard title="Freelancers" description="Freelancers can request payment for services using cleaner links and payment records." />
              <FeatureCard title="Creators" description="Creators can accept Solana payments for digital products, services, support, or community-related work." />
              <FeatureCard title="Web3 Teams" description="Teams can manage simple payment requests for services, access, events, or operational workflows." />
              <FeatureCard title="Developers" description="Developers can use payment links and future developer flows to connect Solana payments into applications." />
              <FeatureCard title="Small Businesses" description="Small businesses can experiment with crypto payment acceptance while keeping the payment request process clearer." />
              <FeatureCard title="Service Providers" description="Consultants, designers, marketers, and technical providers can request and track payments more easily." />
            </div>
          </div>
          <div>
            <SectionHeading title="Example Use Cases" />
            <div className="grid grid-cols-1 gap-4 mt-8">
              <FeatureCard title="Freelance Invoice Payment" description="A freelancer creates a payment request for a completed project and sends the link to the client." />
              <FeatureCard title="Creator Payment Page" description="A creator shares a QR code or payment link for support, services, or digital products." />
              <FeatureCard title="Web3 Service Payment" description="A Web3 team pays a service provider through a clearer Solana payment request instead of manually copying wallet addresses." />
              <FeatureCard title="Event or Community Payment" description="A small event or community can use payment links for simple participation fees or service payments." />
              <FeatureCard title="Developer Checkout Prototype" description="A developer can test Solana payment flows before building a deeper integration." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading title="Product Direction" subtitle="Where GoPaySol is going" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard title="Phase 1: Payment Link Foundation" description="Create payment links, QR codes, and basic payment request pages." />
          <FeatureCard title="Phase 2: Verification and Records" description="Improve payment status tracking, receipt views, and payment history." />
          <FeatureCard title="Phase 3: Developer Workflows" description="Introduce developer-friendly tools such as API-ready flows, callbacks, and integration patterns." />
          <FeatureCard title="Phase 4: Business Dashboard" description="Create clearer dashboards for sellers, teams, and service providers to manage multiple payment requests." />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-dark)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What GoPaySol Is Not" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-6 border-t-4 border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/5">
              <h3 className="font-semibold text-[var(--color-text-white)] mb-2">Not a bank</h3>
              <p className="text-sm text-[var(--color-muted-text)]">GoPaySol is not a bank or regulated financial institution.</p>
            </div>
            <div className="glass-card p-6 border-t-4 border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/5">
              <h3 className="font-semibold text-[var(--color-text-white)] mb-2">Not a custody service</h3>
              <p className="text-sm text-[var(--color-muted-text)]">GoPaySol does not hold user funds.</p>
            </div>
            <div className="glass-card p-6 border-t-4 border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/5">
              <h3 className="font-semibold text-[var(--color-text-white)] mb-2">Not a wallet recovery service</h3>
              <p className="text-sm text-[var(--color-muted-text)]">GoPaySol will never ask for seed phrases or private keys.</p>
            </div>
            <div className="glass-card p-6 border-t-4 border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/5">
              <h3 className="font-semibold text-[var(--color-text-white)] mb-2">Not a guarantee of payment disputes</h3>
              <p className="text-sm text-[var(--color-muted-text)]">On-chain transactions may be irreversible. Users are responsible for verifying payment details.</p>
            </div>
            <div className="glass-card p-6 border-t-4 border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/5">
              <h3 className="font-semibold text-[var(--color-text-white)] mb-2">Not tax or legal software</h3>
              <p className="text-sm text-[var(--color-muted-text)]">Receipts and records are for operational clarity and may not replace professional accounting or legal advice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <TrustNotice title="Trust and Safety: Non-custodial by design">
          <p>
            GoPaySol should make payment workflows easier without taking control of user funds. The platform does not request seed phrases, private keys, or wallet recovery phrases. Users should always verify payment details, wallet prompts, URLs, and recipient information before completing any transaction.
          </p>
        </TrustNotice>
      </section>

      <CTASection 
        title="Make Solana payments easier to request and verify"
        description="GoPaySol is being built for people and teams that want cleaner payment workflows without custody or unnecessary complexity."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
