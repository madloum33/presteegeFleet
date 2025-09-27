import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  departure: string;
  destination: string;
  datetime: string; // HTML datetime-local
  passengers: string;
  message: string;
}

/** ⚙️ Utilitaires */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '212693676642';

function encodeForWhatsApp(text: string) {
  return encodeURIComponent(text);
}

function formatDateTimeLocal(dtLocal: string, locale: string) {
  // dtLocal ex: "2025-08-13T16:30"
  if (!dtLocal) return '...';
  try {
    const date = new Date(dtLocal);
    // “datetime-local” est interprété comme local, pas UTC (OK ici)
    return new Intl.DateTimeFormat(locale || 'fr-FR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  } catch {
    return dtLocal;
  }
}

function buildWhatsAppMessage(t: any, formData: FormData, locale: string) {
  // Map de service -> label i18n (au cas où la valeur soit la clé interne)
  const serviceLabelMap: Record<string, string> = {
    airport: t('services.airport.title'),
    'city-tours': t('services.cityTours.title'),
    intercity: t('services.intercity.title'),
    desert: t('services.desert.title'),
    corporate: t('services.corporate.title'),
    custom: t('services.custom.title'),
  };

  const serviceLabel =
    serviceLabelMap[formData.service] || formData.service || '...';

  const lines = [
    t('contact.whatsappMessage'),
    `- ${t('contact.form.name')}: ${formData.name || '...'}`,
    `- ${t('contact.form.email')}: ${formData.email || '...'}`,
    `- ${t('contact.form.whatsapp')}: ${formData.whatsapp || '...'}`,
    `- ${t('contact.form.service')}: ${serviceLabel}`,
    `- ${t('contact.form.departure')}: ${formData.departure || '...'}`,
    `- ${t('contact.form.destination')}: ${formData.destination || '...'}`,
    `- ${t('contact.form.datetime')}: ${formatDateTimeLocal(formData.datetime, locale)}`,
    `- ${t('contact.form.passengers')}: ${formData.passengers}`,
    formData.message
      ? `\n${t('contact.form.message')}: ${formData.message}`
      : '',
  ].filter(Boolean);

  return lines.join('\n');
}

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    departure: '',
    destination: '',
    datetime: '',
    passengers: '1',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation minimale (en plus des "required" HTML)
    const requiredFields: (keyof FormData)[] = [
      'name',
      'email',
      'whatsapp',
      'service',
      'departure',
      'destination',
      'datetime',
      'passengers',
    ];
    const missing = requiredFields.filter(k => !String(formData[k]).trim());
    if (missing.length) {
      setSubmitStatus('error');
      // On affiche l'état d'erreur brièvement
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    try {
      setIsSubmitting(true);

      // Construire le message WhatsApp
      const msg = buildWhatsAppMessage(t, formData, i18n.language || 'fr');
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeForWhatsApp(msg)}`;

      // Ouvrir WhatsApp (web/mobile)
      window.open(url, '_blank');

      setSubmitStatus('success');

      // Reset du formulaire après succès
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          service: '',
          departure: '',
          destination: '',
          datetime: '',
          passengers: '1',
          message: '',
        });
        setSubmitStatus('idle');
      }, 2500);
    } catch (err) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // (Optionnel) Bouton WhatsApp direct, si tu veux le garder
  const openWhatsAppQuick = () => {
    const msg = buildWhatsAppMessage(t, formData, i18n.language || 'fr');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeForWhatsApp(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Contact Info */}
          <div className="md:w-2/5 bg-gradient-to-br from-orange-600 to-orange-700 p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
            <p className="text-orange-100 mb-8 leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <div className="font-medium">{t('footer.address')}</div>
                  <div className="text-orange-100 text-sm">Marrakech, Morocco</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <div className="font-medium">{t('footer.phone')}</div>
                  <div className="text-orange-100 text-sm">{t('footer.hours')}</div>
                </div>
              </div>
            </div>

            <button
              onClick={openWhatsAppQuick}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition-colors w-full justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t('cta.whatsapp')}</span>
            </button>
          </div>

          {/* Form */}
          <div className="md:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder={t('contact.form.email')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.whatsapp')} *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.service')} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">{t('contact.form.service')}</option>
                    <option value="airport">{t('services.airport.title')}</option>
                    <option value="city-tours">{t('services.cityTours.title')}</option>
                    <option value="intercity">{t('services.intercity.title')}</option>
                    <option value="desert">{t('services.desert.title')}</option>
                    <option value="corporate">{t('services.corporate.title')}</option>
                    <option value="custom">{t('services.custom.title')}</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="departure" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.departure')} *
                  </label>
                  <input
                    type="text"
                    id="departure"
                    name="departure"
                    required
                    value={formData.departure}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Marrakech Airport..."
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.destination')} *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Medina, Hotel..."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.datetime')} *
                  </label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    required
                    value={formData.datetime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.passengers')} *
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    required
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    {[...Array(16)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'passenger' : 'passengers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder={t('contact.form.message')}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:shadow-lg transform hover:-translate-y-0.5'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>{t('contact.form.success')}</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <span>{t('contact.form.error')}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
