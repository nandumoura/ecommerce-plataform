import React, { createContext, useState, useEffect } from 'react';
import { fetchCart, addToCart, clearCart } from '../services/api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const loadCart = async () => {
    const cartData = await fetchCart();
    setCart(cartData);
  };

  const addItemToCart = async (item) => {
    await addToCart(item);
    await loadCart();
  };

  const clearCartItems = async () => {
    await clearCart();
    setCart({ items: [], total: 0 });
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addItemToCart, clearCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
