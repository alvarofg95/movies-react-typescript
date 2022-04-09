import {
  FETCH_SEARCH_MOVIES_REQUEST,
  FETCH_SEARCH_MOVIES_FAILURE,
  FETCH_SEARCH_MOVIES_SUCCESS,
  CLEAR_SEARCH_MOVIES,
} from "./actionTypes";
import {
  FetchSearchMoviesRequest,
  FetchSearchMoviesSuccess,
  FetchSearchMoviesSuccessPayload,
  FetchSearchMoviesFailure,
  FetchSearchMoviesFailurePayload,
} from "./types";

export const fetchSearchMoviesRequest = (searchValue: string): FetchSearchMoviesRequest => ({
  type: FETCH_SEARCH_MOVIES_REQUEST,
  value: searchValue,
});

export const fetchSearchMoviesSuccess = (
  payload: FetchSearchMoviesSuccessPayload
): FetchSearchMoviesSuccess => ({
  type: FETCH_SEARCH_MOVIES_SUCCESS,
  payload,
});

export const fetchSearchMoviesFailure = (
  payload: FetchSearchMoviesFailurePayload
): FetchSearchMoviesFailure => ({
  type: FETCH_SEARCH_MOVIES_FAILURE,
  payload,
});

export const fetchCleanSearchMoviesRequest = () => ({
  type: CLEAR_SEARCH_MOVIES,
});