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
import homepageTemplate from './homepage_template.png';
import jarOutline from './jar_outline.png';
import jarBreakdown from './jar_breakdown.svg';
import { Dropdown, Image } from 'semantic-ui-react';
var $ = require('jquery');

const styles = {
  customWidth: {
    width: 200,
  },
};
// <P5Wrapper sketch={sketchDesktop} />

class App extends Component {

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

  getInJar(jar) {
    this.setState({selectedJar: jar, showJar: true});
  }

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

  getCarousel(username) {
    var jars = [];
    var members =
      [{
        name: 'Lena Kashtelyan',
        swear: 'I would  like to sleep for 7 hours a day, and will contribute $5 dollars for each violation. ',
        short: 'Sleep earlier',
        violations: '5',
        lastViolation: '01/28/2018',
        ID: 1630522590340278,
        profilePic: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/13895390_1105627749496434_2240850528711628150_n.jpg?oh=2f01a985b7bb6fbe44f219bda4113d38&oe=5AE6FFD2'
      },
      {
        name: 'Miranda Chao',
        swear: 'I  am going to finally stop biting my nails! If I bite my nails, I will pay the violation',
        short: 'Biting nails',
        violations: '5',
        lastViolation: '01/28/2018',
        ID: 1630522590340278,
        profilePic: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/13895390_1105627749496434_2240850528711628150_n.jpg?oh=2f01a985b7bb6fbe44f219bda4113d38&oe=5AE6FFD2'
      },
      {
        name: 'Josh Shao',
        swear: 'I  would like to go to the gym every single day. If I miss once, I agree to pay the violation',
        short: 'Gym',
        violations: '5',
        lastViolation: '01/28/2018',
        ID: 1630522590340278,
        profilePic: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/13895390_1105627749496434_2240850528711628150_n.jpg?oh=2f01a985b7bb6fbe44f219bda4113d38&oe=5AE6FFD2'
      },
      {
        name: 'Henry Song',
        swear: 'I would like to quite smoking, and I hope I can get over with it this time.',
        short: 'Smoking',
        violations: '5',
        lastViolation: '01/28/2018',
        ID: 1630522590340278,
        profilePic: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/13895390_1105627749496434_2240850528711628150_n.jpg?oh=2f01a985b7bb6fbe44f219bda4113d38&oe=5AE6FFD2'
      },
    ];
    var jar0 = {
      jarName: 'Hackjar',
      picture: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/11059837_827334213992457_4153815542064113123_n.jpg?oh=6033bc25fe42bd7db0b12ee35393d168&oe=5ADD8F32',
      members: '4',
      time:'30',
      cost: '2.00',
      dday: '02/28/18',
      currentBalance: '30.00',
      settings: ['donate', 'continue'],
      inside: members
    };
    var jar1 = {
      jarName: 'Famjar',
      picture: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/1554578_686969724695574_463223475449099609_n.jpg?oh=f4db36b5ca4bd91a5f0f3c5bbb504228&oe=5AE423ED',
      members: '10',
      time:'30',
      cost: '5.00',
      dday: '01/29/18',
      currentBalance: '70.00',
      settings: ['cash out', 'retire'],
      inside: members
    };
    var currUserID = 1630522590340278;
    var currUserObj =
      {
        name: 'Lena Kashtelyan',
        swear: 'I would  like to sleep for 7 hours a day, and will contribute $5 dollars for each violation. ',
        short: 'Sleep earlier',
        violations: '5',
        lastViolation: '01/28/2018',
        ID: 1630522590340278,
        profilePic: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/13895390_1105627749496434_2240850528711628150_n.jpg?oh=2f01a985b7bb6fbe44f219bda4113d38&oe=5AE6FFD2'
      };

    for (var i = 0; i < 3; i++) {
      jars.push(jar0);
      jars.push(jar1);
    }
    return jars.map(
      jar =>
        <div
        onClick={this.getInJar}
        style={{
          width:'400px',
          height:'600px',
          backgroundImage: `url(${jarOutline})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '340px 500px'}}>
            <div style={{
              height:'500px',
              paddingTop:'70px',
              paddingLeft:'70px',
              paddingRight:'70px',
              textAlign:'left',
              color:'black'
            }}>
              <span className="habit">{jar['jarName']}</span>
              <br/>
              <br/>
              <span className="your-habit">Your habit</span>
              <br/>
              <div className="habit-field">{currUserObj.short}</div>
              <br/>
              <br/>
              <div style={{
                backgroundImage: 'url('+jar['picture']+')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '300px 200px',
                width:'300px',
                height:'200px'}}/>
              <br/>
              <Flex justify='space-between'>
                <div className="info-title">
                  Members<br/><span className="info">{jar['members'] + ' members'} </span>
                </div>
                <div className="info-title">
                  Committment<br/><span className="info">{jar['time'] + ' days'}</span>
                </div>
                <div className="info-title">
                  Cost per violation<br/><span className="info">{'$'+jar['cost']}</span>
                </div>
              </Flex>
              <Flex style={{width:'300px', height:'10px'}}>
                <Box w={2/3} style={{background:'#6F8ACF'}}/>
                <Box w={1/3} style={{background:'#C4C4C4'}}/>
              </Flex>
              <div className="info-title">
                d-day
                <br/>
                <span className="info">
                  {this.getDaysLeft(jar['dday'])}<br/>{this.getFormattedDate(jar['dday'])}
                </span>
              </div>
              <Flex justify="center">
                <div className="violation">+ User violation</div>
              </Flex>
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

  removeSelectedJar() {
    console.log('removing selected jar');
    this.setState({selectedJar:{}, showJar: false});
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
      height: 0,
      selectedJar: {},
      showJar: false
    };
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.getCarousel = this.getCarousel.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getCarouselMobile = this.getCarouselMobile.bind(this);
    this.getResponseFacebook = this.getResponseFacebook.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.getInJar = this.getInJar.bind(this);
    this.removeSelectedJar = this.removeSelectedJar.bind(this);
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

  // <Flex style={{padding:'10px'}} className="white-card" justify="center" w={[1, 1/2, 1/3]}>
  //   <Flex className="white-card">
  //     <Flex column style={{paddingRight: '10px'}}>
  //       <br/><br/><br/><br/>
  //       <div style={{color: '#6FCF97'}}>{'10%  '}</div>
  //       <br/><br/><br/>
  //       <div style={{color: '#F2C94C'}}>{'20%  '}</div>
  //       <br/><br/><br/><br/><br/><br/>
  //       <div style={{color: '#F2994A'}}>{'29%  '}</div>
  //       <br/><br/><br/><br/><br/><br/>
  //       <div style={{color: '#EB5757'}}>{'41%  '}</div>
  //     </Flex>
  //     <Flex>
  //       <img src={jarBreakdown} alt="jar breakdown"/>
  //     </Flex>
  //   </Flex>
  //   <div className="jar-data">
  //     <span style={{fontWeight: 'bold'}}>The Brown Jar</span>
  //       <br/>
  //     $70.00
  //   </div>
  // </Flex>
  // <Flex onClick={this.removeSelectedJar} column style={{padding:'10px'}} w={[1, 1/2, 1/3]}>
  //   <Flex className="white-card" style={{width:'100%'}}>
  //     bla
  //   </Flex>
  //   <Flex className="white-card">
  //   </Flex>
  // </Flex>
  // <Flex column onClick={this.removeSelectedJar} style={{padding:'10px'}} w={[1, 1/2, 1/3]}>
  //   <Flex className="white-card">
  //   </Flex>
  //   <Flex className="white-card">
  //   </Flex>
  // </Flex>

  // <button onClick={this.getPythonHello}>{this.state.greeting}</button>

  render() {
    if (this.state.loggedIn || this.state.username != 'lena') {
      if (this.state.width < 460) {
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
        var header =
          <header className="App-header">
          <div className="logo" onClick={this.removeSelectedJar}>SWEARJAR</div>
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
        if (this.state.selectedJar && this.state.showJar) {
            return(
              <div className="App">
                <Flex onClick={this.removeSelectedJar} style={{width:'100%', height:'100vh'}}>
                  <img src={homepageTemplate} style={{width:'100%', height:'100wh)'}} alt="template"/>
                </Flex>
              </div>
            );
        } else {
          var content = <Carousel content={this.getCarousel(this.state.username)}/>;
          return(
            <div className="App">
              {header}
              <UnderTopBar content={content}/>
            </div>
          );
        }
    }
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
                <div>
                  <P5Wrapper style={{position: 'relative', top: '400px'}} sketch={sketchDesktop} />
                  <img src={JarPic} alt='jar' style={{height:'420px', position: 'relative', top: '-200px'}}/>
                </div>
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
