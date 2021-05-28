import { combineReducers } from "redux";

import popularMoviesReducer from "./popular-movies/reducer";

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;