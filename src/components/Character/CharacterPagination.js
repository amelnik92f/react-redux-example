import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsersCurrentPage,
  selectUsersLoading,
  selectUsersPages,
  selectUsersCurrentPage,
} from "../../store/users";

import { Pagination } from "../Pagination/Pagination";

export const CharacterPagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectUsersCurrentPage);
  const lastPage = useSelector(selectUsersPages);
  const loading = useSelector(selectUsersLoading);

  const onPaginationChange = (page) => {
    dispatch(setUsersCurrentPage(page));
  };

  return (
    <Pagination
      disabled={loading}
      callback={onPaginationChange}
      lastPage={lastPage}
      currentPage={currentPage}
    />
  );
};
