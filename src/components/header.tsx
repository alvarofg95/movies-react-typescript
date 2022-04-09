import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledHeader from 'components/styled-components/header';
import SearchInput from 'components/styled-components/search-input';
import SearchItem from 'components/search-item';
import {
  getPendingSelector,
  getSearchMoviesSelector,
  getErrorSelector,
} from "redux/search-movies/selectors";
import { fetchCleanSearchMoviesRequest, fetchSearchMoviesRequest } from "redux/search-movies/actions";

const Header = () => {
  const [openSearchList, setOpenSearchList] = useState(false);
  const [searchValue, setValue] = useState('');
  const dispatch = useDispatch()
  const pending = useSelector(getPendingSelector);
  const movies = useSelector(getSearchMoviesSelector);
  const error = useSelector(getErrorSelector);
  
  const onInputChange = ({ currentTarget = {} }: any) : void => {
    const {value = ''} = currentTarget;
    console.log('>>> VALUE', value)
    setValue(value);
    if (value.length > 3) {
      setOpenSearchList(true);
      dispatch(fetchSearchMoviesRequest(searchValue));
    } else if (!value && openSearchList) {
      setOpenSearchList(false);
      // dispatch(fetchCleanSearchMoviesRequest());
    }
  }

  console.log({searchValue, openSearchList});

  return (
    <StyledHeader>
      <div className="searchInputDiv">
        <SearchInput onChange={(value: any) => onInputChange(value)} value={searchValue} />
        {openSearchList && movies && movies.length ? 
          <div className="searchResults">
            {movies.map(item => <SearchItem {...item} />)}
          </div> : null}
      </div>
    </StyledHeader>
  );
};

export default Header;

