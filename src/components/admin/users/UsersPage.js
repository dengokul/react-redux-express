import React from 'react'
import { connect } from 'react-redux'
import TopNavigationBar from 'components/admin/includes/TopNavigationBar'
import UsersList from 'components/admin/users/UsersList'
import ConfirmModalNew from 'components/modal/ConfirmModalNew'
import ModalViewUser from 'components/admin/users/ModalViewUser'
import ModalEditUser from 'components/admin/users/ModalEditUser'
import { fetchUsers, deleteUser, ViewUser, EditUser, SaveUser, UpdateUser  } from 'actions/admin/userActions'
import { ModalClose, ModalOpen, ViewUserModalClose, EditUserModalClose } from 'actions/modalActions'

class UsersPage extends React.Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	SaveUser = (data) => {
		const { SaveUser, UpdateUser, EditUserModalClose, fetchUsers } = this.props
		const userData = data.userData
		if (userData.id) {
	      return UpdateUser({ userData }).then(
	        () => { EditUserModalClose(); fetchUsers(); }
	      );
	    } else {
	      return SaveUser({ userData }).then(
	        () => { EditUserModalClose(); fetchUsers(); }
	      );
	    }
	}
	
	render() {
		let { ModalOpen, ModalClose, onDeleteConfirm, ViewUser, ViewUserModalClose, EditUserModalClose, EditUser } = this.props
    	return (
          	<div className="main-panel">
			<ModalViewUser ViewUserModalClose={ViewUserModalClose} />
			<ModalEditUser EditUserModalClose={EditUserModalClose} SaveUser={this.SaveUser} />
			<ConfirmModalNew ModalClose={ModalClose} onDeleteConfirm={ (id) => onDeleteConfirm(id) } />
			<TopNavigationBar />
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<UsersList users={this.props.users} EditUser={ (id) => EditUser(id) } ViewUser={ (id) => ViewUser(id) } ModalOpen={(id) => ModalOpen(id)} />
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

UsersPage.proptypes = {
	fetchUsers: React.PropTypes.func.isRequired,
	ModalClose: React.PropTypes.func.isRequired,
	ModalOpen: React.PropTypes.func.isRequired,
	onDeleteConfirm: React.PropTypes.func.isRequired,
	ViewUser: React.PropTypes.func.isRequired,
	ViewUserModalClose: React.PropTypes.func.isRequired,
	EditUser: React.PropTypes.func.isRequired,
	EditUserModalClose: React.PropTypes.func.isRequired,
	SaveUser: React.PropTypes.func.isRequired,
	UpdateUser: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
		ModalClose: () => dispatch(ModalClose()),
		ModalOpen: (id) => dispatch(ModalOpen(id)),
		onDeleteConfirm: (id) => dispatch(deleteUser(id)),
		ViewUser: (id) => dispatch(ViewUser(id)),
		ViewUserModalClose: (id) => dispatch(ViewUserModalClose(id)),
		EditUser: (id) => dispatch(EditUser(id)),
		EditUserModalClose: (id) => dispatch(EditUserModalClose(id)),
		SaveUser: (data) => dispatch(SaveUser(data)),
		UpdateUser: (data) => dispatch(UpdateUser(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);