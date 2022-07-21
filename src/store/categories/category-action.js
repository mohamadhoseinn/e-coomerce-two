import { CATEGORIES_ACTION_TYPES } from "./category-types";
import { createAction } from "../../contexts/utils/reducerUtils";

export const setCategories = (categoryArray) => {
  return createAction(CATEGORIES_ACTION_TYPES?.SET_CATEGORIES, categoryArray);
};
