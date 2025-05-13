import React from 'react';
import { useDesign } from '../../context/DesignContext';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignPreview: React.FC = () => {
  const { currentDesign, saveDesign, resetDesign } = useDesign();
  const { addToCart } = useCart();
  const [size, setSize] = React.useState('M');
  const [quantity, setQuantity] = React.useState(1);
  const [saved, setSaved] = React.useState(false);

  const handleSaveDesign = () => {
    saveDesign();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleAddToCart = () => {
    if (currentDesign) {
      addToCart(currentDesign, size, quantity);
      resetDesign();
    }
  };

  if (!currentDesign?.clothingType) {
    return (
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center h-96 flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">
          Select a clothing item to start designing
        </p>
        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
          <ShoppingBag className="h-16 w-16 text-gray-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Design</h2>
      
      <div className="aspect-square bg-gray-50 rounded-lg mb-6 relative overflow-hidden">
        {/* Main preview image */}
        <img
          src={currentDesign.clothingType.image}
          alt={currentDesign.clothingType.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with print or color visualization */}
        {currentDesign.print && (
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60 mix-blend-multiply"
            style={{
              backgroundImage: `url(${
                currentDesign.print
                  ? currentDesign.uploadedArtwork || prints.find(p => p.id === currentDesign.print)?.image
                  : ''
              })`
            }}
          />
        )}
        
        {/* Color overlay */}
        {currentDesign.colors.length > 0 && (
          <div
            className="absolute inset-0 mix-blend-color"
            style={{
              backgroundColor: currentDesign.colors[0]
            }}
          />
        )}
        
        {/* Save to favorites button */}
        <button
          onClick={handleSaveDesign}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Save to favorites"
        >
          <Heart
            className={`h-5 w-5 ${saved ? 'text-pink-500 fill-pink-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      
      {/* Product details */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">
            {currentDesign.clothingType.name}
          </h3>
          <span className="text-xl font-bold">
            ${currentDesign.clothingType.basePrice.toFixed(2)}
          </span>
        </div>
        
        <div className="space-y-2">
          {currentDesign.mood && (
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">Mood:</span>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium capitalize">
                {currentDesign.mood}
              </span>
            </div>
          )}
          
          {currentDesign.printCategory && (
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">Print style:</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium capitalize">
                {currentDesign.printCategory}
              </span>
            </div>
          )}
          
          {currentDesign.colors.length > 0 && (
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">Colors:</span>
              <div className="flex -space-x-1">
                {currentDesign.colors.map((color, index) => (
                  <div
                    key={`preview-${color}-${index}`}
                    className="w-5 h-5 rounded-full border border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Size selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </label>
        <div className="flex gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sizeOption) => (
            <button
              key={sizeOption}
              onClick={() => setSize(sizeOption)}
              className={`w-12 h-10 rounded-md border text-sm font-medium transition-colors
                ${
                  size === sizeOption
                    ? 'bg-purple-600 border-purple-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-purple-600'
                }`}
            >
              {sizeOption}
            </button>
          ))}
        </div>
      </div>
      
      {/* Quantity selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex border border-gray-300 rounded-md w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full text-center py-2 border-x border-gray-300 focus:outline-none"
            min="1"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={resetDesign}
          className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="flex items-center justify-center py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
};

const prints = []; // Mock database reference

export default DesignPreview;