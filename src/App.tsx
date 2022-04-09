import React, { Fragment } from "react";
import RouterControl from 'components/router-control';
import Header from 'components/header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <RouterControl />
    </Fragment>
  );
};

export default App;