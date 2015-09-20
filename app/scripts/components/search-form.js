import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

let SearchForm = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    let query = React.findDOMNode(this.refs.query).value.trim();
    this.submitQuery(query);
    React.findDOMNode(this.refs.query).value = '';
  },
  submitQuery(query) {
    $.ajax({
      url: 'http://localhost:9292/api/v1/properties/search?city=' + query,
      type: 'get',
      dataType: 'JSON',
      success: function(data) {
        this.props.searchInfo(data)
      }.bind(this)
    })
  },
  render() {
    return(
      <div className='thumbnail' id='search-box' onSubmit={this.handleSubmit}>
        <form id='search-form'>
          <input type="text" className='form-control' placeholder='search by city' ref='query'/>
        </form>
      </div>
    )
  }
});

export default SearchForm;