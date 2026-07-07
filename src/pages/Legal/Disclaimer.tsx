import React from 'react';

export const Disclaimer = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8 border-b border-[var(--color-border)] pb-4">Legal Disclaimer</h1>
      <div className="prose prose-invert max-w-none text-[var(--color-muted-text)] space-y-6">
        <p>Last updated: July 2026</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">1. Informational Purposes Only</h2>
        <p>The information provided by Third Leap Labs LLC ("we," "us," or "our") on this website and our applications (including WhaleScanner and GoPaySol) is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">2. Not Financial Advice</h2>
        <p>Third Leap Labs LLC is a software and technology provider. We are not financial advisors, brokers, or dealers. Our tools (such as WhaleScanner) do not provide trading signals, investment advice, or market predictions. You are solely responsible for evaluating the merits and risks associated with the use of any information provided by our software before making any decisions based on such information.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">3. Non-Custodial Nature</h2>
        <p>Our payment routing software (GoPaySol) and other Web3 utilities operate on a non-custodial basis. Third Leap Labs LLC does not take custody of, hold, manage, or control user funds or digital assets at any time. We merely provide the software infrastructure that facilitates user-directed actions.</p>

        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">4. Liability</h2>
        <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or our applications, or reliance on any information provided on the site. Your use of the site and your reliance on any information is solely at your own risk.</p>
      </div>
    </div>
  );
};
