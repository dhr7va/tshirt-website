import React from "react";

const CartItem = ({ item }) => {
    return (
        <p>{item.name} - Size: {item.size} - Quantity: {item.quantity}</p>
    );
};

export default CartItem;
