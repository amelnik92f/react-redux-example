import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectUsers,
  selectUsersLoading,
  selectUsersError,
  selectUsersCurrentPage,
} from "../../store/users";
import { Character } from "./Character";

import "./CharacterList.scss";
import { Link } from "react-router-dom";

export const CharacterList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const currentPage = useSelector(selectUsersCurrentPage);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  if (loading && users.length === 0) {
    return <div>Please, wait...</div>;
  }

  if (error) {
    return <div>Sorry, we can't load the data</div>;
  }

  return (
    <ul className="CharacterList">
      {users.map((user) => (
        <li className="CharacterList__Item" key={user.id}>
          <Link to={`/users/${user.id}`}>
            <Character user={user} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
