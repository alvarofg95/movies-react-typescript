import { all, fork } from "redux-saga/effects";
import popularMoviesSaga from "./popular-movies/sagas";
import searchMoviesSaga from "./search-movies/sagas";

export function* rootSaga() {
  yield all([fork(popularMoviesSaga)]);
  yield all([fork(searchMoviesSaga)]);
}