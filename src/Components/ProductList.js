import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, updateCart }) => {
    return (
        <div>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} updateCart={updateCart} />
            ))}
        </div>
    );
};

export default ProductList;
