import React from 'react';
import {Link} from 'react-router';
import SearchMovies from '../../containers/SearchMovies';
import MovieList from '../../containers/MovieList'
  


class App extends React.Component{

  

render(){
   var footerstyle={
	   	background:'#104E8B',
	    color:'white',
	    width: '100%',
	    height:'40px',
	    marginTop:'570px'
		}

    var header={   
	    textAlign:'center',
	    verticalAlign:'center',
	    fontSize:'25px',
	    background:'#104E8B',
	    color:'white',
	    width: '100%',
	    height:'60px',
	    margin: '0',
	    padding: '0',
	    border: '0'
    }

   var heading={   
   		
   		
	    listStyle:'none',
	    padding:'10px',
      textAlign:'center',
      verticalAlign:'center'

   }
   

    var menu={
    	float:'right',
    	marginRight:'100px',
	    listStyle:'none',
	     padding:'10px'

    }

    var linkstyle={
    	 color:'white',
	    fontSize:'18px'
    }

   return (
            <div>
                <header style={header} >
                  
       					<h1 style={heading}> MovieDB Search Application </h1>
        			 
        			            
                </header>
                <SearchMovies  />
                <MovieList />
               
                <footer style={footerstyle}>
                   
                </footer>

            </div>
        );
	}
};



export default App;

