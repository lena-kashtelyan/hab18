import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// var $ = require('jquery');

class FullPageHover extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.content = props.content;
  }

  render() {
    return (
      <div className="full-page-hover">
        {this.content}
      </div>
    );
  }
}

export default FullPageHover;
