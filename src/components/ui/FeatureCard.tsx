import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="glass-card p-6 border-l-4 border-l-[var(--color-border)] hover:border-l-[var(--color-accent-indigo)] transition-colors h-full">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
