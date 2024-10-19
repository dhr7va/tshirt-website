import React, { useState } from "react";

import AddProductsFort from "./Components/AddProductsForm";


const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  return (
    <div>
      <h1>Tshirt Shop</h1>
      <AddProductsFort addProduct={addProduct} />
    </div>
  );
}

export default App;
