import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartItem from './CartItem';

const Cart = ({ closeModal }) => {
    const { cartItems, calculateTotal, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                cartItems.map((item, idx) => (
                    <CartItem key={idx} item={item} />
                ))
            )}
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={closeModal}>Close</button>
        </div>
    );
};

export default Cart;
