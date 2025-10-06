import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  image: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  titleKey,
  descriptionKey,
  image,
  delay = 0,
}) => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        
        {/* Icon */}
        <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
          {t(titleKey)}
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          {t(descriptionKey)}
        </p>
        
       
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
    </motion.div>
  );
};

export default ServiceCard;