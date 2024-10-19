import React, { useState } from 'react';
import AddProductsForm from './Components/AddProductsForm';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './style.css';

const App = ({ openModal }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
      <button onClick={openModal}>Cart {cart.length}</button>

    </div >
  );
};

export default App;
