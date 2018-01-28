import React, { Component } from 'react';
import logo from './logo.svg';
import FullPageHover from './full_page_hover.js';
import JarPic from './jar.png';
import UnderTopBar from './under_top_bar.js';
import Carousel from './carousel.js';
import Jar from './jar.js';
import './App.css';
var $ = require('jquery');

class App extends Component {

  getCarousel(username) {
    return [1,2,3,4,5,6,7].map(
      entry =>
      <div>
        <h1>{entry}</h1>
        <div className='jarpic'>
          <img className='jarpic-inside' src={JarPic} alt='jar'/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // $.ajax({
    //   url:window.location.href + 'check',
    //   data:JSON.stringify({username: "Lena"}),
    //   type:'POST',
    //   contentType:'application/json'
    // }).done((data) => this.setState({loggedIn : data, username: _______}));
    this.setState({
      loggedIn: true,
      username: 'lena'
    });
  }

  constructor(props) {
    super(props);
    this.state = {loggedIn: false, carousel: []};
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.getCarousel = this.getCarousel.bind(this);
  }

  getPythonHello() {
    $.ajax({
      url:window.location.href + 'hello',
      data:JSON.stringify({name: "Lena", number: 239}),
      type:'POST',
      contentType:'application/json'
    }).done((data) => console.log('server responded w data: ', data));
  }

  // <button onClick={this.getPythonHello}>{this.state.greeting}</button>

  render() {
    if (this.state.loggedIn) {
      var content = <Carousel content={this.getCarousel(this.state.username)}/>;
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <UnderTopBar content={content}/>
        </div>
      );
    } else {
      var content = <p>Login</p>;
      return(<FullPageHover content={content}/>);
    }
  }
}

export default App;
