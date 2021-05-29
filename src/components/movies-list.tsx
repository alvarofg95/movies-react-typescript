import React from 'react';
import Wrapper from 'components/styled-components/wrapper';
import Image from 'components/styled-components/image';
import Title from 'components/styled-components/title';
import { IMovie } from 'redux/popular-movies/types';
import { getImageUrl } from 'tools/utils';


type MoviesProps = {
  movies: IMovie[],
}

export default ({ movies }: MoviesProps) => {
  return (
    <Wrapper flex={true}>
      {movies.map((movie: IMovie, index: number) => (
        <Wrapper border={true} margin="1rem">
          <Image src={getImageUrl(movie.poster_path)}/>
          <Title>{movie.title}</Title>
        </Wrapper>)
        )}
    </Wrapper>);
};
