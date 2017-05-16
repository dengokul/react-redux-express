export const FETCHED_USERS = 'FETCHED_USERS'
export const FETCHED_USER_BY_ID = 'FETCHED_USER_BY_ID'
export const EDITED_USER_BY_ID = 'EDITED_USER_BY_ID'
export const USER_DELETED = 'USER_DELETED'
export const SAVED_USER = 'SAVED_USER'
export const UPDATED_USER = 'UPDATED_USER'

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function fetchedUsers(users) {
	return {
		type: FETCHED_USERS,
		users
	}
}

function deleteUserByid(id) {
	return {
		type: USER_DELETED,
		id
	}
}

function fetchUserById(user) {
	return {
		type:FETCHED_USER_BY_ID,
		user:user 
	}
}

function editUserById(user) {
	return {
		type:EDITED_USER_BY_ID,
		user:user 
	}
}


function SavedUser (user) {
	return {
		type: SAVED_USER,
		user
	}
}

function UpdatedUser (user) {
	return {
		type: UPDATED_USER,
		user
	}
}

export function fetchUsers() {
	return dispatch => {
		fetch('/api/users')
		.then(res => res.json())
		.then(data => dispatch(fetchedUsers(data.users)))
	}
}

export function deleteUser(id) {
  return dispatch => {
    return fetch(`/api/users/${id}`, {
    	method: 'delete',
    	headers: {
    		"Content-Type": "application-json"
    	}
    }).then(handleResponse)
    .then(data => dispatch(deleteUserByid(id)))
  }
}

export function ViewUser(id) {
	return dispatch => {
		fetch(`/api/users/${id}`)
		.then(handleResponse)
		.then(data => dispatch(fetchUserById(data.user)))
	}
}

export function EditUser(id) {
	return dispatch => {
		fetch(`/api/users/${id}`)
		.then(handleResponse)
		.then(data => dispatch(editUserById(data.user)))
	}
}

export function SaveUser(data) {
	const userData = data.userData
	return dispatch => {
		return fetch(`/api/users/${userData.id}`, {
			method: "post",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(handleResponse)
		.then(data => dispatch(SavedUser(data.user)))
	}
}

export function UpdateUser(data) {
	const userData = data.userData
	return dispatch => {
		return fetch(`/api/users/${userData.id}`, {
			method: "put",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(handleResponse)
		.then(data => dispatch(UpdatedUser(data.user)))
	}
}

