import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.popularMovies.pending;

const getPopularMovies = (state: AppState) => state.popularMovies.popularMovies;

const getError = (state: AppState) => state.popularMovies.error;

export const getPopularMoviesSelector = createSelector(getPopularMovies, (popularMovies) => popularMovies);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);