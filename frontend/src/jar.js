import React, { Component } from 'react';
// import logo from './logo.svg';
import JarPic from './jar.png';
import './App.css';
// var $ = require('jquery');

class Jar extends Component {

  componentWillReceiveProps(newProps) {
    this.setState({
      config: newProps.config,
    })
  }

  constructor(props) {
    super(props);
    this.state = { config: props.config };
  }

  render() {
    return (
      <div>
        <h1>{this.state.config['title']}</h1>
        <div className='jarpic'>
          <img className='jarpic-inside' src={JarPic} alt='jar'/>
        </div>
      </div>
    );
  }
}

export default Jar;
