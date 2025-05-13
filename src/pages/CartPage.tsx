import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingBag className="mr-3 h-7 w-7 text-purple-600" />
            Your Shopping Cart
          </motion.h1>

          {cartItems.length === 0 ? (
            <motion.div 
              className="text-center py-12 bg-white rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any custom designs to your cart yet
              </p>
              <Link
                to="/designer"
                className="inline-flex items-center justify-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
              >
                Start Designing
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in Your Cart
                  </h2>
                </div>
                
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="p-6 border-b border-gray-200 last:border-b-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.design.clothingType?.image}
                          alt={item.design.clothingType?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">
                              {item.design.clothingType?.name}
                            </h3>
                            <div className="space-y-1 mb-3">
                              <p className="text-sm text-gray-600">
                                Size: <span className="font-medium">{item.size}</span>
                              </p>
                              {item.design.mood && (
                                <p className="text-sm text-gray-600">
                                  Mood: <span className="font-medium capitalize">{item.design.mood}</span>
                                </p>
                              )}
                              {item.design.printCategory && (
                                <p className="text-sm text-gray-600">
                                  Style: <span className="font-medium capitalize">{item.design.printCategory}</span>
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="md:text-right">
                            <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-500">
                              ${item.totalPrice.toFixed(2)} total
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex border border-gray-300 rounded-md w-28">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-full text-center py-1 border-x border-gray-300 focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$5.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes</span>
                    <span className="font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">
                        ${(cartTotal + 5.99 + cartTotal * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors">
                  Proceed to Checkout
                </button>
              </div>
              
              <div className="text-center">
                <Link
                  to="/designer"
                  className="inline-flex items-center justify-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;