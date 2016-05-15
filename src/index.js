import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/Main';

import LoginPage from './components/LoginPage';
import Student from './components/Student';
import BookList from './components/BookList';
import BookPage from './components/BookPage';
import Admin from './components/Admin';
import Info from './components/Info';


function requireLogin(nextState, replaceState) {
	var hasLogin = true;
	if (!hasLogin) {
	    replace({ nextPathname: nextState.location.pathname }, '/login')
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			{/*make using components as IndexRoute when test*/}
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
	</Router>, document.getElementById('app'));
