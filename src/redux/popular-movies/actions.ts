import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_SUCCESS,
} from "./actionTypes";
import {
  FetchPopularMoviesRequest,
  FetchPopularMoviesSuccess,
  FetchPopularMoviesSuccessPayload,
  FetchPopularMoviesFailure,
  FetchPopularMoviesFailurePayload,
} from "./types";

export const fetchPopularMoviesRequest = (): FetchPopularMoviesRequest => ({
  type: FETCH_POPULAR_MOVIES_REQUEST,
});

export const fetchPopularMoviesSuccess = (
  payload: FetchPopularMoviesSuccessPayload
): FetchPopularMoviesSuccess => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload,
});

export const fetchPopularMoviesFailure = (
  payload: FetchPopularMoviesFailurePayload
): FetchPopularMoviesFailure => ({
  type: FETCH_POPULAR_MOVIES_FAILURE,
  payload,
});