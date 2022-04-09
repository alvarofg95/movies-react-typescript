import React from 'react';
import {getImageUrl} from 'tools/utils';
import Image from './styled-components/image';
import Title from './styled-components/title';
import Wrapper from './styled-components/wrapper';

type SearchItemProps = {
  title: string,
  poster_path: string,
};

const SearchItem = ({ title, poster_path: posterPath }: SearchItemProps) => (
  <Wrapper flex hover>
    <Image width={50} src={getImageUrl(posterPath)} />
    <Title fullWidth>{title}</Title>
  </Wrapper>
);

export default SearchItem;
