import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../../CartContext';

const Cart = () => {
    const { cartItems, closeCartModal, incrementItem, decrementItem, handleProceed, calculateTotal } = useCart();

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                cartItems.map((item, idx) => (
                    <CartItem
                        key={idx}
                        item={item}
                        onIncrement={incrementItem}
                        onDecrement={decrementItem}
                    />
                ))
            )}
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={closeCartModal}>Close</button>
            <button onClick={handleProceed}>Proceed</button>
        </div>
    );
};

export default Cart;
