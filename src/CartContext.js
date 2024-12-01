import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);
  const openThankYouModal = () => setIsThankYouModalOpen(true);
  const closeThankYouModal = () => setIsThankYouModalOpen(false);

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

  const incrementItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === item.name && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementItem = (item) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.name === item.name && cartItem.size === item.size
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const handleProceed = () => {
    setCartItems([]);
    closeCartModal();
    openThankYouModal();
  };

  const cartLength = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartModalOpen,
        isThankYouModalOpen,
        openCartModal,
        closeCartModal,
        openThankYouModal,
        closeThankYouModal,
        addToCart,
        incrementItem,
        decrementItem,
        handleProceed,
        cartLength,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
