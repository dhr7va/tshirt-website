import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement }) => {
    const itemTotalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <div className="cart-item">
            <p>
                {item.name} - Size: {item.size} - {item.quantity} x ${item.price} = ${itemTotalPrice}
            </p>
            <button onClick={() => onDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onIncrement(item)}>+</button>
        </div>
    );
};

export default CartItem;
