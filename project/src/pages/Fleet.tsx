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
      name: 'Mercedes V-Class VIP',
      category: i18n.language === 'fr' ? 'Minivan de Luxe' : 'Luxury Minivan',
      image: '/images/IMG-20250823-WA0015.jpg',
      gallery: ['/images/IMG-20250823-WA0003.jpg', '/images/IMG-20250823-WA0004.jpg'],
      description: i18n.language === 'fr'
        ? 'Le Mercedes V-Class VIP redéfinit le transport de luxe avec son habitacle spacieux et raffiné. Idéal pour les transferts en groupe ou en famille, il combine élégance allemande et confort premium. Ses sièges en cuir, sa climatisation multi-zones et son système multimédia de pointe offrent une expérience de voyage incomparable à travers le Maroc.'
        : 'The Mercedes V-Class VIP redefines luxury transportation with its spacious and refined interior. Ideal for group or family transfers, it combines German elegance with premium comfort. Its leather seats, multi-zone climate control, and cutting-edge multimedia system provide an unparalleled travel experience across Morocco.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Passagers' : 'Passengers', value: '6-7' },
        { icon: <Luggage className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Bagages' : 'Luggage', value: 'XXL' },
        { icon: <Snowflake className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Climatisation' : 'Climate', value: i18n.language === 'fr' ? 'Multi-zones' : 'Multi-zone' },
        { icon: <Wifi className="h-5 w-5" />, label: 'WiFi', value: '4G' },
      ],
    },
    {
      id: 'jeep',
      name: 'Jeep Grand Cherokee',
      category: i18n.language === 'fr' ? 'SUV Premium' : 'Premium SUV',
      image: '/images/IMG-20250823-WA0007.jpg',
      gallery: ['/images/IMG-20250823-WA0006.jpg', '/images/IMG-20250823-WA0007.jpg'],
      description: i18n.language === 'fr'
        ? 'Le Jeep Grand Cherokee incarne la puissance et le raffinement américain. Parfait pour explorer les routes marocaines, des villes impériales aux pistes de l\'Atlas, ce SUV offre un confort exceptionnel et une capacité tout-terrain impressionnante. Son intérieur luxueux et sa technologie avancée garantissent une conduite agréable en toutes circonstances.'
        : 'The Jeep Grand Cherokee embodies American power and refinement. Perfect for exploring Moroccan roads, from imperial cities to Atlas trails, this SUV offers exceptional comfort and impressive off-road capability. Its luxurious interior and advanced technology ensure a pleasant drive in all circumstances.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Passagers' : 'Passengers', value: '5' },
        { icon: <Shield className="h-5 w-5" />, label: '4x4', value: i18n.language === 'fr' ? 'Intégral' : 'Full' },
        { icon: <Snowflake className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Climatisation' : 'Climate', value: 'Auto' },
        { icon: <Luggage className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Bagages' : 'Luggage', value: 'XL' },
      ],
    },
    {
      id: 'prado',
      name: 'Toyota Land Cruiser Prado',
      category: i18n.language === 'fr' ? 'SUV Tout-Terrain' : 'Off-Road SUV',
      image: '/images/Prado.jpg',
      gallery: ['/images/IMG-20250823-WA0010.jpg', '/images/IMG-20250823-WA0011.jpg'],
      description: i18n.language === 'fr'
        ? 'Le Toyota Land Cruiser Prado est la référence absolue pour les aventures sahariennes et les raids dans le désert. Sa robustesse légendaire, son confort remarquable et sa fiabilité sans faille en font le compagnon idéal pour découvrir les merveilles du Maroc. Des dunes de Merzouga aux sommets de l\'Atlas, il vous emmène partout en toute sécurité.'
        : 'The Toyota Land Cruiser Prado is the absolute reference for Saharan adventures and desert expeditions. Its legendary robustness, remarkable comfort, and unwavering reliability make it the ideal companion to discover Morocco\'s wonders. From Merzouga dunes to Atlas peaks, it takes you everywhere safely.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Passagers' : 'Passengers', value: '7' },
        { icon: <Shield className="h-5 w-5" />, label: '4x4', value: i18n.language === 'fr' ? 'Permanent' : 'Permanent' },
        { icon: <Fuel className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Moteur' : 'Engine', value: i18n.language === 'fr' ? 'Diesel' : 'Diesel' },
        { icon: <Luggage className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Bagages' : 'Luggage', value: 'XXL' },
      ],
    },
    {
      id: 'sprinter',
      name: 'Mercedes Sprinter',
      category: i18n.language === 'fr' ? 'Minibus Premium' : 'Premium Minibus',
      image: '/images/Sprinter.jpg',
      gallery: ['/images/IMG-20250823-WA0017.jpg', '/images/IMG-20250823-WA0018.jpg'],
      description: i18n.language === 'fr'
        ? 'Le Mercedes Sprinter est la solution idéale pour les grands groupes recherchant confort et espace. Parfait pour les transferts aéroport, les circuits touristiques ou les déplacements professionnels, il offre un volume intérieur généreux avec des sièges confortables et une climatisation efficace pour tous les passagers.'
        : 'The Mercedes Sprinter is the ideal solution for large groups seeking comfort and space. Perfect for airport transfers, tourist circuits, or business travel, it offers generous interior volume with comfortable seats and efficient climate control for all passengers.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Passagers' : 'Passengers', value: '15-17' },
        { icon: <Luggage className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Bagages' : 'Luggage', value: 'XXL+' },
        { icon: <Snowflake className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Climatisation' : 'Climate', value: i18n.language === 'fr' ? 'Renforcée' : 'Enhanced' },
        { icon: <Shield className="h-5 w-5" />, label: i18n.language === 'fr' ? 'Sécurité' : 'Safety', value: 'Max' },
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
        <section className="relative h-[500px] bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/IMG-20250823-WA0014.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
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
                      <div className="mb-6">
                        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3">
                          {vehicle.category}
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">
                          {vehicle.name}
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        {vehicle.description}
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {vehicle.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                              {spec.icon}
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{spec.label}</div>
                              <div className="font-semibold text-slate-800">{spec.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a href="/contact" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200">
                        {i18n.language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
                      </a>
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