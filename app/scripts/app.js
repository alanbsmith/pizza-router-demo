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
  getInitialState() {
    return({locations: []})
  },
  componentDidMount() { 
    $.ajax({
      url: 'http://localhost:9292/api/v1/pizzerias',
      type: 'get',
      dataType: 'JSON',
      success: function(data) {
        this.setState({ locations: data})
      }.bind(this)
    })
  },

  render() {
    let pizzerias = this.state.locations.map(function(pizzeria, index) {
      let location = pizzeria.properties
      return(
          <div className='thumbnail' key={index}>
            <div className='caption'>
              <h5><Link to={'/pizzerias/' + (index + 1) }>{location.pizzeria}</Link></h5>
              <a href={"https://www.google.com/maps/place/" + location.address + ' ' + location.city} target='_blank'>{location.address}</a>
              <p>{location.city}</p>
              <a href={location.website} target='_blank'>Website</a>
            </div>
          </div>
      )
    });
    return(
      <div>
        <h3>Pizzerias</h3>
          {pizzerias}
      </div>
    )
  }
});

let Pizzeria = React.createClass({
  getInitialState() {
    return({location: ''})
  },
  componentDidMount() {
    $.ajax({
      url: 'http://localhost:9292/api/v1/pizzerias/' + this.props.params.id,
      type: 'get',
      dataType: 'JSON',
      success: function(data) {
        this.setState({ location: data})
      }.bind(this)
    })
  },

  render() {
    if(this.state.location.properties !== undefined){
      let location = this.state.location.properties
      
      return(
          <div>
          <Link to='/pizzerias' className='btn btn-lg btn-danger' id='btn-back'>Back to list</Link>
          <div className='thumbnail'>
            <div className='caption'>
              <h5>{location.pizzeria}</h5>
              <a href={"https://www.google.com/maps/place/" + location.address + ' ' + location.city} target='_blank'>{location.address}</a>
              <p>{location.city}</p>
              <a href={location.website} target='_blank'>Website</a>
            </div>
          </div>
          </div>
      )
    } else {
      return(false);
    }
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
      <Route path='/pizzerias/:id' component={Pizzeria}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.body);

