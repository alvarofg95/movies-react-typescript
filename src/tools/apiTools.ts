import axios from 'axios';

interface IRequestInfo {
  url: string,
  method: string,
};

export const apiTools = {
  getPopularMovies: {
    url: '/movie/popular',
    method: 'GET'
  }
};

export const postToAPI = (requestProps:IRequestInfo) => {
  const requestUrl = `${process.env.REACT_APP_API_URI}${requestProps.url}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`;
  console.log(axios.get(requestUrl));
  return axios.get(requestUrl);
  // axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
}