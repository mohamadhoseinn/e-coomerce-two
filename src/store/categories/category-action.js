import { CATEGORIES_ACTION_TYPES } from "./category-types";
import { createAction } from "../../contexts/utils/reducerUtils";

export const setCategoriesMap = (categoryMap) => {
  return createAction(CATEGORIES_ACTION_TYPES?.SET_CATEGORIES_MAP, categoryMap);
};
