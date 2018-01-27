import React, { Component } from 'react';
import logo from './logo.svg';
import FullPageHover from './full_page_hover.js';
import './App.css';
var $ = require('jquery');

class App extends Component {

  componentDidMount() {
    // $.ajax({
    //   url:window.location.href + 'check',
    //   data:JSON.stringify({username: "Lena"}),
    //   type:'POST',
    //   contentType:'application/json'
    // }).done((data) => this.setState({loggedIn : data}));
    this.setState({loggedIn: true});
  }

  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
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

  // <button onClick={this.getPythonHello}>{this.state.greeting}</button>

  render() {
    if (this.state.LoggedIn) {
      var content = <p>Homepage</p>;
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <FullPageHover content={content}/>
        </div>
      );
    } else {
      var content = <p>Login</p>;
      return(<FullPageHover content={content}/>);
    }
  }
}

export default App;
