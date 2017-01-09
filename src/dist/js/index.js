import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, Link, browserHistory } from 'react-router';
import classNames from 'classnames';
import Viewport from './lib/viewport.js';
import Style from '../css/components/style.css';

import Center from '../tmpl/center.js';
import HistoryForToday from '../tmpl/historyfortoday';
import HistoyDetail from '../tmpl/histoydetail';
import RobotTalking from '../tmpl/robottalking';
import Jokes from '../tmpl/jokes';
import Horoscope from '../tmpl/horoscope';

class App extends Component {
    render() {
        return (
            <div>
            	<ul role="nav">
                <li><Link to="/center">Center(Router链接)</Link></li>
                <li><Link to="/repos">Repos(Router链接)</Link></li>
              </ul>
            </div>
        );
    }
}

class Repos extends Component {
    render() {
        return (
            <div className="personal-info">Repos</div>
        );
    }
}



render((
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
	  	<Route path="/center" component={Center}/>
	  	<Route path="/repos" component={Repos}/>
      <Route path="/robottalking" component={RobotTalking}/>
      <Route path="/jokes" component={Jokes}/>
      <Route path="/horoscope" component={Horoscope}/>
      <Route path="/historyfortoday" component={HistoryForToday}/>
      <Route path="/histoydetail/:e_id" component={HistoyDetail}/>
      {/* <Route path="/newsheadlines" component={Newsheadlines}/> */}

    </Router>
), document.getElementById('root'));
