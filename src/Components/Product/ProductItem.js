import React from 'react';

const ProductItem = ({ product, updateCart }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => updateCart('L', product)}>Buy Large ({product.quantityL})</button>
            <button onClick={() => updateCart('M', product)}>Buy Medium ({product.quantityM})</button>
            <button onClick={() => updateCart('S', product)}>Buy Small ({product.quantityS})</button>
        </div>
    );
};

export default ProductItem;
