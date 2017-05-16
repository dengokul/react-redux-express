import React from 'react';
import { browserHistory } from 'react-router'
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import FacebookButton from 'components/login/FacebookButton'

function validateInput(data) {
  let errors = {};
  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  } else if (!Validator.isEmail(data.username)) {
    errors.username = 'Email is invalid';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class LoginForm extends React.Component {
  state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false,
      isSubmit: false
    }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onChangeValidate = (thisState, target_name, target_value) => {
    const { errors } = validateInput(thisState);
      if (isEmpty(errors[target_name]) || errors[target_name] === undefined) {
        let errorsObj = Object.assign({}, this.state.errors);
        delete errorsObj[target_name];
        this.setState({
          [target_name]: target_value,
          errors: errorsObj
        });
      } else {
        this.setState({
          [target_name]: target_value,
          errors
        });
      }
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      })
    let target_name = e.target.name
    let target_value = e.target.value
    if(this.state.isSubmit) {
      setTimeout(() => { 
        this.onChangeValidate(this.state, target_name, target_value)
      }, 5)
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmit: true })
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => browserHistory.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  /*socialLogin = () => {
    console.log('login form page')
    this.props.socialLogin()
  }*/

  render() {
    const { errors, username, password, isLoading  } = this.state
    const { socialLogin } = this.props
    return (
       <form name="login-form" className="clearfix" onSubmit={this.onSubmit}>
       { errors.form && <div className="alert alert-danger">{errors.form}</div> }
        <div className="row">
          <div className={"form-group col-md-12 " + (errors.username ? 'has-error' : '')}>
            <label htmlFor="form_username_email">Username/Email</label>
            <input id="username" value={username} onChange={this.handleChange} autoComplete="off" name="username" className="form-control" type="text" />
            {errors.username && <span className="help-block">{errors.username}</span>}
          </div>
        </div>
        <div className="row">
          <div className={"form-group col-md-12 " + (errors.password ? 'has-error' : '')}>
            <label htmlFor="form_password">Password</label>
            <input id="password" value={password} onChange={this.handleChange} autoComplete="off" name="password" className="form-control" type="password" />
            {errors.password && <span className="help-block">{errors.password}</span>}
          </div>
        </div>
        <div className="checkbox pull-left mt-15">
          <label htmlFor="form_checkbox">
            <input id="form_checkbox" name="form_checkbox" type="checkbox" />
            Remember me </label>
        </div>
        <div className="form-group pull-right mt-10">
          <button type="submit" className="btn btn-dark btn-sm" disabled={isLoading}>Login</button>
        </div>
        <div className="clear text-center pt-10">
          <a className="text-theme-colored font-weight-600 font-12" href="#">Forgot Your Password?</a>
        </div>
        <div className="clear text-center pt-10">
          <FacebookButton socialLogin={socialLogin}/>
        </div>
      </form>
    );
  }
}

export default LoginForm