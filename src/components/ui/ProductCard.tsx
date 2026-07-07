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
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  subtitle,
  description, 
  icon: Icon, 
  to, 
  buttonText = "Learn more",
  accentColorClass
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-8 flex flex-col h-full relative overflow-hidden group border border-[var(--color-border)] hover:border-[var(--color-muted-text)]"
    >
      <div className={`w-12 h-12 rounded-lg bg-[var(--color-primary-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 relative z-10 transition-colors`}>
        <Icon className={`w-6 h-6 ${accentColorClass}`} />
      </div>
      <h3 className="text-2xl font-semibold mb-2 relative z-10">{title}</h3>
      {subtitle && <p className="text-sm font-medium mb-4 relative z-10" style={{ color: `var(--color-${accentColorClass.split('-').pop()})` }}>{subtitle}</p>}
      <div className="text-[var(--color-muted-dark-text)] mb-8 flex-grow relative z-10 leading-relaxed">
        {description}
      </div>
      {to && (
        <div className="relative z-10 mt-auto">
          <Link to={to} className={`font-medium flex items-center transition-colors ${accentColorClass} hover:brightness-125`}>
            {buttonText} <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};
