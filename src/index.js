import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from './Components/Modal';

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <App openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal content */}
        <h2>Cart Items</h2>
        { }
      </Modal>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
