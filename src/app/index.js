import React from 'react'
import ReactDOM from 'react-dom'
import Request                  from 'superagent';
import _                        from 'lodash';
import {Router, Route,IndexRoute, browserHistory, Link} from 'react-router';
import App from './component/App';
import MovieResults from './component/MovieResults';
import Movies from './component/Movies';





let Other=function(){
  return <div>Other</div>
}  

const routes =  (<Router history={browserHistory}>
                 <Route path="/" component={App} >
                    <IndexRoute  component={Movies}/>
                    <Route path="/other" component={Other} />
                  </Route>
                </Router>);

ReactDOM.render(routes, document.getElementById('root'))





