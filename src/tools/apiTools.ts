import axios from 'axios';
import { IMovie } from 'redux/todo/types';

interface IRequestInfo {
  url: string,
  method: string,
};

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  url: string
}

export const apiTools = {
  getPopularMovies: {
    url: '/movie/popular',
    method: 'GET'
  }
};

export const postToAPI = (requestProps:IRequestInfo):IMovie[] => {
  const requestUrl = `${process.env.REACT_APP_API_URI}${requestProps.url}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`;
  return axios.get<ServerData[]>(requestUrl);
}