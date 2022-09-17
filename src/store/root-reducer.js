import { combineReducers } from "redux";

import { cartReducre } from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/category-reducer";
import { userReducer } from "./user/user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducre,
});
