import React from 'react';
import ClothingSelector from '../components/designer/ClothingSelector';
import MoodSelector from '../components/designer/MoodSelector';
import PrintSelector from '../components/designer/PrintSelector';
import ColorCustomizer from '../components/designer/ColorCustomizer';
import DesignPreview from '../components/designer/DesignPreview';
import { useDesign } from '../context/DesignContext';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignerPage: React.FC = () => {
  const { selectedClothing, selectedMood } = useDesign();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            Design Studio
            <Sparkles className="h-8 w-8 text-purple-500" />
          </h1>
          <p className="text-xl text-gray-600">
            Express your emotions through custom clothing design. 
            Choose your base item, select your mood, and customize your unique piece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ClothingSelector />
            
            {selectedClothing && (
              <>
                <MoodSelector />
                
                {selectedMood && (
                  <>
                    <PrintSelector />
                    <ColorCustomizer />
                  </>
                )}
              </>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <DesignPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;