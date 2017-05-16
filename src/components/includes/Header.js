import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from 'actions/authActions'

class Header extends React.Component {
	logout = (e) => {
	    e.preventDefault();
	    this.props.logout();
	    // this.fbLogout()
  	}

  /*	fbLogout = () => {
     window.FB.logout(function(response){
      console.log('fb logout successful!')
     });
   }*/
   
	render() {
		const { isAuthenticated } = this.props.auth;
	    
		return (
			<header id="header" className="header">
			    <div className="header-nav navbar-fixed-top header-dark navbar-white navbar-transparent bg-transparent-1 navbar-sticky-animated animated-active">
			      <div className="header-nav-wrapper">
			        <div className="container">
			          <nav id="menuzord-right" className="menuzord default no-bg">
			            <a className="menuzord-brand pull-left flip" href="index-mp-layout1.html"><img src="/assets/images/logo-wide.png" alt=""/></a>
			            <ul className="menuzord-menu">
			              <li className="active"><Link to="/" >Home</Link>
			              </li>
			              <li><Link to="/test">About Us</Link>
			                <ul className="dropdown">
			                  <li><a href="#">How it works</a></li>
			                  <li><a href="#">Blog</a></li>
			                  <li><a href="#">Page Title</a>
			                  </li>
			                </ul>
			              </li>
			              <li><a href="#">Campaign</a>
			              	<ul className="dropdown">
		                      <li><a href="#">Support</a></li>
		                      <li><a href="#">Donation</a></li>
		                    </ul>
			              </li>
			              <li><a href="#">Help</a></li>
			              { isAuthenticated && <li><Link to="#" onClick={this.logout}>Logout</Link></li> }
			              { isAuthenticated || <li><Link to="/login">Login</Link></li> }
			              { isAuthenticated || <li><Link to="/signup">Signup</Link></li> }
			              <li><a href="#"><i className="fa fa-search"></i>Search</a></li>
			            </ul>
			          </nav>
			        </div>
			      </div>
			    </div>
			  </header>
		)
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps, { logout })(Header)