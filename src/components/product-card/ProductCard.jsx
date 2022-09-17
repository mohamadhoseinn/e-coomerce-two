import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_Type_CLASSES } from "../button/Button";

import {
  Footer,
  Img,
  Name,
  Price,
  ProductCartContainer,
} from "./ProductCardStyle";

import { addItemToCart } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <Img imageUrl={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_Type_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
