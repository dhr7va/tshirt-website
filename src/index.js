import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from './Components/Modal';

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.name === item.name);

      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <App addToCart={addToCart} openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Cart Summary</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </Modal>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
