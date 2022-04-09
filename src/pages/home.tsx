import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getPopularMoviesSelector,
  getErrorSelector,
} from "redux/popular-movies/selectors";
import { fetchPopularMoviesRequest } from "redux/popular-movies/actions";
import MoviesList from 'components/movies-list';
import Panel from 'components/panel';
import Wrapper from 'components/styled-components/wrapper';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const movies = useSelector(getPopularMoviesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPopularMoviesRequest());
  }, [dispatch]);

  return (
    <div className="container">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Wrapper flex>
          <Panel />
          <MoviesList movies={movies} />
        </Wrapper>
      )}
    </div>
  );
};

export default App;