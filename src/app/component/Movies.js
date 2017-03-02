import React from 'react'

import Request                  from 'superagent';
import _                        from 'lodash';
import MovieResults from './MovieResults';




let Movies = React.createClass({

  getInitialState: function() {
    return {
      movies: []

    }
  },

  componentDidMount: function() {
    console.log("Am i in component DidMount");
    this.search();
    
  },

  updateSearch(){
    console.log("value ->", this.refs.query.value, "<-");
      if(this.refs.query.value == ' ' || this.refs.query.value == 'undefined' || this.refs.query.value.length < 3){
            return;
          }else {

            this.search(this.refs.query.value);
          }

   },


  render: function() {
   var searchdiv={
    marginTop:'20px',
    marginBottom:'20px',
     marginLeft:'40px',
   }
   
   var searchinput ={
     width:'350px',
     height: '35px',
     marginLeft:'10px',
     border:'3px solid green'
   }
   var header={
    background:'blue',
    color:'white',
    width: '100%',
    height:'60px',
    textAlign:'center',
    verticalAlign:'center',
    fontSize:'25px'
   }

  var maindiv={
    margin: '0',
    padding: '0',
    border: '0'
   }

   
    return (
      
        <div style={maindiv}> 
        <div style={searchdiv}>Search Movies:<input style={searchinput} ref="query" onChange={(e) => {this.updateSearch();}} type="text" placeholder="Enter movies name (> 3 char.)"/></div>
        
         
          {this.state.movies.map(function(movie,i){
            
            return <MovieResults movie_title={movie.title} 
                                 movie_releaseDate={movie.release_date}
                                 movie_popularity={movie.popularity}  
                                 movie_overview={movie.overview}
                                 movie_poster={"https://image.tmdb.org/t/p/w500" +  movie.poster_path} key={i} />;
                               
           })}
       
      </div>

      )
   
  },

   search(query){
          var url = `https://api.themoviedb.org/3/search/movie?api_key=0ed2b6c1a0c3dc70993df6eeea85608e&query=${query}`;
          Request.get(url).then((response) => {
          if(response.body.total_results > 0) {
              this.setState({
                movies : response.body.results,
                results :response.body.total_results
                  });
             }
          })
        
      }      

  
})

export default Movies;