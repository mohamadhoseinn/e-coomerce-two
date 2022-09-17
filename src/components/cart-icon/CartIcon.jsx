import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart-action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIconStyle";

const CartIcon = () => {
  const disaptch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => disaptch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
