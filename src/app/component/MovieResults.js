import React from 'react';
import ReactTooltip from 'react-tooltip';




let MovieResults = function(props) {

  var transparent ={
      display: 'block',
      width:'100%',
      color:'black', 
      height :'auto'   
    };

 var  posterswrapper={
   
   display:'inline-block',
   width: '30%',
   textAlign:'center',
   margin: 'auto',
   marginLeft:'40px',
   border: '3px solid aliceblue',
   marginBottom:'15px'
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
const styles = {
  display: 'inline-block',
  height: '40px',
  width: '200px',
  textAlign: 'center',
  background: '#90EE90',
  marginRight: '3em',
  marginBottom: '1em',
  borderRadius: '6px solid aliceblue',
};

var tooltipstyle={
 width: '200', 
 height: '250',
 background: '#90EE90',
 textAlign: 'center',
 marginBottom:'50px',
 marginTop:'20px',
 borderRadius: '6px solid green',
}

  var extraClass ={
      fontSize: '20px !important',
      pointerEvents:'auto !important',
      visibility: 'visible !important',
      opacity: '1 !important',
      width: '250', 
      height: '250',
       
    }



var showimgsrc='';
if(props.movie_poster === 'https://image.tmdb.org/t/p/w500null' || props.movie_poster===''){
  showimgsrc="../app/images/no-image-icon-23.jpg"
}else {
   showimgsrc=props.movie_poster
}


  return (
      <div>
      
           <h3> Movie Title: {props.movie_title} </h3> <br/>     
            <img src={showimgsrc} style={imgstyle} /> <br/>
             <h3>Popularity: {props.movie_popularity} ReleaseDate: {props.movie_releaseDate}</h3>
            
             <div >
                <a href="#" data-tip={props.movie_overview} data-for='happyFace'> View More </a>
                <ReactTooltip id='happyFace' type="success"></ReactTooltip>
              </div>
           
    </div>
  )
}

export default MovieResults;