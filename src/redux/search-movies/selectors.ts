import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.searchMovies.pending;

const getSearchMovies = (state: AppState) => state.searchMovies.searchMovies;

const getError = (state: AppState) => state.searchMovies.error;

export const getSearchMoviesSelector = createSelector(getSearchMovies, (searchMovies) => searchMovies.slice(0, 9));

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);