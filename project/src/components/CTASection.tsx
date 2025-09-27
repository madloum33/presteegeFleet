import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Moroccan pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 4c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>{t('cta.getQuote')}</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>{t('cta.contactUs')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;