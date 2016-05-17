import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/Main';
import LoginPage from './containers/LoginPage';
import Student from './containers/Student';
import Admin from './containers/Admin';

import Info from './containers/Info';
import BookList from './containers/BookList';
import BookPage from './containers/BookPage';

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
			<Route path="/books" components={BookList}></Route>
			<Route path="/books/:id" component={BookPage}></Route>
		</Route>
		<Route path="admin" component={Admin}>
			<IndexRoute component={Info} />
			<Route path="books" component={BookList}></Route>
		</Route>
	</Route>
)