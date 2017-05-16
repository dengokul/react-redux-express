import React from 'react'
import { connect } from 'react-redux'
import LoginForm from 'components/admin/login/LoginForm'
import { adminLogin } from 'actions/authActions'
import FlashMessagesList from 'components/flash/FlashMessagesList'

class LoginPage extends React.Component {
	
	adminLogin = (data) => {
		return this.props.adminLogin(data)
	}


  	render() {
    return (
      <div>

		<section className="inner-header divider parallax layer-overlay overlay-dark-5" data-bg-img="/assets/images/bg/bg1.jpg">
			<div className="container pt-100 pb-50">
				<div className="section-content">
					<div className="row"> 
						<div className="col-md-12">
							<h3 className="title text-theme-colored">My Account</h3>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
	      <div className="container">
	        <div className="row">
	          <div className="col-md-6 col-md-push-3">
      			<FlashMessagesList />
	            <h4 className="text-gray mt-0 pt-5">Login</h4>
	            <hr />
	            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
	           	<LoginForm adminLogin={this.adminLogin} />
	          </div>
	        </div>
	      </div>
	    </section>
      </div>
    );
  }
}

LoginPage.propTypes = {
  adminLogin: React.PropTypes.func.isRequired
}
 
export default connect(null, { adminLogin })(LoginPage);
