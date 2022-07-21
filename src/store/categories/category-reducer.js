import { CATEGORIES_ACTION_TYPES } from "./category-types";

const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTION_TYPES?.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
