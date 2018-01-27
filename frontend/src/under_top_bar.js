import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// var $ = require('jquery');

class UnderTopBar extends Component {

  componentWillReceiveProps(newProps) {
    this.setState({
      content: newProps.content,
    })
  }

  constructor(props) {
    super(props);
    this.state = { content: props.content };
    this.content = props.content;
  }

  render() {
    return (
      <div className="under-top-bar">
        {this.state.content}
      </div>
    );
  }
}

export default UnderTopBar;
