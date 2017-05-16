import React from 'react'

const UserListItem = ({ user, ModalOpen, ViewUser, EditUser }) => {
	return (
	<tr>
        <td className="text-center">{ user.id }</td>
        <td>{ user.username }</td>
        <td>{ user.email }</td>
        <td>{ user.timezone }</td>
        <td>&euro; 92,144</td>
        <td className="td-actions">
            <button type="button" rel="tooltip" className="btn btn-info btn-simple" onClick={ () => ViewUser(user.id) }>
                <i className="material-icons">person</i>
            </button>
            <button type="button" rel="tooltip" className="btn btn-success btn-simple" onClick={ () => EditUser(user.id) }>
                <i className="material-icons">edit</i>
            </button>
            <button type="button" rel="tooltip" className="btn btn-danger btn-simple" onClick={ () => ModalOpen(user.id) }>
                <i className="material-icons">close</i>
            </button>
        </td>
    </tr>
	)
}

export default UserListItem;