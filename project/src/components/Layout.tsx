import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { generateMetaTags, generateSchemaOrg } from '../utils/seo';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  
  const schemaOrg = generateSchemaOrg(i18n.language);
  
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-stone-50">
        <Helmet>
          <html lang={i18n.language} />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrg)}
          </script>
        </Helmet>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
};

export default Layout;