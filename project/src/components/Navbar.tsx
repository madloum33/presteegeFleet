import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg group-hover:scale-105 transition-transform shadow-md">
              <img src="/images/logo.png" alt="Logo" className="h-6 w-6" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === link.path
                    ? 'text-orange-600'
                    : isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('cta.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-full font-medium mt-4"
                >
                  {t('cta.getQuote')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;