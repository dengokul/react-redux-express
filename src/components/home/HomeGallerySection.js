import React from 'react'

const HomeGallerySection = () => {
	return (
    <section className="bg-lighter">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-md-6">
              <h5 className="font-weight-300 m-0">What we can do?</h5>
              <h2 className="mt-0 text-uppercase font-28">Our <span className="text-theme-colored font-weight-400">Gallery</span> <span className="font-30 text-theme-colored">.</span></h2>
              <div className="icon">
                <i className="fa fa-hospital-o"></i>
              </div>
             
            </div>
            <div className="col-md-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus hic suscipit doloremque deleniti ipsa quia dolor laborum natus tenetur, excepturi?</p></div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">

              <div id="grid" className="gallery-isotope grid-4 gutter clearfix">

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/1.jpg">View more</a>
                  </div>
                </div>
                
                <div className="gallery-item branding">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/2.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="#"><i className="fa fa-link"></i></a>
                          <a href="#"><i className="fa fa-heart-o"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item design">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/3.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/3.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/4.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fa fa-youtube-play"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gallery-item branding">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/5.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a className="popup-vimeo" href="https://vimeo.com/45830194"><i className="fa fa-play"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gallery-item design">
                  <div className="thumb">
                    <div className="flexslider-wrapper">
                      <div className="flexslider">
                        <ul className="slides">
                          <li><a href="/assets/images/gallery/1.jpg" title="Portfolio Gallery - Photo 1"><img src="/assets/images/gallery/1.jpg" alt="" /></a></li>
                          <li><a href="/assets/images/gallery/2.jpg" title="Portfolio Gallery - Photo 2"><img src="/assets/images/gallery/2.jpg" alt="" /></a></li>
                          <li><a href="/assets/images/gallery/3.jpg" title="Portfolio Gallery - Photo 3"><img src="/assets/images/gallery/3.jpg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="#"><i className="fa fa-picture-o"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item design">
                  <div className="thumb">
                    <div className="flexslider-wrapper" data-direction="vertical">
                      <div className="flexslider">
                        <ul className="slides">
                          <li><a href="/assets/images/gallery/6.jpg" title="Portfolio Gallery - Photo 1"><img src="/assets/images/gallery/6.jpg" alt="" /></a></li>
                          <li><a href="/assets/images/gallery/5.jpg" title="Portfolio Gallery - Photo 2"><img src="/assets/images/gallery/5.jpg" alt=""/></a></li>
                          <li><a href="/assets/images/gallery/4.jpg" title="Portfolio Gallery - Photo 3"><img src="/assets/images/gallery/4.jpg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="#"><i className="fa fa-picture-o"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

                <div className="gallery-item photography">
                  <div className="thumb">
                    <img className="img-fullwidth" src="/assets/images/gallery/1.jpg" alt="project" />
                    <div className="overlay-shade"></div>
                    <div className="text-holder text-center">
                      <h5 className="title">Gallery Title Here</h5>
                    </div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="social-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a data-lightbox="image" href="/assets/images/gallery/1.jpg"><i className="fa fa-plus"></i></a>
                          <a href="#"><i className="fa fa-link"></i></a>
                        </div>
                      </div>
                    </div>
                    <a className="hover-link" data-lightbox="image" href="/assets/images/gallery/2.jpg">View more</a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default HomeGallerySection