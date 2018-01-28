import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      content: this.props.content,
    })
  }

  // TODO: add customPaging
  // customPaging: i => <button>{i + 1}</button>

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      // lazyLoad: true,
      // pauseOnHover: true,
      responsive: [ { breakpoint: 860, settings: { slidesToShow: 1 } },
                    { breakpoint: 1380, settings: { slidesToShow: 2 } },
                    { breakpoint: 1440, settings: { slidesToShow: 3 } },
                    { breakpoint: 100000, settings: { slidesToShow: 5 } } ],
      swipeToSlide: true,
      centerMode: true,
    };
    return (
      <Slider className="slider" {...settings}>
        {this.state.content}
      </Slider>
    );
  }
}

export default Carousel;
