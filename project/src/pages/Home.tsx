import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Plane, MapPin, Car, Mountain, Building, Route } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import FleetCarousel from '../components/FleetCarousel';
import TestimonialSlider from '../components/TestimonialSlider';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import { generateMetaTags } from '../utils/seo';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  
  const metaTags = generateMetaTags({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
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

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:title" content={metaTags['og:title']} />
        <meta property="og:description" content={metaTags['og:description']} />
        <meta property="og:image" content={metaTags['og:image']} />
        <meta property="og:url" content={metaTags['og:url']} />
        <meta property="og:type" content={metaTags['og:type']} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
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

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('fleet.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('fleet.subtitle')}
            </p>
          </div>
          
          <FleetCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Home;