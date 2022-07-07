import {
  CartImageContainer,
  Img,
  ItemDetails,
  Name,
  Price,
} from "./CartItemStyle";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartImageContainer>
      <Img imageUrl={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </CartImageContainer>
  );
};

export default CartItem;
