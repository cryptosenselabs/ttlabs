import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-8 border-b border-[var(--color-border)] pb-4">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-[var(--color-muted-text)] space-y-6">
        <p>Last updated: July 2026</p>
        <p>Third Leap Labs LLC is committed to protecting your privacy and ensuring you have a positive experience on our website and in using our software products.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Data Collection</h2>
        <p>We collect minimal personal data necessary to provide our services. This may include contact information (such as email addresses) when you explicitly provide it via our contact forms. As our software is largely non-custodial and informational, we do not require or collect sensitive financial data from our users.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Usage Data</h2>
        <p>We may collect diagnostic and usage data to improve our software performance and user experience. This data is anonymized where possible and used strictly for engineering and operational improvements.</p>
        
        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Data Sharing</h2>
        <p>Third Leap Labs LLC does not sell, rent, or lease your personal information to third parties. We may share data with trusted partners strictly to help perform statistical analysis or provide customer support, under strict confidentiality agreements.</p>

        <h2 className="text-xl font-semibold text-[var(--color-text-white)] mt-8">Contact Information</h2>
        <p>Third Leap Labs LLC welcomes your questions or comments regarding this Statement of Privacy. If you believe that we have not adhered to this Statement, please contact us at info@thirdleaplabs.com.</p>
      </div>
    </div>
  );
};
