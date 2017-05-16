import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/includes/App'
import Home from 'components/home/Home'
import LoginPage from 'components/login/LoginPage'
import SignupPage from 'components/signup/SignupPage'
import LoginPageOld from 'components/login/LoginPageOld'
import SignupPageOld from 'components/signup/SignupPageOld'
import TestPage from 'components/TestPage'

import requireAuth from 'utils/requireAuth'
import requireNoAuth from 'utils/requireNoAuth'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/test" component={requireAuth(TestPage)} />
    <Route path="/login" component={requireNoAuth(LoginPage)} />
    <Route path="/signup" component={requireNoAuth(SignupPage)} />
    <Route path="/login1" component={LoginPageOld} />
    <Route path="/signup1" component={SignupPageOld} />
  </Route>
)