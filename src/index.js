import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from './Components/Modal';

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <>
      <App addToCart={addToCart} openModal={openModal} cartLength={cartLength} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Cart Summary</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Size: {item.size} - {item.quantity} x ${item.price} = $
                {(item.quantity * item.price).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
