import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

class ModalViewUser extends React.Component {
  render () {
    let { ViewUserModalClose, isViewUserModalShowing, user } = this.props
    return (
      <div>
        <Modal show={isViewUserModalShowing} onHide={() => ViewUserModalClose} dialogClassName="view-user-modal">
          <Modal.Header >
            <Modal.Title>Member Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{user.username}</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-3 col-lg-3 "> 
                <img alt="User Pic" src="/assets/admin/img/default-avatar.png" className="img-circle img-responsive" /> </div>
                <div className=" col-md-9 col-lg-9 "> 
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Hire date:</td>
                        <td>06/23/2013</td>
                      </tr>
                      <tr>
                        <td>Date of Birth</td>
                        <td>01/24/1988</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" className="swal2-cancel btn btn-danger" onClick={ () => ViewUserModalClose()}>Cancel</button>
          </Modal.Footer>
        </Modal>
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
	if (state.users.length > 0 && state.modals.viewId) { 
		user = getUserById(state.users, state.modals.viewId);
	}
	return {
		isViewUserModalShowing: state.modals.isViewUserModalShowing,
		user
	}
}

export default connect(mapStateToProps)(ModalViewUser)