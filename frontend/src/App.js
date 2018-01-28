import React, { Component } from 'react';
import logo from './logo.svg';
import FullPageHover from './full_page_hover.js';
import JarPic from './jar.png';
import UnderTopBar from './under_top_bar.js';
import Carousel from './carousel.js';
import Jar from './jar.js';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';
import sketchDesktop from './sketch_desktop.js';
import FacebookLogin from 'react-facebook-login';
import cookie from 'react-cookies';
import classNames from 'classnames';
import { Dropdown, Image } from 'semantic-ui-react';
var $ = require('jquery');

const styles = {
  customWidth: {
    width: 200,
  },
};

class App extends Component {

  getCarousel(username) {
    return [1,2,3,4,5,6,7].map(
      entry =>
        <div>
          <P5Wrapper sketch={sketchDesktop} />
        </div>
    );
  }

  componentWillMount() {
    this.state =  { username: cookie.load('userId') || 'lena'}
  }

  componentDidMount() {
    // $.ajax({
    //   url:window.location.href + 'check',
    //   data:JSON.stringify({username: "Lena"}),
    //   type:'POST',
    //   contentType:'application/json'
    // }).done((data) => this.setState({loggedIn : data, username: _______}));
    this.setState({
      loaded: true,
      loggedIn: false,
      username: 'lena'
    });
  }

  onLogout() {
    cookie.remove('userId', { path: '/' });
    console.log(cookie.load('userId'));
    this.setState({
      username: 'lena',
      loggedIn: false,
    });
  }

  getResponseFacebook = (response) => {
    console.log('fb response');
    console.log(response);
    var fbID = response.id;
    console.log(this.state);
    cookie.save('userId', fbID, { path: '/' })
    this.setState({
      username: fbID,
      picURL: response.picture.data.url,
      pic: <span><Image avatar src={response.picture.data.url} /></span>,
      loggedIn: true,
    });
    return fbID;
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: cookie.load('userId') || false,
      carousel: [],
      username: cookie.load('userId') || 'lena',
      picURL: '',
      pic: <span>
              <Image small avatar src={''} />
           </span>,
      loaded: false,
      value: 1
    };
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.getCarousel = this.getCarousel.bind(this);
    this.getResponseFacebook = this.getResponseFacebook.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  getPythonHello() {
    $.ajax({
      url:window.location.href + 'hello',
      data:JSON.stringify({name: "Lena", number: 239}),
      type:'POST',
      contentType:'application/json'
    }).done((data) => console.log('server responded w data: ', data));
  }

  handleMenuChange = (event, index, value) => this.setState({value});


  // <button onClick={this.getPythonHello}>{this.state.greeting}</button>

  render() {
    if (this.state.loggedIn || this.state.username != 'lena') {
      var content = <Carousel content={this.getCarousel(this.state.username)}/>;
      return(
        <div className="App">
          <header className="App-header">
          <div className="logo">SWEARJAR</div>
          <div className="topbar-right">
            <button>forum</button>
            <button>featured jars</button>
            <Dropdown trigger={this.state.pic} floating labeled button
              className='icon'
              style={{float:'right', background:'transparent', backgroundColor: 'transparent'}}>
              <Dropdown.Menu className='left'>
                <Dropdown.Item text='view profile' />
                <Dropdown.Item text='past jars' />
                <Dropdown.Item text='reminders' />
                <Dropdown.Item text='settings'  />
                <Dropdown.Divider />
                <Dropdown.Item text='settings'  />
                <Dropdown.Item text='sign out' onClick={this.onLogout}/>
              </Dropdown.Menu>
            </Dropdown></div>
          </header>
          <UnderTopBar content={content}/>
        </div>
      );
    } else {
      var content = <p>Login</p>;
      return(
        <FullPageHover content={
          <FacebookLogin
            appId="1806524619372303"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.getResponseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"/>}
        />
      );
    }
  }
}

export default App;
