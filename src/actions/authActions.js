import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from 'actions/types';

export function setCurrentUser(user) {
  console.log('setcurrnt user')
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
   console.log('logut')
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  console.log('login')
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function socialLogin(user) {
   console.log('slogin')
  return dispatch => {
    return axios.get(`/api/auth/socialLoginUserExists/${user.email}`).then(res => {
      handleSocialLogin(res, user, dispatch)
    });
  }
}

export function handleSocialLogin(response, prevUser, dispatch) {
  if(!response.data.user) {
    let password = 'Mst@123'
    prevUser.password = password
    prevUser.confirm_password = password
    prevUser.username = prevUser.email
      return axios.post('/api/users', prevUser).then(res => {
        generateToken(prevUser, dispatch)
      });
  } else {
    generateToken(prevUser, dispatch)
  }
}

export function generateToken(user, dispatch) {
    return axios.post('/api/auth/generateToken', user).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
}