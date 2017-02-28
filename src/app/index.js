import React from 'react'
import ReactDOM from 'react-dom'
import Request                  from 'superagent';
import _                        from 'lodash';





let MovieResults = function(props) {
  return (
    <div className="user">
      <div>Movie Title: {props.movie_title},
           Movie Popularity: {props.movie_popularity}

      </div>

    </div>
  )
}

let App = React.createClass({

  getInitialState: function() {
    return {
      movies: []
    }
  },

  componentDidMount: function() {
    console.log("Am i in component DidMount");
     var url = 'https://api.themoviedb.org/3/search/movie?api_key=0ed2b6c1a0c3dc70993df6eeea85608e&query=Hunger+Games';
    Request.get(url).then((response) => {
      this.setState({
        movies : response.body.results
      });
    })
  },

  render: function() {
    return (
      <div>
        <h1>Results are :</h1>
          {this.state.movies.map(function(movie,i){
            return <MovieResults movie_title={movie.title} movie_popularity={movie.popularity} key={i} />;
          })}
      </div>

      )

  }

  
})

ReactDOM.render(<App />, document.getElementById('root'))