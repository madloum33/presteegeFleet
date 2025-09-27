import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { generateMetaTags } from '../utils/seo';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  
  const metaTags = generateMetaTags({
    title: t('seo.contact.title'),
    description: t('seo.contact.description'),
  }, i18n.language);

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:title" content={metaTags['og:title']} />
        <meta property="og:description" content={metaTags['og:description']} />
        <meta property="og:image" content={metaTags['og:image']} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-700 flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-xl">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Nos coordonnées' : 'Our Contact Information'}
              </h2>
              <p className="text-xl text-slate-600">
                {i18n.language === 'fr' ? 'Plusieurs moyens de nous contacter' : 'Multiple ways to reach us'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Adresse' : 'Address',
                  content: t('footer.address'),
                  subContent: 'Marrakech, Morocco',
                },
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Téléphone' : 'Phone',
                  content: t('footer.phone'),
                  subContent: t('footer.hours'),
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: 'Email',
                  content: t('footer.email'),
                  subContent: i18n.language === 'fr' ? 'Réponse rapide garantie' : 'Quick response guaranteed',
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Horaires' : 'Hours',
                  content: t('footer.hours'),
                  subContent: i18n.language === 'fr' ? 'Service d\'urgence' : 'Emergency service',
                },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-xl text-white mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-800 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {info.subContent}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-slate-200">
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {i18n.language === 'fr' ? 'Nous situer' : 'Find Us'}
              </h3>
              <p className="text-slate-600">
                {i18n.language === 'fr' ? 'Au cœur de Marrakech' : 'In the heart of Marrakech'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;