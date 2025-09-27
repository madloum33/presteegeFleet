import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Luggage, Wifi, Snowflake, Fuel, Shield } from 'lucide-react';
import FleetCarousel from '../components/FleetCarousel';
import CTASection from '../components/CTASection';
import { generateMetaTags } from '../utils/seo';

const Fleet: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  
  const metaTags = generateMetaTags({
    title: t('seo.fleet.title'),
    description: t('seo.fleet.description'),
  }, i18n.language);

  const vehicles = [
    {
      id: 'vclass',
      name: t('fleet.vclass.name'),
      passengers: t('fleet.vclass.passengers'),
      features: t('fleet.vclass.features'),
      image: 'https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '150€/day',
      description: i18n.language === 'fr'
        ? 'Le Mercedes V-Class allie luxe et polyvalence. Parfait pour les familles et groupes, il offre un espace généreux et tout le confort premium Mercedes.'
        : 'The Mercedes V-Class combines luxury and versatility. Perfect for families and groups, it offers generous space and all the premium Mercedes comfort.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '7 passengers', value: '7' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Large luggage capacity', value: 'XL' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Wifi className="h-5 w-5" />, label: 'WiFi', value: 'Yes' },
      ],
    },
    {
      id: 'eclass',
      name: t('fleet.eclass.name'),
      passengers: t('fleet.eclass.passengers'),
      features: t('fleet.eclass.features'),
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '120€/day',
      description: i18n.language === 'fr'
        ? 'La Mercedes E-Class représente l\'élégance et le raffinement. Idéale pour les transferts business et les occasions spéciales.'
        : 'The Mercedes E-Class represents elegance and refinement. Ideal for business transfers and special occasions.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '4 passengers', value: '4' },
        { icon: <Fuel className="h-5 w-5" />, label: 'Fuel efficient', value: 'Yes' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Shield className="h-5 w-5" />, label: 'Safety systems', value: 'Advanced' },
      ],
    },
    {
      id: 'prado',
      name: t('fleet.prado.name'),
      passengers: t('fleet.prado.passengers'),
      features: t('fleet.prado.features'),
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '180€/day',
      description: i18n.language === 'fr'
        ? 'Le Toyota Prado est le véhicule parfait pour les excursions dans le désert et les terrains difficiles, sans compromis sur le confort.'
        : 'The Toyota Prado is the perfect vehicle for desert excursions and difficult terrain, without compromising on comfort.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '7 passengers', value: '7' },
        { icon: <Shield className="h-5 w-5" />, label: '4x4 capability', value: 'Yes' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Cargo space', value: 'Large' },
      ],
    },
    {
      id: 'sprinter',
      name: t('fleet.sprinter.name'),
      passengers: t('fleet.sprinter.passengers'),
      features: t('fleet.sprinter.features'),
      image: 'https://images.pexels.com/photos/3806259/pexels-photo-3806259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: '200€/day',
      description: i18n.language === 'fr'
        ? 'Le Mercedes Sprinter est idéal pour les grands groupes. Transport confortable et spacieux pour jusqu\'à 16 passagers.'
        : 'The Mercedes Sprinter is ideal for large groups. Comfortable and spacious transport for up to 16 passengers.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '16 passengers', value: '16' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Wifi className="h-5 w-5" />, label: 'WiFi', value: 'Yes' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Storage', value: 'Abundant' },
      ],
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
                {t('fleet.title')}
              </h1>
              <p className="text-xl">
                {t('fleet.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fleet Carousel */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FleetCarousel />
          </div>
        </section>

        {/* Detailed Fleet Cards */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Découvrez notre flotte en détail' : 'Discover Our Fleet in Detail'}
              </h2>
              <p className="text-xl text-slate-600">
                {i18n.language === 'fr' ? 'Chaque véhicule pour répondre à vos besoins spécifiques' : 'Each vehicle to meet your specific needs'}
              </p>
            </div>

            <div className="space-y-16">
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold text-slate-800 mb-2">
                            {vehicle.name}
                          </h3>
                          <p className="text-orange-600 font-medium text-lg">
                            {vehicle.passengers}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-slate-800">
                            {vehicle.price}
                          </div>
                          <div className="text-slate-500">
                            {i18n.language === 'fr' ? 'à partir de' : 'starting from'}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-8 leading-relaxed">
                        {vehicle.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {vehicle.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center space-x-3">
                            <div className="text-orange-600">
                              {spec.icon}
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{spec.label}</div>
                              <div className="font-medium text-slate-800">{spec.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                        {t('cta.bookNow')}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Équipements standard' : 'Standard Equipment'}
              </h2>
              <p className="text-xl text-slate-600">
                {i18n.language === 'fr' ? 'Tous nos véhicules incluent' : 'All our vehicles include'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Snowflake className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Climatisation' : 'Air Conditioning',
                  description: i18n.language === 'fr' ? 'Confort optimal en toute saison' : 'Optimal comfort in all seasons',
                },
                {
                  icon: <Wifi className="h-8 w-8" />,
                  title: 'WiFi',
                  description: i18n.language === 'fr' ? 'Connexion internet gratuite' : 'Free internet connection',
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Assurance complète' : 'Full Insurance',
                  description: i18n.language === 'fr' ? 'Couverture totale pour votre sécurité' : 'Total coverage for your safety',
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Chauffeur professionnel' : 'Professional Driver',
                  description: i18n.language === 'fr' ? 'Expérimenté et multilingue' : 'Experienced and multilingual',
                },
                {
                  icon: <Luggage className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Espace bagages' : 'Luggage Space',
                  description: i18n.language === 'fr' ? 'Capacité adaptée à vos besoins' : 'Capacity adapted to your needs',
                },
                {
                  icon: <Fuel className="h-8 w-8" />,
                  title: i18n.language === 'fr' ? 'Carburant inclus' : 'Fuel Included',
                  description: i18n.language === 'fr' ? 'Aucun frais supplémentaire' : 'No additional charges',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-xl text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
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

export default Fleet;