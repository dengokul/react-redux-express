import React from 'react'
import Slider from 'react-slick'

class HomeClientsSection extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true
    };
    return (
      <section>
      <div className="container pb-30">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
            <div className="owl-carousel-6col clients-logo text-center">
      <Slider {...settings}>
            <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/1.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/2.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/3.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/4.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/5.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/6.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/2.png" alt=""/></a> </div>
                <div className="item"> <a href="#"><img className="img-responsive" src="/assets/images/clients/4.png" alt=""/></a> </div>
      </Slider>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}



export default HomeClientsSection