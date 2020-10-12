import { createActions } from "redux-actions";
import { identity } from "../../utils";

export const {
  fetchUsers,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  setUsersCurrentPage
} = createActions({
  FETCH_USERS: identity,
  FETCH_USERS_REQUEST: identity,
  FETCH_USERS_SUCCESS: identity,
  FETCH_USERS_ERROR: identity,
  SET_USERS_CURRENT_PAGE: identity
});
