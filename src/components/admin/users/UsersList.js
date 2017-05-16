import React from 'react'
import UserListItem from 'components/admin/users/UsersListItem'
const UserList = ({ users, ModalOpen, ViewUser, EditUser}) => {
        const userList = (
            <tbody>
            {
                users.map( (user, i) => <UserListItem user={user} key={i} ModalOpen={ModalOpen} ViewUser={ViewUser} EditUser={EditUser} /> )        
            }
            </tbody>
        )
        const userNotFound = (
            <tbody><tr><td colSpan="6">User Not Found</td></tr></tbody>
        )
		return (
            <div className="card">
            <div className="card-header card-header-icon" data-background-color="rose">
                <i className="material-icons">assignment</i>
            </div>
			<h4 className="card-title">Users List</h4>
            <div className="card-content">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th width="8%" className="text-center">#</th>
                                <th width="20%">Name</th>
                                <th width="20%">Job Position</th>
                                <th width="20%">Since</th>
                                <th width="12`%">Salary</th>
                                <th width="20%">Actions</th>
                            </tr>
                        </thead>
                            {users.length === 0 ? userNotFound : userList}     
                    </table>
                </div>
            </div>
            </div>
		)
}

export default UserList;