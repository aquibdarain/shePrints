import React, { useState } from 'react';
import { useDesign } from '../../context/DesignContext';
import { moodColorMap, getComplementaryColors } from '../../utils/colorUtils';
import { motion } from 'framer-motion';

const ColorCustomizer: React.FC = () => {
  const { selectedMood, customColors, setCustomColors } = useDesign();
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);

  // Get default colors based on mood
  const defaultColors = selectedMood 
    ? [
        moodColorMap[selectedMood].primary,
        moodColorMap[selectedMood].secondary,
        moodColorMap[selectedMood].accent
      ]
    : ['#7C3AED', '#EC4899', '#FBBF24'];

  // Get complementary colors for the color picker
  const complementaryColors = selectedMood
    ? getComplementaryColors(moodColorMap[selectedMood].primary)
    : getComplementaryColors('#7C3AED');

  // Initialize customColors if empty
  React.useEffect(() => {
    if (customColors.length === 0 && selectedMood) {
      setCustomColors([moodColorMap[selectedMood].primary]);
    }
  }, [selectedMood, customColors, setCustomColors]);

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  const handleColorChange = (color: string) => {
    if (selectedColorIndex !== null) {
      const newColors = [...customColors];
      newColors[selectedColorIndex] = color;
      setCustomColors(newColors);
    } else {
      setCustomColors([...customColors, color]);
    }
  };

  const handleAddColor = () => {
    if (customColors.length < 5) {
      // Add a different color than the ones already selected
      const availableColors = complementaryColors.filter(
        color => !customColors.includes(color)
      );
      if (availableColors.length > 0) {
        setCustomColors([...customColors, availableColors[0]]);
      }
    }
  };

  const handleRemoveColor = (index: number) => {
    if (customColors.length > 1) {
      const newColors = [...customColors];
      newColors.splice(index, 1);
      setCustomColors(newColors);
      if (selectedColorIndex === index) {
        setSelectedColorIndex(null);
      } else if (selectedColorIndex !== null && selectedColorIndex > index) {
        setSelectedColorIndex(selectedColorIndex - 1);
      }
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Customize Colors</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="mb-4">
          <p className="text-gray-600 mb-2">
            Your current color palette:
          </p>
          <div className="flex items-center gap-3">
            {customColors.map((color, index) => (
              <div key={`${color}-${index}`} className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full cursor-pointer transition-all ${
                    selectedColorIndex === index ? 'ring-2 ring-offset-2 ring-gray-700' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(index)}
                />
                {customColors.length > 1 && (
                  <button
                    className="absolute -top-1 -right-1 bg-white rounded-full w-4 h-4 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-red-500 hover:border-red-500"
                    onClick={() => handleRemoveColor(index)}
                    aria-label="Remove color"
                  >
                    <span className="text-xs">×</span>
                  </button>
                )}
              </div>
            ))}
            
            {customColors.length < 5 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-purple-400 hover:text-purple-500 transition-colors"
                onClick={handleAddColor}
                aria-label="Add color"
              >
                +
              </motion.button>
            )}
          </div>
        </div>
        
        <div>
          <p className="text-gray-600 mb-2">
            {selectedColorIndex !== null
              ? 'Select a new color:'
              : 'Choose colors that express your style:'}
          </p>
          <div className="grid grid-cols-8 md:grid-cols-10 gap-2">
            {[...defaultColors, ...complementaryColors].slice(0, 20).map((color, index) => (
              <motion.div
                key={`picker-${color}-${index}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-200"
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>
        
        {selectedMood && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              These colors are inspired by your {selectedMood} mood selection. 
              Feel free to customize them to better express your personal style.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorCustomizer;