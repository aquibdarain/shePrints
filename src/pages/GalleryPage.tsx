import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { featuredDesigns } from '../data/mockData';
import { MoodType } from '../types';
import { motion } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<MoodType | 'all'>('all');

  const moods: (MoodType | 'all')[] = [
    'all',
    'happy',
    'confident',
    'calm',
    'playful',
    'energetic',
    'relaxed',
  ];

  const filteredDesigns = featuredDesigns.filter(
    (design) =>
      (selectedMood === 'all' || design.mood === selectedMood) &&
      (searchQuery === '' ||
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Inspiration Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of emotionally-inspired designs and get ideas for your own creations
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search designs..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
                      ${
                        selectedMood === mood
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{design.title}</h3>
                    <p className="text-white/80">{design.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium capitalize">
                      {design.mood}
                    </span>
                    <Link
                      to="/designer"
                      className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center"
                    >
                      Customize
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <Link
                    to="/designer"
                    className="block w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-center transition-colors"
                  >
                    Create Similar Design
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No designs found</h3>
              <p className="text-gray-500 mb-6">
                Try changing your search or filter criteria to find more designs
              </p>
              <Link
                to="/designer"
                className="inline-flex items-center justify-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors"
              >
                Create Your Own Design
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/designer"
            className="inline-flex items-center justify-center py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors"
          >
            Start Designing Your Own
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;