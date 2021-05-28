import { all, fork } from "redux-saga/effects";

import todoSaga from "./popular-movies/sagas";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}