import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Design } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (design: Design, size: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const calculatePrice = (design: Design) => {
    // Basic pricing logic - can be expanded based on product complexity
    const basePrice = design.clothingType?.basePrice || 0;
    const customPrintPrice = design.uploadedArtwork ? 10 : 5;
    return basePrice + customPrintPrice;
  };

  const addToCart = (design: Design, size: string, quantity: number) => {
    const price = calculatePrice(design);
    const newItem: CartItem = {
      id: `${design.id}-${size}-${Date.now()}`,
      design,
      size,
      quantity,
      price,
      totalPrice: price * quantity
    };
    
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems(
      cartItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity, totalPrice: item.price * quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};