import React, { useState } from "react";

import AddProductsFort from "./Components/AddProductsForm";
import ProductList from "./Components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  }

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
      <AddProductsFort addProduct={addProduct} />
      <ProductList products={products} updateCart={updateCart} />
      <button >Cart {cart.length}</button>

    </div>
  );
}

export default App;
