import React from "react";

const CartItem = ({ item }) => {
    return (
        <p>{item.name} - {item.size}</p>
    )
}

export default CartItem;