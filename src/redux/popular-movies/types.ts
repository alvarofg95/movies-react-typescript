import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "./actionTypes";

export interface IMovie {
  userId: number;
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}

export interface MovieState {
  pending: boolean;
  popularMovies: IMovie[];
  error: string | null;
}

export interface FetchPopularMoviesSuccessPayload {
  popularMovies: IMovie[];
}

export interface FetchPopularMoviesFailurePayload {
  error: string;
}

export interface FetchPopularMoviesRequest {
  type: typeof FETCH_POPULAR_MOVIES_REQUEST;
}

export type FetchPopularMoviesSuccess = {
  type: typeof FETCH_POPULAR_MOVIES_SUCCESS;
  payload: FetchPopularMoviesSuccessPayload;
};

export type FetchPopularMoviesFailure = {
  type: typeof FETCH_POPULAR_MOVIES_FAILURE;
  payload: FetchPopularMoviesFailurePayload;
};

export type MovieActions =
  | FetchPopularMoviesRequest
  | FetchPopularMoviesSuccess
  | FetchPopularMoviesFailure;