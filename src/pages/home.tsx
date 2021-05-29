import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getPopularMoviesSelector,
  getErrorSelector,
} from "redux/popular-movies/selectors";
import { fetchPopularMoviesRequest } from "redux/popular-movies/actions";
import MoviesList from 'components/movies-list';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const movies = useSelector(getPopularMoviesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPopularMoviesRequest());
  }, []);

  return (
    <div className="container">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default App;