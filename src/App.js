import React, { useContext, useState } from 'react';
import AddProductsForm from './Components/Product/AddProductsForm';
import ProductList from './Components/Product/ProductList';
import Card from './Components/UI/Card';
import Modal from './Components/Modal';
import { CartContext } from './CartContext';
import Cart from './Components/Cart/Cart';
import './style.css';

const App = () => {
  const { addToCart, cartLength } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateCart = (size, product) => {
    let quantityKey = 'quantity' + size;
    if (product[quantityKey] > 0) {
      addToCart({ ...product, size, quantity: 1 });
      product[quantityKey]--;
      const updatedProducts = [...products];
      updatedProducts[products.indexOf(product)] = product;
      setProducts(updatedProducts);
    }
  };

  return (
    <Card className="app-wrapper">
      <h1>Tshirt Shop</h1>
      <Card>
        <AddProductsForm addProduct={addProduct} />
      </Card>
      <Card>
        <ProductList products={products} updateCart={updateCart} />
      </Card>
      <button className="cart-button" onClick={openModal}>
        Cart {cartLength}
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Cart />
        </Modal>
      )}
    </Card>
  );
};

export default App;
