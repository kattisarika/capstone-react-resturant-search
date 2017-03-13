import {FETCH_MOVIEDETAILS} from '../actions/index';


export default function (state=[],action){
	switch(action.type){
		case FETCH_MOVIEDETAILS:
		    console.log(action.payload.data.results);
		    return[ action.payload.data.results,...state];
	}
	return state;

}