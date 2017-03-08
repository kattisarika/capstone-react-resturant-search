import React, {Component} from 'react'
import { connect } from 'react-redux';

import MovieResults from '../app/component/MovieResults';


class MovieList extends Component {
 
   

  render(){

var  posterswrapper={
     display:'inline-block',
     width: '30%',
     textAlign:'left',
     margin: 'auto',
     marginLeft:'40px',
     border: '3px solid aliceblue',
     marginBottom:'30px'
 }
  
   console.log("1st console log" , this.props.movies[0]);
   var movies;
      if (this.props.movies.length > 0 && this.props.movies !== 'undefined') {
        movies = this.props.movies[0]
      } else {
        movies = []
      }
      var movieList = movies.map(function(movie, i) {
        return (
               <div style={posterswrapper}>                             
                 <MovieResults movie_title={movie.title} 
                             movie_releaseDate={movie.release_date}
                             movie_popularity={movie.popularity}  
                             movie_overview={movie.overview}
                             movie_poster={"https://image.tmdb.org/t/p/w500" +  movie.poster_path} key={i} />
               </div>
               )
      })
      return (
        <div>
          {movieList}
        </div>
      )

  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MovieList);