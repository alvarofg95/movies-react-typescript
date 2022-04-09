import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from "./actions";
import { FETCH_POPULAR_MOVIES_REQUEST } from "./actionTypes";
import { apiTools, postToAPI } from '../../tools/apiTools';

const getPopularMovies = () => {
  return postToAPI(apiTools.getPopularMovies);
}

function* fetchPopularMoviesSaga() {
  try {
    const response: any = yield call(getPopularMovies);
    yield put(
      fetchPopularMoviesSuccess({
        popularMovies: response.data.results,
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