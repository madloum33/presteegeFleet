export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateMetaTags = (data: SEOData, language: string) => {
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${window.location.pathname}`;
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords || 'transport premium maroc, marrakech, transfert aeroport, tour ville, desert sahara, mercedes, luxury transport morocco',
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image || `${baseUrl}/og-image.jpg`,
    'og:url': data.url || currentUrl,
    'og:type': data.type || 'website',
    'og:site_name': 'Prestige Fleet',
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image || `${baseUrl}/og-image.jpg`,
    'hreflang': language,
    'canonical': currentUrl,
  };
};

export const generateSchemaOrg = (language: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prestige Fleet',
    description: language === 'fr' 
      ? 'Transport touristique premium au Maroc' 
      : 'Premium tourist transport in Morocco',
    url: window.location.origin,
    logo: `${window.location.origin}/public/image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressCountry: 'MA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212 6 93 67 66 42',
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Arabic'],
    },
    sameAs: [
      'https://facebook.com/prestigefleet',
      'https://instagram.com/prestigefleet',
      'https://twitter.com/prestigefleet',
    ],
  };
};