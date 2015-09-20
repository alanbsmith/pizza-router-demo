import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

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

export default Pizzeria;
