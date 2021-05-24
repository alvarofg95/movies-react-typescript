import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getPopularMoviesSelector,
  getErrorSelector,
} from "./redux/todo/selectors";
import { fetchPopularMoviesRequest } from "./redux/todo/actions";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const popularMovies = useSelector(getPopularMoviesSelector);
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
        popularMovies.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;