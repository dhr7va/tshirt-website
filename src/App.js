import React, { useState } from 'react';
import AddProductsForm from './Components/Product/AddProductsForm';
import ProductList from './Components/Product/ProductList';
import Card from './Components/UI/Card';
import './style.css';

const App = ({ openModal, addToCart, cartLength }) => {
  const [products, setProducts] = useState([]);

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
    </Card>
  );
};

export default App;
