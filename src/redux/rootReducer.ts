import { combineReducers } from "redux";
import popularMoviesReducer from "./popular-movies/reducer";
import searchMoviesReducer from "./search-movies/reducer";

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  searchMovies: searchMoviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;