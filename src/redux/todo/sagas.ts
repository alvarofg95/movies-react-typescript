import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from "./actions";
import { FETCH_POPULAR_MOVIES_REQUEST } from "./actionTypes";
import { apiTools, postToAPI } from '../../tools/apiTools';

const getPopularMovies = () => {
  return postToAPI(apiTools.getPopularMovies);
}
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchPopularMoviesSaga() {
  try {
    const response = yield call(getPopularMovies);
    console.log({ response });
    yield put(
      fetchPopularMoviesSuccess({
        popularMovies: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPopularMoviesFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* popularMoviesSaga() {
  yield all([takeLatest(FETCH_POPULAR_MOVIES_REQUEST, fetchPopularMoviesSaga)]);
}

export default popularMoviesSaga;