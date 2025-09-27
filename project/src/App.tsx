import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from './routes';
import './utils/i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document lang attribute when language changes
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Routes />;
}

export default App;