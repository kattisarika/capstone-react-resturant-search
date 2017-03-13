import React from 'react';

let MovieDetails = function(props) {


	return (
      <div>
      
           <h3> Movie Genre: {props.movie_genre} </h3> <br/>     
            <img src={showimgsrc} style={imgstyle} /> <br/>
             <h3>Popularity: {props.movie_popularity} ReleaseDate: {props.movie_releaseDate}</h3>
            
             <div >
                <a href="#" data-tip={props.movie_overview} data-for='happyFace'> View More </a>
                <ReactTooltip id='happyFace' type="success"></ReactTooltip>
              </div>

             
    </div>
  )


	}