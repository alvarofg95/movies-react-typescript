import {
  FETCH_SEARCH_MOVIES_REQUEST,
  FETCH_SEARCH_MOVIES_SUCCESS,
  FETCH_SEARCH_MOVIES_FAILURE,
  CLEAR_SEARCH_MOVIES,
} from "./actionTypes";

import { MovieActions, MovieState } from "./types";

const initialState: MovieState = {
  pending: false,
  searchMovies: [],
  error: null,
};

export default (state = initialState, action: MovieActions) => {
  switch (action.type) {
    case FETCH_SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        searchMovies: action.payload.searchMovies,
        error: null,
      };
    case FETCH_SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        searchMovies: [],
        error: action.payload.error,
      };
    case CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: [],
      }
    default:
      return {
        ...state,
      };
  }
};