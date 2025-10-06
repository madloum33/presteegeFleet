import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Luggage, Wifi, Snowflake } from 'lucide-react';

interface Vehicle {
  id: string;
  nameKey: string;
  passengersKey: string;
  featuresKey: string;
  image: string;
  price: string;
}

const FleetCarousel: React.FC = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);

  const vehicles: Vehicle[] = [
    {
      id: 'vclass',
      nameKey: 'fleet.vclass.name',
      passengersKey: 'fleet.vclass.passengers',
      featuresKey: 'fleet.vclass.features',
      image: '/images/IMG-20250823-WA0002.jpg',
      price: '150€/day',
    },
    {
      id: 'eclass',
      nameKey: 'fleet.eclass.name',
      passengersKey: 'fleet.eclass.passengers',
      featuresKey: 'fleet.eclass.features',
      image: '/images/IMG-20250823-WA0004.jpg',
      price: '140€/day',
    },
    {
      id: 'prado',
      nameKey: 'fleet.prado.name',
      passengersKey: 'fleet.prado.passengers',
      featuresKey: 'fleet.prado.features',
      image: '/images/IMG-20250823-WA0006.jpg',
      price: '180€/day',
    },
    {
      id: 'vclass2',
      nameKey: 'fleet.vclass2.name',
      passengersKey: 'fleet.vclass2.passengers',
      featuresKey: 'fleet.vclass2.features',
      image: '/images/IMG-20250823-WA0016.jpg',
      price: '160€/day',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {vehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="w-full flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-96">
                      <img
                        src={vehicle.image}
                        alt={t(vehicle.nameKey)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">
                        {t(vehicle.nameKey)}
                      </h3>
                      
                      <div className="flex items-center text-orange-600 font-medium mb-4">
                        <Users className="h-5 w-5 mr-2" />
                        {t(vehicle.passengersKey)}
                      </div>

                      <div className="space-y-3 mb-6">
                        {t(vehicle.featuresKey).split(' • ').map((feature, idx) => (
                          <div key={idx} className="flex items-center text-slate-600">
                            {idx === 0 && <Snowflake className="h-4 w-4 mr-2 text-blue-500" />}
                            {idx === 1 && <Wifi className="h-4 w-4 mr-2 text-green-500" />}
                            {idx === 2 && <Luggage className="h-4 w-4 mr-2 text-orange-500" />}
                            {idx === 3 && <Users className="h-4 w-4 mr-2 text-purple-500" />}
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-slate-800">
                            {vehicle.price}
                          </span>
                          <span className="text-slate-500 ml-2">starting</span>
                        </div>
                      
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-orange-600 hover:shadow-xl transition-all duration-200 z-10"
        aria-label="Previous vehicle"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-orange-600 hover:shadow-xl transition-all duration-200 z-10"
        aria-label="Next vehicle"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-orange-600 w-6'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to vehicle ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FleetCarousel;