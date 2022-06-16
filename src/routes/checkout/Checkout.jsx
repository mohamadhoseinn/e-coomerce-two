import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, quantity, name } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <h2>{quantity}</h2>
            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
