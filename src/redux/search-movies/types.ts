import {
  FETCH_SEARCH_MOVIES_REQUEST,
  FETCH_SEARCH_MOVIES_SUCCESS,
  FETCH_SEARCH_MOVIES_FAILURE,
  CLEAR_SEARCH_MOVIES,
} from "./actionTypes";

export interface IMovie {
  userId: number;
  id: number;
  title: string;
  poster_path: string;
  completed: boolean;
}

export interface MovieState {
  pending: boolean;
  searchMovies: IMovie[];
  error: string | null;
}

export interface FetchSearchMoviesSuccessPayload {
  searchMovies: IMovie[];
}

export interface FetchSearchMoviesFailurePayload {
  error: string;
}

export interface FetchSearchMoviesRequest {
  type: typeof FETCH_SEARCH_MOVIES_REQUEST;
  value: string;
}

export type FetchSearchMoviesSuccess = {
  type: typeof FETCH_SEARCH_MOVIES_SUCCESS;
  payload: FetchSearchMoviesSuccessPayload;
};

export type FetchSearchMoviesFailure = {
  type: typeof FETCH_SEARCH_MOVIES_FAILURE;
  payload: FetchSearchMoviesFailurePayload;
};


export type FetchClearSearchMoviesSuccess = {
  type: typeof CLEAR_SEARCH_MOVIES;
};

export type MovieActions =
  | FetchSearchMoviesRequest
  | FetchSearchMoviesSuccess
  | FetchSearchMoviesFailure
  | FetchClearSearchMoviesSuccess;