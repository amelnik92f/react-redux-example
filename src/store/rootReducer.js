import { combineReducers } from "redux";
import { USERS_NS, usersReducer } from "./users";
import { USER_DETAIL_NS, userDetailReducer } from "./userDetail";

export const rootReducer = combineReducers({
  [USERS_NS]: usersReducer,
  [USER_DETAIL_NS]: userDetailReducer,
});
