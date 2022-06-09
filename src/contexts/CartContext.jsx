import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems containers productToAdd
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem?.id === productToAdd?.id
  );
  // if found, increment quantity
  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem?.id === productToAdd?.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;