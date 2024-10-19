import React, { useState } from "react";

import AddProductsFort from "./Components/AddProductsForm";
import ProductList from "./Components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  return (
    <div>
      <h1>Tshirt Shop</h1>
      <AddProductsFort addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
