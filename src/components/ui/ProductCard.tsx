import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  icon: LucideIcon;
  to?: string;
  buttonText?: string;
  accentColorClass: string;
  features?: string[];
  isFeatured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  subtitle,
  description, 
  icon: Icon, 
  to, 
  buttonText = "Learn more",
  accentColorClass,
  features,
  isFeatured = false
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`glass-card p-8 flex flex-col h-full relative overflow-hidden group border transition-colors bg-[var(--color-card-surface)] ${isFeatured ? 'border-[var(--color-border-main)] shadow-lg hover:border-[var(--color-muted-text)]' : 'border-[var(--color-border-main)] hover:border-[var(--color-muted-text)]'}`}
    >
      {isFeatured && (
        <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full pointer-events-none bg-[var(--color-accent-blue)]`} />
      )}
      <div className={`w-12 h-12 rounded-lg bg-[var(--color-section-surface)] border border-[var(--color-border-main)] flex items-center justify-center mb-6 relative z-10 transition-colors`}>
        <Icon className={`w-6 h-6 ${accentColorClass}`} />
      </div>
      <h3 className="text-2xl font-bold mb-2 relative z-10 text-[var(--color-primary-text)]">{title}</h3>
      {subtitle && <p className="text-sm font-semibold mb-4 relative z-10 text-[var(--color-primary-text)] opacity-90">{subtitle}</p>}
      <div className="text-[var(--color-secondary-text)] mb-6 flex-grow relative z-10 leading-relaxed">
        {description}
      </div>
      
      {features && features.length > 0 && (
        <ul className="mb-8 space-y-2 relative z-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-[var(--color-muted-text)]">
              <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-current ${accentColorClass}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {to && (
        <div className="relative z-10 mt-auto pt-4 border-t border-[var(--color-border-main)]">
          <Link to={to} className={`font-medium flex items-center transition-all ${accentColorClass} hover:brightness-90 group-hover:gap-2`}>
            {buttonText} <ArrowRight className="ml-1 w-4 h-4 transition-transform" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};
