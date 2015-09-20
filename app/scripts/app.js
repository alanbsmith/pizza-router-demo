import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

import About  from './components/about'
import Navbar from './components/navbar'
import Pizzeria from './components/pizzeria'
import Pizzerias from './components/pizzerias'


let App = React.createClass({
  render() {
    return(
      <div>
        <Navbar name='Router'/>
        {this.props.children}
      </div>
    )
  }
});

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path='/pizzerias' component={Pizzerias}/>
      <Route path='/pizzerias/:id' component={Pizzeria}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.body);
