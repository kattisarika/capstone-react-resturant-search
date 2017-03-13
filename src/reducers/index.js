import { combineReducers } from 'redux';
import MovieReducer from './reducers_movies';
import MovieDetailsReducer from './reducers_moviedetails';
//import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  movies: MovieReducer,
  moviedetails: MovieDetailsReducer,
  //page: pageReducer
});

export default rootReducer;


