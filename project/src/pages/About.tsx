import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Heart } from 'lucide-react';
import { generateMetaTags } from '../utils/seo';

const About: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  
  const metaTags = generateMetaTags({
    title: t('seo.about.title'),
    description: t('seo.about.description'),
  }, i18n.language);

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: i18n.language === 'fr' ? 'Excellence' : 'Excellence',
      description: i18n.language === 'fr' 
        ? 'Nous nous efforçons de fournir un service de transport de la plus haute qualité.'
        : 'We strive to provide the highest quality transport service.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: i18n.language === 'fr' ? 'Sécurité' : 'Safety',
      description: i18n.language === 'fr'
        ? 'La sécurité de nos clients est notre priorité absolue dans tous nos services.'
        : 'Our clients\' safety is our absolute priority in all our services.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: i18n.language === 'fr' ? 'Service client' : 'Customer Service',
      description: i18n.language === 'fr'
        ? 'Une équipe dédiée disponible 24h/24 pour répondre à tous vos besoins.'
        : 'A dedicated team available 24/7 to meet all your needs.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: i18n.language === 'fr' ? 'Passion' : 'Passion',
      description: i18n.language === 'fr'
        ? 'Notre passion pour le Maroc se reflète dans chaque voyage que nous organisons.'
        : 'Our passion for Morocco is reflected in every trip we organize.',
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
              backgroundImage: 'url(https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('nav.about')}
              </h1>
              <p className="text-xl">
                {i18n.language === 'fr' 
                  ? 'Découvrez l\'histoire de Prestige Fleet'
                  : 'Discover the story of Prestige Fleet'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  {i18n.language === 'fr' ? 'Notre histoire' : 'Our Story'}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {i18n.language === 'fr'
                    ? "Depuis plus de 5 ans, Prestige Fleet s'est imposé comme le leader du transport touristique premium au Maroc. Née de la passion de faire découvrir les merveilles de notre pays dans les meilleures conditions, notre entreprise a su allier tradition marocaine et standards internationaux."
                    : "For over 5 years, Prestige Fleet has established itself as the leader in premium tourist transport in Morocco. Born from the passion to showcase the wonders of our country in the best conditions, our company has successfully combined Moroccan tradition with international standards."
                  }
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {i18n.language === 'fr'
                    ? "Basés à Marrakech, au cœur de la Perle du Sud, nous offrons une gamme complète de services de transport premium : transferts aéroport, tours de ville, excursions dans le désert, voyages inter-villes et solutions corporate sur mesure."
                    : "Based in Marrakech, in the heart of the Pearl of the South, we offer a complete range of premium transport services: airport transfers, city tours, desert excursions, intercity travel, and tailor-made corporate solutions."
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Nos valeurs' : 'Our Values'}
              </h2>
              <p className="text-xl text-slate-600">
                {i18n.language === 'fr' 
                  ? 'Les principes qui guident notre excellence'
                  : 'The principles that guide our excellence'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {i18n.language === 'fr' ? 'Notre équipe' : 'Our Team'}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {i18n.language === 'fr'
                  ? 'Une équipe de professionnels passionnés dédiée à votre satisfaction'
                  : 'A team of passionate professionals dedicated to your satisfaction'}
              </p>
            </div>
            {/*  
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Ahmed Benali',
                  role: i18n.language === 'fr' ? 'Fondateur & Directeur' : 'Founder & Director',
                  image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
                },
                {
                  name: 'Fatima Alaoui',
                  role: i18n.language === 'fr' ? 'Responsable Relations Client' : 'Customer Relations Manager',
                  image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
                },
                {
                  name: 'Mohamed Tazi',
                  role: i18n.language === 'fr' ? 'Chef des Opérations' : 'Operations Manager',
                  image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-orange-100"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600/20 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
            */}
            
          </div>
        </section>
      </div>
    </>
  );
};

export default About;