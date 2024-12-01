import React, { useState } from 'react';
import AddProductsForm from './Components/Product/AddProductsForm';
import ProductList from './Components/Product/ProductList';
import Card from './Components/UI/Card';
import Modal from './Components/Modal';
import Cart from './Components/Cart/Cart';
import { useCart } from './CartContext';
import './style.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, openCartModal, cartLength, isCartModalOpen, isThankYouModalOpen, closeThankYouModal } = useCart();

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
      <button className="cart-button" onClick={openCartModal}>
        Cart {cartLength}
      </button>
      {isCartModalOpen && (
        <Modal>
          <Cart />
        </Modal>
      )}
      {isThankYouModalOpen && (
        <Modal>
          <h2>Thank You for Your Purchase!</h2>
          <button onClick={closeThankYouModal}>Close</button>
        </Modal>
      )}
    </Card>
  );
};

export default App;
