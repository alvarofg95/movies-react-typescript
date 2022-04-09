import axios from 'axios';

interface IRequestInfo {
  url: string,
  method: string,
};

export const apiTools = {
  getPopularMovies: {
    url: '/movie/popular',
    method: 'GET'
  },
  getSearchMovies: {
    url: '/search/movie',
    method: 'GET'
  }
};

export const postToAPI = (requestProps:IRequestInfo, query?: string) => {
  console.log('POSTTTT', query);
  const requestUrl = `${process.env.REACT_APP_API_URI}${requestProps.url}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&query=${query}`;
  console.log(axios.get(requestUrl));
  return axios.get(requestUrl);
}