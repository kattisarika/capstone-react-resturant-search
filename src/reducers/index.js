import { combineReducers } from 'redux';
import MovieReducer from './reducers_movies';

const rootReducer = combineReducers({
  movies: MovieReducer
});

export default rootReducer;


