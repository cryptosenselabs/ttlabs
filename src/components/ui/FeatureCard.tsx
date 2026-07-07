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
      <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-white)]">{title}</h3>
      <p className="text-[var(--color-muted-text)] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
