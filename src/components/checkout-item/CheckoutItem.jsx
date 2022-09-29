import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";

import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart-action";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Price,
  Quantity,
  Arrow,
  RemoveButton,
} from "./CheckoutItemStyle";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearCartItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const removeCartHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  const addCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img imageUrl={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeCartHandler}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={addCartHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
