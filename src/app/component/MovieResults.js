import React from 'react';





let MovieResults = function(props) {

  var transparent ={
      display: 'block',
      width:'100%',
      color:'black', 
      height :'auto'   
    };

 var  posterswrapper={
    paddingTop: '75px'
 }

var poster={
  width:'30%',
  marginRight:'4%',
  dispay:'inline-block',
  position:'relative'
}
 
var posterinfooverlay={
  position:'absolute',
  background: 'rgba(0,0,0,0.7)',
  bottom:'0',
  left:'0',
  opacity:'0',
  transition:'0.5s ease-in-out',
  padding: '30px 15px',
}   

var posterinfooverlayh3={
  textTransform: 'uppercase',
  fontWeight: '400',
  fontSize: '13px',
  letterSpacing:'0.3px',
  color:'#fff',
  margin:'0px'

}

var posterinfooverlayh4={
   textTransform: 'uppercase',
  fontWeight: '400',
  fontSize: '13px',
  letterSpacing:'0.3px',
  color:'#fff',
  margin:'0px',
  marginTop:'15px'

}

var imgstyle={
 width: '200', 
 height: '250',
 marginBottom:'50px',
 marginTop:'20px'

}


var showimgsrc='';
if(props.movie_poster === 'https://image.tmdb.org/t/p/w500null' || props.movie_poster==='')
  showimgsrc="../app/images/no-image-icon-23.jpg"
else 
   showimgsrc=props.movie_poster



  return (
      <div className="user">
      <div style={transparent}>
        
         Movie Title:      {props.movie_title} <br/>

         Movie ReleaseDate: {props.movie_releaseDate} <br/>
          
           Movie Popularity: {props.movie_popularity} <br/>

           Overview : {props.movie_overview}  <br/>

          <img src={showimgsrc} style={imgstyle} /> <br/>

      </div>

    </div>
  )
}

export default MovieResults;