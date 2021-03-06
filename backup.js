import React, { Component } from 'react';
import logo from './logo.svg';
import FullPageHover from './full_page_hover.js';
import JarPic from './jar.png';
import UnderTopBar from './under_top_bar.js';
import Carousel from './carousel.js';
import Jar from './jar.js';
import P5Wrapper from 'react-p5-wrapper';
import  { Flex, Box } from 'reflexbox';
import './App.css';
import sketchDesktop from './sketch_desktop.js';
import FacebookLogin from 'react-facebook-login';
import fistIcon from './fist.svg';
import cookie from 'react-cookies';
import classNames from 'classnames';
import jarOutline from './jar_outline.png';
import { Dropdown, Image } from 'semantic-ui-react';
var $ = require('jquery');

const styles = {
  customWidth: {
    width: 200,
  },
};

const jar1 = {
  'jar_name' : 'Hackhabit',
  'my_habit' : 'biting nails',
  'members' : '10',
  'time' : '30',
  'cost' : '2.00',
  'dday' : '01/29/18'
};
const jar2 = {
  'jar_name' : 'Hackhabit',
  'my_habit' : 'biting nails',
  'members' : '10',
  'time' : '30',
  'cost' : '2.00',
  'dday' : '01/29/18'
};
const jar3 = {
  'jar_name' : 'Hackhabit',
  'my_habit' : 'biting nails',
  'members' : '10',
  'time' : '30',
  'cost' : '2.00',
  'dday' : '01/29/18'
};

const jars = [jar1, jar2, jar3];

// <P5Wrapper sketch={sketchDesktop} />

class App extends Component {

  getDaysLeft(date) {
    var one_day=1000*60*60*24;
    var d = new Date(date);
    var now = new Date();
    var d_ms = d.getTime();
    var now_ms = now.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = d_ms - now_ms;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
  }

  getFormattedDate(date) {
    var d = new Date(date);
    return d.toLocaleDateString("en-US");
  }

