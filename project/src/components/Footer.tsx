import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{t('brand')}</span>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>{t('footer.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>{t('footer.hours')}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-slate-800 hover:bg-orange-600 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} {t('brand')}. {t('footer.rights')}.
            </div>
            <div className="text-slate-400 text-sm">
              Made with ❤️ in Morocco
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;