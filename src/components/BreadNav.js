require('styles/banner.css')

import React from 'react';
import { Link } from 'react-router'
//Component not component!!!!!!!!!!
class BreadNav extends React.Component {
	
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		return (
			<div className="bread">
				<Link to="/">index</Link> >>
				<Link to="/student">student</Link> >>
				<Link to="books">books</Link>
			</div>
		);
	}
}

export default BreadNav;