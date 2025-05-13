import React, { useState, useEffect } from 'react';
import { prints } from '../../data/mockData';
import { useDesign } from '../../context/DesignContext';
import { Print, PrintCategory } from '../../types';
import { motion } from 'framer-motion';

const PrintSelector: React.FC = () => {
  const { selectedMood, selectedPrint, setSelectedPrint, setPrintCategory } = useDesign();
  const [filteredPrints, setFilteredPrints] = useState<Print[]>(prints);
  const [activePrints, setActivePrints] = useState<Print[]>(prints);
  const [activeCategory, setActiveCategory] = useState<PrintCategory | 'all'>('all');

  // Get unique categories from prints
  const categories: PrintCategory[] = Array.from(
    new Set(prints.map((print) => print.category))
  ) as PrintCategory[];

  useEffect(() => {
    // Filter prints based on selected mood
    if (selectedMood) {
      const moodCompatiblePrints = prints.filter((print) =>
        print.moodMatch.includes(selectedMood)
      );
      setFilteredPrints(moodCompatiblePrints);
      setActivePrints(
        activeCategory === 'all'
          ? moodCompatiblePrints
          : moodCompatiblePrints.filter((p) => p.category === activeCategory)
      );
    } else {
      setFilteredPrints(prints);
      setActivePrints(
        activeCategory === 'all'
          ? prints
          : prints.filter((p) => p.category === activeCategory)
      );
    }
  }, [selectedMood, activeCategory]);

  const handleSelect = (print: Print) => {
    setSelectedPrint(print.id);
    setPrintCategory(print.category);
  };

  const handleCategoryFilter = (category: PrintCategory | 'all') => {
    setActiveCategory(category);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose a Print</h2>
      <p className="text-gray-600 mb-4">
        {selectedMood
          ? `Prints that match your ${selectedMood} mood`
          : 'Select a print for your design'}
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeCategory === 'all'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          onClick={() => handleCategoryFilter('all')}
        >
          All
        </motion.button>

        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors
              ${activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Prints Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activePrints.length > 0 ? (
          activePrints.map((print, index) => (
            <motion.div
              key={print.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all
                ${selectedPrint === print.id
                  ? 'border-purple-500 ring-2 ring-offset-2 ring-purple-500'
                  : 'border-transparent hover:shadow-lg'
                }`}
              onClick={() => handleSelect(print)}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={print.image}
                  alt={print.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <p className="text-white text-sm font-medium">{print.name}</p>
                  <div className="mt-1 flex flex-wrap">
                    <span className="text-white/80 text-xs capitalize mr-2">
                      {print.category}
                    </span>
                    {selectedMood && print.moodMatch.includes(selectedMood) && (
                      <span className="bg-green-500/80 text-white text-xs px-1.5 rounded-sm">
                        Mood Match
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">
              No prints match the current filter. Try a different category or mood.
            </p>
          </div>
        )}
      </div>

      {/* Custom Upload Option */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 text-center"
      >
        <h3 className="font-medium mb-2">Want to use your own artwork?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Upload a custom design to make your clothing truly unique
        </p>
        <button 
          className="inline-flex items-center justify-center py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
        >
          Upload Your Design
        </button>
      </motion.div>
    </div>
  );
};

export default PrintSelector;