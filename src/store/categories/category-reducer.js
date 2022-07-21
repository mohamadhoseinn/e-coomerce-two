import { CATEGORIES_ACTION_TYPES } from "./category-types";

const initialState = {
  categoriesMap: {},
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTION_TYPES?.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
