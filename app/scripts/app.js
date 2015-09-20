import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

let Hello = React.createClass({
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Pizza Client</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="pizzerias">Pizzerias</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
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