  getCarouselMobile(username) {
    return [1,2,3,4,5,6,7].map(
      entry =>
        <div style={{
          width:'230px',
          height:'420px',
          backgroundImage: `url(${jarOutline})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '210px 350px'}}>
            <div style={{
              height:'400px',
              paddingTop:'60px',
              paddingLeft:'20px',
              paddingRight:'20px',
              textAlign:'left',
            }}>
              <Flex justify='space-between'>
                <span className="habit">Hackhabit</span>
                <span className="">***</span>
              </Flex>
              <br/>
              <span className="your-habit">Your habit</span>
              <br/>
              <div className="habit-field">biting nails</div>
              <br/>
              <br/>
              <div style={{background:'yellow', width:'170px', height:'90px'}}/>
              <br/>
              <Flex justify='space-between'>
                <div className="info-title">
                  Members<br/><span className="info">10 members</span>
                </div>
                <div className="info-title">
                  Time<br/><span className="info">30 days</span>
                </div>
                <div className="info-title">
                  Penalty<br/><span className="info">$2.00</span>
                </div>
              </Flex>
              <Flex style={{width:'170px', height:'10px'}}>
                <Box w={2/3} style={{background:'blue'}}/>
                <Box w={1/3} style={{background:'gray'}}/>
              </Flex>
              <div className="info-title">
                d-day
                <br/>
                <span className="info">
                  1 day left<br/>(January 29th 2018)
                </span>
              </div>
            </div>
        </div>
    );
  }

  getCarousel(username) {
    const jar1 = {
      'jar_name' : 'Hackhabit',
      'my_habit' : 'biting nails',
      'members' : '10',
      'time' : '30',
      'cost' : '2.00',
      'dday' : '01/29/18'
    };
    const jar2 = {
      'jar_name' : 'Hackhabit',
      'my_habit' : 'biting nails',
      'members' : '10',
      'time' : '30',
      'cost' : '2.00',
      'dday' : '01/29/18'
    };
    const jar3 = {
      'jar_name' : 'Hackhabit',
      'my_habit' : 'biting nails',
      'members' : '10',
      'time' : '30',
      'cost' : '2.00',
      'dday' : '01/29/18'
    };

    const jars = [jar1, jar2, jar3];
    return [jars].map(
      jar =>
        <div style={{
          width:'400px',
          height:'600px',
          backgroundImage: `url(${jarOutline})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '340px 500px'}}>
            <div style={{
              height:'500px',
              paddingTop:'70px',
              paddingLeft:'30px',
              paddingRight:'30px',
              textAlign:'left',
            }}>
              <Flex justify='space-between'>
                <span className="habit">{jar['jar_name']}</span>
                <span className="">***</span>
              </Flex>
              <br/>
              <span className="your-habit">Your habit</span>
              <br/>
              <div className="habit-field">{jar['my_habit']}</div>
              <br/>
              <br/>
              <div style={{background:'yellow', width:'300px', height:'200px'}}/>
              <br/>
              <Flex justify='space-between'>
                <div className="info-title">
                  Members<br/><span className="info">{jar['members']+'members'}</span>
                </div>
                <div className="info-title">
                  Committment<br/><span className="info">{jar['days']+'days'}</span>
                </div>
                <div className="info-title">
                  Cost per violation<br/><span className="info">{'$'+jar['cost']}</span>
                </div>
              </Flex>
              <Flex style={{width:'300px', height:'10px'}}>
                <Box w={2/3} style={{background:'blue'}}/>
                <Box w={1/3} style={{background:'gray'}}/>
              </Flex>
              <div className="info-title">
                d-day
                <br/>
                <span className="info">
                  {this.getDaysLeft(jar['dday'])}
                  <br/>
                  {this.getFormattedDate(jar['dday'])}
                </span>
              </div>
            </div>
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
    this.updateWindowDimensions();
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

  updateWindowDimensions() {
    console.log(window.innerWidth);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
      value: 1,
      width: 0,
      height: 0
    };
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.getCarousel = this.getCarousel.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getCarouselMobile = this.getCarouselMobile.bind(this);
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
      if (this.state.width < 360) {
        var content = <Carousel content={this.getCarouselMobile(this.state.username)}/>;
        var header =
          <header className="App-header">
          <div className="logo">SWEARJAR</div>
          <div className="topbar-right">
            <Dropdown trigger={this.state.pic} floating labeled button
              className='icon'
              style={{float:'right', background:'transparent', backgroundColor: 'transparent'}}>
              <Dropdown.Menu className='left'>
                <Dropdown.Item text='view profile' />
                <Dropdown.Item text='past jars' />
                <Dropdown.Item text='reminders' />
                <Dropdown.Item text='settings'  />
                <Dropdown.Item text='forum'  />
                <Dropdown.Item text='featured jars'  />
                <Dropdown.Divider />
                <Dropdown.Item text='settings'  />
                <Dropdown.Item text='sign out' onClick={this.onLogout}/>
              </Dropdown.Menu>
            </Dropdown></div>
          </header>;
      } else {
        var content = <Carousel content={this.getCarousel(this.state.username)}/>;
        var header =
        <header className="App-header">
        <div className="logo">SWEARJAR</div>
        <div className="topbar-right">
          <button className="topbar-button">forum</button>
          <button className="topbar-button">featured jars</button>
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
        </header>;
      }
      return(
        <div className="App">
          {header}
          <UnderTopBar content={content}/>
        </div>
      );
    } else {
      var content = <p>Login</p>;
      return(
        <div className="App">
          <header className="App-header">
            <div className="logo">SWEARJAR</div>
          </header>
          <UnderTopBar content={
            <Flex style={{height:'100%'}} justify='left'>
              <Flex w={[1/4, 1/2, 1/2]} justify='flex-end' style={{paddingRight:'40px'}}>
                <Flex column justify='center'>
                  <img src={JarPic} alt='jar' style={{height:'420px'}}/>
                </Flex>
              </Flex>
              <Flex column justify="center" w={300}>
                <img src={fistIcon} style={{margin: '5px', width:'40px', height:'40px'}} alt=''/>
                <div className="prompt">
                  Come kick a bad habit with us
                </div>
                <form>
                  <input type="text" className="visible-field" placeholder="username" name="username" />
                  <input type="password" className="visible-field" placeholder="passphrase" name="password" />
                  <input type="submit" className="visible-button" value="submit" />
                </form>
                <div className="visible-button">
                  <FacebookLogin
                    appId="1806524619372303"
                    autoLoad={true}
                    fields="name,email,picture"
                    textButton="  sign in with Facebook"
                    callback={this.getResponseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"/>
                </div>
                <div className="link">Sign up</div>
              </Flex>
            </Flex>}/>
        </div>
      );
    }
  }
}

export default App;
