import React from 'react'
import $ from 'jquery'
import ImageGallery from 'react-image-gallery'
import { getBgImageFunc } from 'components/lib/CommonFunc'
import HomeFeatureSection from 'components/home/HomeFeatureSection'
import HomeCausesSection from 'components/home/HomeCausesSection'
import HomeFunfactSection from 'components/home/HomeFunfactSection'
import HomeLatestProjectSection from 'components/home/HomeLatestProjectSection'
// import HomeGallerySection from 'components/home/HomeGallerySection'
import HomeDonationSection from 'components/home/HomeDonationSection'
import HomeLatestNewsSection from 'components/home/HomeLatestNewsSection'
import HomeClientsSection from 'components/home/HomeClientsSection'

class Home extends React.Component {
  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }
  componentDidMount() {
    console.log('home-didmount')
    getBgImageFunc()
    window.addEventListener('scroll', this.handleScroll);
    $(document.body).on('click', '.scrollToTop', function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  }

  handleScroll(){
    if ($(window).scrollTop() > 600) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
  }

  render() {
    const images = [
      {
        original: '/assets/images/bg/bg1.jpg',
        thumbnail: '/assets/images/bg/bg1.jpg',
      },
      {
        original: '/assets/images/bg/bg2.jpg',
        thumbnail: '/assets/images/bg/bg2.jpg'
      },
      {
        original: '/assets/images/bg/bg3.jpg',
        thumbnail: '/assets/images/bg/bg3.jpg'
      }
    ]

    return (
        <div className="main-content">
            <section id="home">
              <div className="container-fluid p-0">
                <ImageGallery
                items={images}
                slideInterval={2000}
                onImageLoad={this.handleImageLoad}/>
              </div>
            </section>
            <HomeFeatureSection />
            <HomeCausesSection />
            <HomeFunfactSection />
            <HomeLatestProjectSection />

            <HomeDonationSection />
            <HomeLatestNewsSection />
            <HomeClientsSection /> 
        </div> 
    );
  }
}

export default Home;