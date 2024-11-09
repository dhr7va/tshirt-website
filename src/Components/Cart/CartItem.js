import React from 'react';

const CartItem = ({ item }) => {
    const itemTotalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <p>
            {item.name} - {item.quantity} * {item.size} - {item.quantity} * ${item.price} = ${itemTotalPrice}
        </p>
    );
};

export default CartItem;
