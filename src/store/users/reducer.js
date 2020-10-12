import { handleActions } from "redux-actions";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  setUsersCurrentPage,
} from "./actions";

const initialState = {
  users: [],
  loading: false,
  error: null,
  pages: 1,
  currentPage: 1,
};

export const usersReducer = handleActions(
  {
    [fetchUsersRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchUsersSuccess]: (state, { payload: { users, pages } }) => ({
      ...state,
      loading: false,
      users,
      pages,
    }),
    [fetchUsersError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      users: [],
    }),
    [setUsersCurrentPage]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
    }),
  },
  initialState
);
