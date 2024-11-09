import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name && cartItem.size === item.size
      );

      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };


  const cartLength = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartLength,
        calculateTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
