import Request                  from 'superagent';
import _                        from 'lodash';
import axios from 'axios';

const API_KEY='0ed2b6c1a0c3dc70993df6eeea85608e';
const BASE_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
export const FETCH_MOVIES='FETCH_MOVIES';

export function fetchMovies(query){
  const url = `${BASE_URL}&query=${query}`;
  console.log(url);
   const request = axios.get(url);
  return {
    type: FETCH_MOVIES,
    payload: request
  };
}