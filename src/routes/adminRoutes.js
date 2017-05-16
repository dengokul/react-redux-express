import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/admin/includes/App';
import Home from 'components/admin/includes/Home';
import DashboardPage from 'components/admin/DashboardPage';
import UsersPage from 'components/admin/users/UsersPage';
import AdminTest from 'components/admin/AdminTest';
// import ModalApp from 'components/modal/ModalApp';
// import requireAuth from 'utils/requireAuth';


export default ( 
  <Route path="/admin" component={App}>
    <IndexRoute component={Home} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route path="/admin/users" component={UsersPage} />
    <Route path="/admin/test123" component={AdminTest} />
  </Route>
)