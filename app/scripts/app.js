import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

let Hello = React.createClass({
  render() {
    return(<h1>Hello, {this.props.name}!</h1>)
  }
});

let App = React.createClass({
  render() {
    return(
      <div>
        <Hello name='Router'/>
        {this.props.children}
      </div>
    )
  }
});

let Pizzerias = React.createClass({
  render() {
    return(
      <h3>All the pizzerias!</h3>
    )
  }
});

let About = React.createClass({
  render() {
    return(
      <div>
        <h1>About</h1>
        <p>This is a client application for the pizza repo!</p>
      </div>
    )
  }
});

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path='/pizzerias' component={Pizzerias}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.body);

