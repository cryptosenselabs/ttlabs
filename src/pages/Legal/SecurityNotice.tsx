import React from 'react';

export const SecurityNotice = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8 border-b border-[var(--color-border)] pb-4">Security Notice</h1>
      <div className="prose prose-invert max-w-none text-[var(--color-muted-text)] space-y-6">
        <p>Security is a fundamental engineering priority at Third Leap Labs LLC.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Our Commitment</h2>
        <p>We employ industry-standard security practices in the development and deployment of our software. Our infrastructure is designed to be resilient, and our non-custodial architecture naturally limits exposure to certain classes of vulnerabilities by keeping control in the hands of the user.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Vulnerability Reporting</h2>
        <p>If you are a security researcher and have discovered a potential security vulnerability in our systems, we encourage you to disclose it to us in a responsible manner.</p>
        <p>Please report any security concerns to: <strong>security@thirdleaplabs.com</strong></p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Best Practices for Users</h2>
        <p>While we secure our infrastructure, users must also adhere to best practices:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Verify all domains and URLs before connecting any Web3 wallet or authorizing transactions.</li>
          <li>Never share your private keys or seed phrases with anyone, including Third Leap Labs staff. We will never ask for them.</li>
          <li>Keep your local operating systems and browsers updated.</li>
        </ul>
      </div>
    </div>
  );
};
