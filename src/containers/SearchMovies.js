import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchMovies} from '../actions/index';


class SearchMovies extends Component{

	constructor(props){
		super(props);

		this.state = { query: '' };
		this.updateSearch=this.updateSearch.bind(this);
		this.onFormSubmit =
        this.onFormSubmit.bind(this);

	}


   updateSearch(){
    console.log("value ->", this.refs.query.value, "<-");
      if(this.refs.query.value == ' ' || this.refs.query.value == 'undefined' || this.refs.query.value.length < 3){
            return;
          }else {

            this.setState({ query:this.refs.query.value});
          }

   }

	/*updateSearch(event) {
    this.setState({ query: event.target.value });
  	} */

	onFormSubmit(event) {
    event.preventDefault();

    // We need to fetch movie data
    this.props.fetchMovies(this.state.query);
    this.setState({ query: '' });
  	}


	render(){
		 var searchinput ={
		     width:'550px',
		     height: '40px',  
		     marginTop:'20px',
		     marginBottom:'30px',
         textAlign:'center',
		     border:'3px solid green'
   			}

      var  inputgroup = {
        width:'100%',
        textAlign:'center'

      } 

		 return (	
      <form onSubmit={this.onFormSubmit} style={inputgroup}>
        <input style={searchinput} 
          placeholder="Enter movies name (> 3 char.)"
          ref="query" 
          className="form-control"
          
           onChange={(e) => {this.updateSearch();}} 
        />
       
      </form>
   		);
	}

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchMovies);