import React from 'react/addons';
import Router from 'react-router';

let Hello = React.createClass({
  render() {
    return(<h1>hello!</h1>)
  }
});

React.render(<Hello />, document.body);