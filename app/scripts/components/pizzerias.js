import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

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

export default Pizzerias;
