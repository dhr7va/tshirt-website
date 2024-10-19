import React, { useState } from 'react';
import AddProductsForm from './Components/AddProductsForm';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './style.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateCart = (size, product) => {
    let quantityKey = 'quantity' + size;
    if (product[quantityKey] > 0) {
      setCart([...cart, { ...product, size }]);
      product[quantityKey]--;
      const updatedProducts = [...products];
      updatedProducts[products.indexOf(product)] = product;
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <h1>Tshirt Shop</h1>
      <AddProductsForm addProduct={addProduct} />
      <ProductList products={products} updateCart={updateCart} />
      <button onClick={() => setModalOpen(true)}>Cart {cart.length}</button>

      {modalOpen && <Cart cart={cart} closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
