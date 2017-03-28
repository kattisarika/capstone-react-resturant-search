import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from '../../css/main.css';
import fstyles from '../../css/float-grid.css';






let MovieResults = function(props) {
 

var showimgsrc='';
if(props.movie_poster === 'https://image.tmdb.org/t/p/w500null' || props.movie_poster===''){
  showimgsrc="/app/images/no-img.jpg"
}else {
   showimgsrc=props.movie_poster
}

  return (
      <div className="col-4">
           <div className="card">           
                <img src={showimgsrc}    className="card-image" />           
               <div className="card-content">   
                    <h3> {props.movie_title} </h3> <br/>  
                    <h3>Popularity: {props.movie_popularity} </h3>
                    <h3>Release Date: {props.movie_releaseDate}</h3>                     
                     <a href="#" className="astyle" data-tip={props.movie_overview} data-for='happyFace'> View More </a>
                          <ReactTooltip id='happyFace' type="success"></ReactTooltip>                     
                  </div> 
             </div>
        </div>
  )
}

export default MovieResults;