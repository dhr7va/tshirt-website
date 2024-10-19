import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, closeModal }) => {
    return (
        <div>
            <h2>Cart Items</h2>
            {cart.length === 0 ? <p>No items in the cart</p> : cart.map((item, idx) => (
                <CartItem key={idx} item={item} />
            ))}
            <button onClick={closeModal}>CLose</button>

        </div>
    );
}

export default Cart;