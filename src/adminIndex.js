import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import { setCurrentUser } from './actions/authActions'
import adminRoutes from './routes/adminRoutes'

 

/*var bLink = document.createElement('script');
bLink.src = '/static/js/admin.bundle.js';
document.head.appendChild(bLink);*/

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={ adminRoutes } />
  </Provider>, document.getElementById('app'));