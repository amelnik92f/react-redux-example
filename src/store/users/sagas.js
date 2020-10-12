import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions";
import { fetchCharacters } from "../../api/characters";
import { transformCharacters } from "../../utils";

export function* usersSaga() {
  yield takeLatest(fetchUsers, handler);
}

function* handler({ payload: page = 1 }) {
  yield put(fetchUsersRequest());

  try {
    const usersData = yield call(fetchCharacters, page);
    const { users, pages } = transformCharacters(usersData);

    yield put(fetchUsersSuccess({ users, pages }));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}
