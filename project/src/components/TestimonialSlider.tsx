import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider: React.FC = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      country: t('testimonials.client1.country'),
      text: t('testimonials.client1.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: t('testimonials.client2.name'),
      country: t('testimonials.client2.country'),
      text: t('testimonials.client2.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: t('testimonials.client3.name'),
      country: t('testimonials.client3.country'),
      text: t('testimonials.client3.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: t('testimonials.client4.name'),
      country: t('testimonials.client4.country'),
      text: t('testimonials.client4.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: t('testimonials.client5.name'),
      country: t('testimonials.client5.country'),
      text: t('testimonials.client5.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: t('testimonials.client6.name'),
      country: t('testimonials.client6.country'),
      text: t('testimonials.client6.text'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex items-center">
        {/* Quote icon */}
        <div className="absolute top-6 left-6 text-orange-200">
          <Quote className="h-12 w-12" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-medium italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Client info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
              />
              <div className="text-left">
                <div className="font-semibold text-slate-800 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-slate-600">
                  {testimonials[currentIndex].country}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 hover:text-orange-600 transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 hover:text-orange-600 transition-all duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-orange-600 w-6'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;