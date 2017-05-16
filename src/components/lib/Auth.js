import axios from 'axios'

export function getToken() {
	return axios.defaults.headers.common['Authorization']
}

export function isLoggedIn() {
	if(!axios.defaults.headers.common['Authorization']) {
		return false;
	} else {
		return true
	}
}