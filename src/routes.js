import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/Main';
import LoginPage from './containers/LoginPage';
import Student from './containers/Student';
import Admin from './containers/Admin';


import Info from './containers/Info';
import ListPage from './containers/ListPage';
import DetailPage from './containers/DetailPage';

function requireLogin(nextState, replaceState) {
	var hasLogin = true;
	if (!hasLogin) {
	    replace({ nextPathname: nextState.location.pathname }, '/login')
	}
}

export default (
	<Route path="/" component={App}>
		<IndexRoute components={LoginPage} />
		<Route path="login" component={LoginPage} />
		<Route path="student" onEnter={requireLogin} component={Student}>
			<IndexRoute component={Info} />
			<Route path="/books" component={ListPage} />
			<Route path="/books/:id" component={DetailPage} />
		</Route>
		<Route path="admin" component={Admin}>
			<IndexRoute component={Info} />
			<Route path="books" component={ListPage}></Route>
		</Route>
	</Route>
)