import { createContext, useReducer } from "react";

import { createAction } from "./utils/reducerUtils";

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

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems containers productToRemove
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem?.id === productToRemove?.id
  );
  // if found, decrement quantity
  if (exsistingCartItem?.quantity === 1) {
    return cartItems.find((cartItem) => cartItem?.id !== productToRemove?.id);
  }
  // return new array with modified cartItems/ new cart item
  return cartItems.map((cartItem) =>
    cartItem?.id === productToRemove?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((clearItem) => clearItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducre = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES?.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES?.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`unHandled type of ${type} in cartReducer`);
  }
};

const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducre, initialState);

  const UpdateCartReucer = (mewCartItems) => {
    const newCartCount = mewCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCarTotal = mewCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES?.SET_CART_ITEMS, {
        cartItems: mewCartItems,
        cartTotal: newCarTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    UpdateCartReucer(newCartItems);
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    UpdateCartReucer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    UpdateCartReucer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES?.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    cartCount,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
