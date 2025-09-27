import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import frCommon from '../locales/fr/common.json';
import enCommon from '../locales/en/common.json';

const resources = {
  fr: {
    common: frCommon,
  },
  en: {
    common: enCommon,
  },
};

// Detect language from URL or localStorage
const getInitialLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
  if (urlLang && ['fr', 'en'].includes(urlLang)) {
    return urlLang;
  }
  
  const savedLang = localStorage.getItem('language');
  if (savedLang && ['fr', 'en'].includes(savedLang)) {
    return savedLang;
  }
  
  // Default to French
  return 'fr';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
  });

export default i18n;