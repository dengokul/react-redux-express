// routes.js
import React from 'react';
import Route from 'react-router/lib/Route';

import TestPage from 'components/TestPage'

export default (
	<Route path="/">
		<Route path="foo" component={TestPage} />
		<Route path="bar" component={TestPage} />
	</Route>
);