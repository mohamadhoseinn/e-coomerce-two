import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import Button, { BUTTON_Type_CLASSES } from "../button/Button";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_Type_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Card
      </Button>
    </div>
  );
};

export default ProductCard;
