import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import Button, { BUTTON_Type_CLASSES } from "../button/Button";

import {
  Footer,
  Img,
  Name,
  Price,
  ProductCartContainer,
} from "./ProductCardStyle";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

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
