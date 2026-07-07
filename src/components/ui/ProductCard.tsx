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
      className={`modern-card p-8 flex flex-col h-full relative overflow-hidden group border-t-4 ${isFeatured ? 'border-t-blue-500' : 'border-t-transparent hover:border-t-blue-500'}`}
    >
      <div className={`w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 relative z-10 transition-colors`}>
        <Icon className={`w-6 h-6 ${accentColorClass}`} />
      </div>
      <h3 className="text-[22px] font-bold mb-2 relative z-10 text-[#0F172A]">{title}</h3>
      {subtitle && <p className="text-[14px] font-semibold mb-4 relative z-10 text-blue-600 opacity-90">{subtitle}</p>}
      <div className="text-[#475569] mb-6 flex-grow relative z-10 leading-relaxed text-[15px]">
        {description}
      </div>
      
      {features && features.length > 0 && (
        <ul className="mb-8 space-y-2 relative z-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-[14px] text-[#475569]">
              <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentColorClass.replace('text-', 'bg-')}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {to && (
        <div className="relative z-10 mt-auto pt-6 border-t border-[#E2E8F0]">
          <Link to={to} className={`font-semibold flex items-center transition-all ${accentColorClass} group-hover:gap-2`}>
            {buttonText} <ArrowRight className="ml-1 w-4 h-4 transition-transform" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};
