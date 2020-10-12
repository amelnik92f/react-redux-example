import { usersSaga } from "./users";

export const startSagas = (sagaMiddleware) => {
  [usersSaga].forEach(sagaMiddleware.run);
};
