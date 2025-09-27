import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, MapPin, Car, Mountain, Building, Route, Clock, Shield, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { generateMetaTags } from '../utils/seo';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  
  const metaTags = generateMetaTags({
    title: t('seo.services.title'),
    description: t('seo.services.description'),
  }, i18n.language);

  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      titleKey: 'services.airport.title',
      descriptionKey: 'services.airport.description',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      titleKey: 'services.cityTours.title',
      descriptionKey: 'services.cityTours.description',
      image: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: <Car className="h-8 w-8" />,
      titleKey: 'services.intercity.title',
      descriptionKey: 'services.intercity.description',
      image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      titleKey: 'services.desert.title',
      descriptionKey: 'services.desert.description',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: <Building className="h-8 w-8" />,
      titleKey: 'services.corporate.title',
      descriptionKey: 'services.corporate.description',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: <Route className="h-8 w-8" />,
      titleKey: 'services.custom.title',
      descriptionKey: 'services.custom.description',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: i18n.language === 'fr' ? 'Service 24h/24' : '24/7 Service',
      description: i18n.language === 'fr' 
        ? 'Disponible à toute heure pour vos besoins de transport'
        : 'Available at any time for your transportation needs',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: i18n.language === 'fr' ? 'Transport sécurisé' : 'Safe Transport',
      description: i18n.language === 'fr'
        ? 'Véhicules entretenus et chauffeurs expérimentés'
        : 'Well-maintained vehicles and experienced drivers',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: i18n.language === 'fr' ? 'Service premium' : 'Premium Service',
      description: i18n.language === 'fr'
        ? 'Excellence et confort dans chaque trajet'
        : 'Excellence and comfort in every journey',
    },
  ];

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
              backgroundImage: 'url(https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
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
                {t('services.title')}
              </h1>
              <p className="text-xl">
                {t('services.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  titleKey={service.titleKey}
                  descriptionKey={service.descriptionKey}
                  image={service.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Pourquoi choisir Prestige Fleet ?' : 'Why Choose Prestige Fleet?'}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {i18n.language === 'fr'
                  ? 'Nos avantages pour un transport exceptionnel au Maroc'
                  : 'Our advantages for exceptional transport in Morocco'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-xl text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Comment ça marche ?' : 'How It Works?'}
              </h2>
              <p className="text-xl text-slate-600">
                {i18n.language === 'fr' ? 'Simple et efficace en 3 étapes' : 'Simple and efficient in 3 steps'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '1',
                  title: i18n.language === 'fr' ? 'Demande de devis' : 'Quote Request',
                  description: i18n.language === 'fr'
                    ? 'Contactez-nous via le formulaire ou WhatsApp'
                    : 'Contact us via form or WhatsApp',
                },
                {
                  step: '2',
                  title: i18n.language === 'fr' ? 'Confirmation' : 'Confirmation',
                  description: i18n.language === 'fr'
                    ? 'Nous confirmons votre réservation rapidement'
                    : 'We quickly confirm your booking',
                },
                {
                  step: '3',
                  title: i18n.language === 'fr' ? 'Voyage' : 'Journey',
                  description: i18n.language === 'fr'
                    ? 'Profitez de votre transport premium'
                    : 'Enjoy your premium transport',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white text-2xl font-bold rounded-full mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
};

export default Services;