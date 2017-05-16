import React from 'react';
import { browserHistory } from 'react-router'
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors = {};
  if (Validator.isNull(data.first_name)) {
    errors.first_name = 'First Name cannot be empty';
  } else if (!Validator.isLength(data.first_name, {min:2})) {
    errors.first_name = 'First Name must be greater than 1 character';
  }
  if (Validator.isNull(data.last_name)) {
    errors.last_name = 'Last Name cannot be empty';
  } else if (!Validator.isLength(data.last_name, {min:2})) {
    errors.last_name = 'Last Name must be greater than 1 character';
  }
  if (Validator.isNull(data.username)) {
    errors.username = 'Username cannot be empty';
  } else if (!Validator.isLength(data.username, {min:3})) {
    errors.username = 'Username must be greater than 2 characters';
  }
  if (Validator.isNull(data.email)) {
    errors.email = 'Email cannot be empty';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'Password cannot be empty';
  } else if (!Validator.matches(data.password, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
    errors.password = 'Password should contain atleast one number and one special character';
  }
  if (Validator.isNull(data.confirm_password)) {
    errors.confirm_password = 'Confirm Password cannot be empty';
  }
  if (!Validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class SignupForm extends React.Component {
  state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      errors: {},
      isLoading: false,
      isSubmit: false,
      invalid: false
    }

  checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
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
    e.preventDefault()
    this.setState({ isSubmit: true })
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      let userData = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      }

      this.props.userSignupRequest(userData).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          })
          browserHistory.push('/login')
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  render() {
    const { errors, isLoading, invalid } = this.state;
    return (
      <form name="reg-form" className="register-form" method="post" onSubmit={this.onSubmit}>
          <div className="icon-box mb-0 p-0">
            <a href="#" className="icon icon-bordered icon-rounded icon-sm pull-left mb-0 mr-10">
              <i className="pe-7s-users"></i>
            </a>
            <h4 className="text-gray pt-10 mt-0 mb-30">Dont have an Account? Register Now.</h4>
          </div>
          <hr/>
          <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi id perspiciatis facilis nulla possimus quasi, amet qui. Ea rerum officia, aspernatur nulla neque nesciunt alias.</p>
          <div className="row">
            <div className={"form-group col-md-6 " + (errors.first_name && 'has-error')}>
              <label htmlFor="first_name">First Name</label>
              <input value={this.state.first_name} id="first_name" name="first_name" autoComplete="off" className="form-control" type="text" onChange={this.handleChange}/>
              {errors.first_name && <span className="help-block">{errors.first_name}</span>}
            </div>
            <div className={"form-group col-md-6 " + (errors.last_name && 'has-error')}>
              <label htmlFor="last_name">Last Name</label>
              <input value={this.state.last_name} id="last_name" name="last_name" autoComplete="off" className="form-control" type="text" onChange={this.handleChange} />
              {errors.last_name && <span className="help-block">{errors.last_name}</span>}
            </div>
          </div>
          
          <div className="row">
            <div className={"form-group col-md-12 " + (errors.username && 'has-error')}>
              <label htmlFor="username">Choose Username</label>
              <input value={this.state.username} id="username" name="username" autoComplete="off" className="form-control" type="text" onChange={this.handleChange} onBlur={this.checkUserExists}/>
              {errors.username && <span className="help-block">{errors.username}</span>}
            </div>
          </div>
          
          <div className="row">
            <div className={"form-group col-md-12 " + (errors.email && 'has-error')}>
              <label>Email Address</label>
              <input value={this.state.email} id="email" name="email" autoComplete="off" className="form-control" type="text" onChange={this.handleChange} onBlur={this.checkUserExists} />
              {errors.email && <span className="help-block">{errors.email}</span>}
            </div>
          </div>

          <div className="row">
            <div className={"form-group col-md-6 " + (errors.password && 'has-error')}>
              <label htmlFor="password">Choose Password</label>
              <input value={this.state.password} id="password" name="password" autoComplete="off" className="form-control" type="password" onChange={this.handleChange} />
              {errors.password && <span className="help-block">{errors.password}</span>}
            </div>
            <div className={"form-group col-md-6 " + (errors.confirm_password && 'has-error')}>
              <label>Confirm Password</label>
              <input value={this.state.confirm_password} id="confirm_password" name="confirm_password"  autoComplete="off" className="form-control" type="password" onChange={this.handleChange}/>
              {errors.confirm_password && <span className="help-block">{errors.confirm_password}</span>}
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-dark btn-lg btn-block mt-15" disabled={isLoading || invalid} type="submit">Register Now</button>
          </div>
      </form>
    );
  }
}

export default SignupForm