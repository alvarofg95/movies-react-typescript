import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "./actionTypes";

import { MovieActions, MovieState } from "./types";

const initialState: MovieState = {
  pending: false,
  popularMovies: [],
  error: null,
};

export default (state = initialState, action: MovieActions) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.popularMovies,
        error: null,
      };
    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};