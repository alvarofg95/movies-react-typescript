import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchSearchMoviesFailure, fetchSearchMoviesSuccess } from "./actions";
import { FETCH_SEARCH_MOVIES_REQUEST } from "./actionTypes";
import { apiTools, postToAPI } from '../../tools/apiTools';

const getSearchMovies = (value: string) => {
  console.log('AKII');
  return postToAPI(apiTools.getSearchMovies, value);
}
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchSearchMoviesSaga(action: any) {
  try {
    const response = yield call(getSearchMovies, action.value);
    console.log({ response });
    yield put(
      fetchSearchMoviesSuccess({
        searchMovies: response.data.results,
      })
    );
  } catch (e) {
    yield put(
      fetchSearchMoviesFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* searchMoviesSaga() {
  console.log('K PASAS');
  yield all([takeLatest(FETCH_SEARCH_MOVIES_REQUEST, fetchSearchMoviesSaga)]);
}

export default searchMoviesSaga;