import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/Main';
import LoginPage from './components/LoginPage';
import Student from './components/Student';
import Admin from './components/Admin';
import Info from './components/Info';
import BookList from './components/BookList';

function requireLogin(nextState, replaceState) {
	var hasLogin = true;
	if (!hasLogin) {
	    replaceState({ nextPathname: nextState.location.pathname }, '/login')
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={LoginPage} />
			<Route path="login" component={LoginPage} />
			<Route onEnter={requireLogin} path="student" component={Student}>
				<IndexRoute component={Info} />
				<Route path="books" component={BookList}></Route>
			</Route>
			<Route path="admin" component={Admin}>
				<IndexRoute component={Info} />
				<Route path="books" component={BookList}></Route>
			</Route>
		</Route>
	</Router>, document.getElementById('app'));
