import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

class ModalEditUser extends React.Component {
  state = {
    email: this.props.user.email ? this.props.user.email : '',
    username: this.props.user.username ? this.props.user.username : '',
    errors: {},
    loading: false
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.user.id ? nextProps.user.id : null,
      email: nextProps.user.email ? nextProps.user.email : '',
      username: nextProps.user.username ? nextProps.user.username : ''
    });
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {};
    if (this.state.email === '') errors.email = "Can't be empty";
    if (this.state.username === '') errors.username = "Can't be empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const { id, email, username } = this.state;
      this.setState({ loading: true });
      let userData = {id:id, email:email, username:username}
      this.props.SaveUser({ userData })
        .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
    }
  }

  render () {
    const { EditUserModalClose, isEditUserModalShowing, user } = this.props
    const thisData = (
      <Modal show={isEditUserModalShowing} onHide={() => EditUserModalClose} dialogClassName="view-user-modal">
          <Modal.Body>
          <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <div className="card">
                          <form id="RegisterValidation" action="#" method="" onSubmit={this.handleSubmit}>
                              <div className="card-content">
                                  <h4 className="card-title">Register Forms</h4>
                                  <div className={"form-group label-floating " + (!user.email ? 'is-empty' : '')}>
                                      <label className="control-label">
                                          Email Address
                                          <small>*</small>
                                      </label>
                                      <input className="form-control" onChange={this.handleChange} name="email" type="email" required="true" value={this.state.email} />
                                      <span>{this.state.errors.email}</span>
                                  </div>

                                   <div className={"form-group label-floating " + (!user.username ? 'is-empty' : '')}>
                                      <label className="control-label">
                                          User Name
                                          <small>*</small>
                                      </label>
                                      <input className="form-control" onChange={this.handleChange} name="username" type="text" required="true" value={this.state.username} />
                                      <span>{this.state.errors.username}</span>
                                  </div>
                                  
                                  <div className="category form-category">
                                      <small>*</small> Required fields</div>
                                  <div className="form-footer text-right">
                                  <button type="button" className="swal2-cancel btn btn-danger" onClick={ () => EditUserModalClose()}>Cancel</button>
                                      <button type="submit" className="btn btn-rose btn-fill">Register</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  </div>
                  </div>
                  </div>
          </Modal.Body>
        </Modal>
    );
    return (
      <div>
        { thisData }
      </div>
    )
  }
}

function getUserById(users, id) {
  let user = users.find(user => user.id === Number(id))
  return user
}

const mapStateToProps = (state) => {
	let user = {}
	if (state.users.length > 0 && state.modals.eId) { 
    	user = getUserById(state.users, state.modals.eId);
  	}
  return {
    isEditUserModalShowing: state.modals.isEditUserModalShowing,
    user
  }
}

export default connect(mapStateToProps)(ModalEditUser)