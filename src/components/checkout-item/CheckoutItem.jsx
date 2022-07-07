import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

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

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearCartItemHandler = () => clearItemFromCart(cartItem);

  const removeCartHandler = () => removeItemToCart(cartItem);
  const addCartHandler = () => addItemToCart(cartItem);

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
