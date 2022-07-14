import { USER_ACTION_TYPES } from "./user-action-types";
import { createAction } from "../../contexts/utils/reducerUtils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES?.SET_CURRENT_USER, user);
};
