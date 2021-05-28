import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getPopularMoviesSelector,
  getErrorSelector,
} from "./redux/popular-movies/selectors";
import { fetchPopularMoviesRequest } from "./redux/popular-movies/actions";
import { IMovie } from 'redux/popular-movies/types';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const movies = useSelector(getPopularMoviesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPopularMoviesRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        movies.map((movie: IMovie, index: number) => (
          <div style={{ marginBottom: "10px" }} key={movie.id}>
            {++index}. {movie.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;