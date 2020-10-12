import { USERS_NS } from "./constants";
import { createSelector } from "reselect";

export const selectUsersState = (state) => state[USERS_NS];

export const selectUsers = createSelector(
  selectUsersState,
  ({ users }) => users
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  ({ loading }) => loading
);

export const selectUsersError = createSelector(
  selectUsersState,
  ({ error }) => error
);

export const selectUsersPages = createSelector(
  selectUsersState,
  ({ pages }) => pages
);

export const selectUsersCurrentPage = createSelector(
  selectUsersState,
  ({ currentPage }) => currentPage
);
