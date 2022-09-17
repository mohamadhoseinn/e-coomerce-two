import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../contexts/utils/reducerUtils";

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

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((clearItem) => clearItem.id !== cartItemToClear.id);
};
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemToCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
