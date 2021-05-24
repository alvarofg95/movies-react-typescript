import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.todo.pending;

const getPopularMovies = (state: AppState) => state.todo.popularMovies;

const getError = (state: AppState) => state.todo.error;

export const getPopularMoviesSelector = createSelector(getPopularMovies, (popularMovies) => popularMovies);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);