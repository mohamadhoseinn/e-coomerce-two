import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-action";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdownStyle";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("./checkout");
    dispatch(setIsCartOpen(false));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
