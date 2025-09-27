import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const { t } = useTranslation('common');

  const stats = [
    {
      icon: MapPin,
      value: '10+',
      label: t('stats.cities'),
      color: 'text-blue-600',
    },
    {
      icon: Star,
      value: '1k+',
      label: t('stats.reviews'),
      color: 'text-amber-600',
    },
    {
      icon: Clock,
      value: '98%',
      label: t('stats.onTime'),
      color: 'text-green-600',
    },
    {
      icon: Award,
      value: '15+',
      label: t('stats.experience'),
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
              <IconComponent className="h-8 w-8" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              {stat.value}
            </div>
            <div className="text-slate-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stats;