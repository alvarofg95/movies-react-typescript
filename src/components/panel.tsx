import React from 'react';
import Wrapper from './styled-components/wrapper';

const Panel = () => {
  return (
    <Wrapper width='25%'>
      <h1>Filtrar por:</h1>
      <select>
        <option>Drama</option>
      </select>
    </Wrapper>
  )
};

export default Panel;
