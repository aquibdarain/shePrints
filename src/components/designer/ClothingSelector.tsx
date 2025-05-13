import React from 'react';
import { clothingTypes } from '../../data/mockData';
import { useDesign } from '../../context/DesignContext';
import { ClothingType } from '../../types';
import { motion } from 'framer-motion';

const ClothingSelector: React.FC = () => {
  const { selectedClothing, setSelectedClothing } = useDesign();

  const handleSelect = (clothing: ClothingType) => {
    setSelectedClothing(clothing);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Style</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {clothingTypes.map((clothing, index) => (
          <motion.div
            key={clothing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-all group
              ${selectedClothing?.id === clothing.id
                ? 'ring-4 ring-purple-500 ring-offset-2'
                : 'hover:shadow-lg'
              }`}
            onClick={() => handleSelect(clothing)}
          >
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={clothing.image}
                alt={clothing.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200
                  ${selectedClothing?.id === clothing.id 
                    ? 'bg-purple-500/30' 
                    : 'bg-black/0 group-hover:bg-black/10'
                  }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="text-white text-center font-medium">{clothing.name}</p>
                <p className="text-white/80 text-xs text-center">${clothing.basePrice}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClothingSelector;