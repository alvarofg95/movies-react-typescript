import React from 'react';
import Wrapper from 'components/styled-components/wrapper';
import Image from 'components/styled-components/image';
import Title from 'components/styled-components/title';
import { IMovie } from 'redux/popular-movies/types';
import { getImageUrl } from 'tools/utils';
import Score from './styled-components/score';

type MoviesProps = {
  movies: IMovie[],
}

export default ({ movies }: MoviesProps) => {
  return (
    <Wrapper flex={true} width='75%'>
      {movies.map(({title, poster_path, vote_average}: IMovie, index: number) => (
        <Wrapper border={true} margin="1rem" key={index} position="relative">
          <Score>{vote_average}</Score>
          <Image src={getImageUrl(poster_path)}/>
          <Title>{title}</Title>
        </Wrapper>)
        )}
    </Wrapper>);
};
