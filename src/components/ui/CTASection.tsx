import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  to: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, to }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border-main)] bg-[var(--color-section-surface)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary-text)]">{title}</h2>
        {description && (
          <p className="text-xl text-[var(--color-secondary-text)] mb-10 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <Link to={to} className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[var(--color-accent-blue)] text-white font-semibold hover:opacity-90 transition-colors shadow-sm text-lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};
