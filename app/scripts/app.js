import React from 'react/addons';
import Router from 'react-router';

let Hello = React.createClass({
  render() {
    return(<h1>Hello, {this.props.name}!</h1>)
  }
});

React.render(<Hello name='World'/>, document.body);