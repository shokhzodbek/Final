import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';

import MainApp from './layouts/MainApp';
function App() {
	return (
		<div>
			<Switch>
				<Route path="/app" render={(props) => <MainApp {...props} />} />
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
				<Route path="/auth" render={(props) => <AuthLayout {...props} />} />
				<Redirect from="/" to="/app/index" />
			</Switch>
		</div>
	);
}

export default App;
