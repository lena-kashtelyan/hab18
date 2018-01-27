import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var $ = require('jquery');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {greeting: 'hello?'};
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.personaliseGreeting = this.personaliseGreeting.bind(this);
  }

  personaliseGreeting(greet) {
    this.setState({greeting: greet});
  }

  getPythonHello() {
    $.ajax({
      url:window.location.href + 'hello',
      data:JSON.stringify({name: "Lena", number: 239}),
      type:'POST',
      contentType:'application/json'
    }).done((data) => console.log('server responded w data: ', data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.getPythonHello}>{this.state.greeting}</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
