import React from 'react'

let subscribe = {
	height: "45px"
}

class Footer extends React.Component {
	state = {
		cf_subscribe: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
	return (
		<div>
		<footer id="footer" className="footer bg-black-222">
	    <div className="container pt-70 pb-40">
	      <div className="row border-bottom-black">
	        <div className="col-sm-6 col-md-3">
	          <div className="widget dark">
	            <img className="mt-10 mb-20" alt="" src="/assets/images/logo-wide.png"/>
	            <p>106 DPF Street, P.N.Palayam, Coimabtore - 641037</p>
	            <ul className="list-inline mt-5">
	              <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-colored mr-5"></i> <a className="text-gray" href="#">123-456-789</a> </li>
	              <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-colored mr-5"></i> <a className="text-gray" href="#">contact@MST.com</a> </li>
	              <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-colored mr-5"></i> <a className="text-gray" href="#">www.yourdomain.com</a> </li>
	            </ul>
	          </div>
	        </div>
	        <div className="col-sm-6 col-md-3">
	          <div className="widget dark">
	            <h5 className="widget-title line-bottom">Latest News</h5>
	            <div className="latest-posts">
	              <article className="post media-post clearfix pb-0 mb-10">
	                <a href="#" className="post-thumb"><img alt="" src="/assets/images/news/news.jpg"/></a>
	                <div className="post-right">
	                  <h5 className="post-title mt-0 mb-5"><a href="#">Sustainable Construction</a></h5>
	                  <p className="post-date mb-0 font-12">Mar 10, 2014</p>
	                </div>
	              </article>
	              <article className="post media-post clearfix pb-0 mb-10">
	                <a href="#" className="post-thumb"><img alt="" src="/assets/images/news/news.jpg"/></a>
	                <div className="post-right">
	                  <h5 className="post-title mt-0 mb-5"><a href="#">Industrial Coatings</a></h5>
	                  <p className="post-date mb-0 font-12">Mar 11, 2018</p>
	                </div>
	              </article>
	              <article className="post media-post clearfix pb-0 mb-10">
	                <a href="#" className="post-thumb"><img alt="" src="/assets/images/news/news.jpg"/></a>
	                <div className="post-right">
	                  <h5 className="post-title mt-0 mb-5"><a href="#">Storefront Installations</a></h5>
	                  <p className="post-date mb-0 font-12">Mar 08, 2017</p>
	                </div>
	              </article>
	            </div>
	          </div>
	        </div>
	        <div className="col-sm-6 col-md-3">
	          <div className="widget dark">
	            <h5 className="widget-title line-bottom">Useful Links</h5>
	            <ul className="list angle-double-right list-border">
	              <li><a href="#">Funds</a></li>
	              <li><a href="#">Charity</a></li>
	              <li><a href="#">Fundraiser</a></li>
	              <li><a href="#">Campaign Courses</a></li>
	              <li><a href="#">Training Campaign</a></li>              
	            </ul>
	          </div>
	        </div>
	        <div className="col-sm-6 col-md-3">
	          <div className="widget dark">
	            <h5 className="widget-title line-bottom">Opening Hours</h5>
	            <div className="opening-hourse">
	              <ul className="list-border">
	                <li className="clearfix"> <span> Mon - Tues :  </span>
	                  <div className="value pull-right"> 6.00 am - 10.00 pm </div>
	                </li>
	                <li className="clearfix"> <span> Wednes - Thurs :</span>
	                  <div className="value pull-right"> 8.00 am - 6.00 pm </div>
	                </li>
	                <li className="clearfix"> <span> Fri : </span>
	                  <div className="value pull-right"> 3.00 pm - 8.00 pm </div>
	                </li>
	                <li className="clearfix"> <span> Sun : </span>
	                  <div className="value pull-right"> Colosed </div>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="row mt-10">
	        <div className="col-md-5">
	          <div className="widget dark">
	            <h5 className="widget-title mb-10">Subscribe Us</h5>
	           
	            <form id="mailchimp-subscription-form-footer" className="newsletter-form">
	              <div className="input-group">
	                <input type="text" onChange={this.handleChange} value={this.state.cf_subscribe} name="cf_subscribe" placeholder="Your Email" className="form-control input-lg font-16" data-height="45px" id="cf_subscribe" style={subscribe}/>
	                <span className="input-group-btn">
	                  <button style={subscribe} data-height="45px" className="btn btn-colored btn-theme-colored btn-xs m-0 font-14" type="submit">Subscribe</button>
	                </span>
	              </div>
	            </form>
	          
	          </div>
	        </div>
	        <div className="col-md-3 col-md-offset-1">
	          <div className="widget dark">
	            
	            <h5 className="widget-title mb-10">100% Secure</h5>
	            <img src="/assets/images/payment-card-logo-sm.png" alt=""/>
	          </div>
	        </div>
	        <div className="col-md-3">
	          <div className="widget dark">
	            <h5 className="widget-title mb-10">Connect With Us</h5>
	            <ul className="social-icons icon-dark icon-circled icon-sm">
	              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
	              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
	              <li><a href="#"><i className="fa fa-skype"></i></a></li>
	              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
	              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
	              <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div className="footer-bottom bg-black-333">
	      <div className="container pt-20 pb-20">
	        <div className="row">
	          <div className="col-md-6">
	            <p className="font-11 text-black-777 m-0">Copyright &copy;2017 Mind Spark Technologies. All Rights Reserved</p>
	          </div>
	          <div className="col-md-6 text-right">
	            <div className="widget no-border m-0">
	              <ul className="list-inline sm-text-center mt-5 font-12">
	                <li>
	                  <a href="#">FAQ</a>
	                </li>
	                <li>|</li>
	                <li>
	                  <a href="#">Help Desk</a>
	                </li>
	                <li>|</li>
	                <li>
	                  <a href="#">Support</a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </footer>
  		<a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
  		</div>
		)
	}
}

export default Footer