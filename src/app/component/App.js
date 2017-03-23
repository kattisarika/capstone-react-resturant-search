import React from 'react';
import {Link} from 'react-router';
import SearchMovies from '../../containers/SearchMovies';
import MovieList from '../../containers/MovieList';
import styles from '../../css/main.css';
import fstyles from '../../css/float-grid.css';
  


class App extends React.Component{

  

render(){
  
   return (
          <div className="row">
             
                <SearchMovies/>
                <MovieList />
                </div>
            
  
           
        );
	}
};



export default App;

