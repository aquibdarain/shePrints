import React from 'react';
import { moods, moodDescriptions } from '../../data/mockData';
import { useDesign } from '../../context/DesignContext';
import { MoodType } from '../../types';
import { moodColorMap } from '../../utils/colorUtils';
import { motion } from 'framer-motion';

const MoodSelector: React.FC = () => {
  const { selectedMood, setSelectedMood } = useDesign();

  const handleSelect = (mood: MoodType) => {
    setSelectedMood(mood);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">How Do You Feel Today?</h2>
      <p className="text-gray-600 mb-4">
        Select an emotion to inspire your design's colors and patterns
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {moods.map((mood, index) => {
          const moodColor = moodColorMap[mood].primary;
          
          return (
            <motion.div
              key={mood}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSelect(mood)}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all border-2
                ${selectedMood === mood 
                  ? `border-${moodColor} ring-2 ring-offset-2 ring-${moodColor}`
                  : 'border-transparent hover:shadow-lg'
                }`}
              style={{ backgroundColor: selectedMood === mood ? `${moodColor}20` : undefined }}
            >
              <div className="p-4 text-center">
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: moodColor }}
                >
                  <span className="text-xl text-white">
                    {mood === 'happy' && '😊'}
                    {mood === 'confident' && '💪'}
                    {mood === 'calm' && '😌'}
                    {mood === 'playful' && '😄'}
                    {mood === 'energetic' && '⚡'}
                    {mood === 'relaxed' && '😎'}
                  </span>
                </div>
                <h3 className="font-medium capitalize mb-1">{mood}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {moodDescriptions[mood]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedMood && (
        <motion.div 
          className="mt-6 p-4 rounded-lg bg-purple-50 border border-purple-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-medium text-purple-700 capitalize flex items-center">
            <span className="mr-2">
              {selectedMood === 'happy' && '😊'}
              {selectedMood === 'confident' && '💪'}
              {selectedMood === 'calm' && '😌'}
              {selectedMood === 'playful' && '😄'}
              {selectedMood === 'energetic' && '⚡'}
              {selectedMood === 'relaxed' && '😎'}
            </span>
            {selectedMood} Mood Selected
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {moodDescriptions[selectedMood]}
          </p>
          <div className="flex mt-3 gap-2">
            {['primary', 'secondary', 'accent'].map((colorType) => (
              <div 
                key={colorType}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: moodColorMap[selectedMood][colorType as keyof typeof moodColorMap[typeof selectedMood]] }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MoodSelector;