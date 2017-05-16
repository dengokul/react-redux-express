import React from 'react'
import { connect } from 'react-redux'
import SignupForm from 'components/signup/SignupForm'
import { getBgImageFunc } from 'components/lib/CommonFunc'
import { userSignupRequest, isUserExists } from 'actions/signupActions';
import { addFlashMessage } from 'actions/flashMessages.js';

class SignupPage extends React.Component {
	componentDidMount() {
	   getBgImageFunc()
	}
	
  	render() {
  	const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
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
	            <h4 className="text-gray mt-0 pt-5">Signup</h4>
	            <hr />
	            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
	           	<SignupForm 
	           	isUserExists={isUserExists}
	           	userSignupRequest={userSignupRequest} 
	           	addFlashMessage={addFlashMessage} />
	          </div>
	        </div>
	      </div>
	    </section>
      </div>
    );
  }
}

SignupPage.propTypes = {
 	userSignupRequest: React.PropTypes.func.isRequired,
  	addFlashMessage: React.PropTypes.func.isRequired,
  	isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
