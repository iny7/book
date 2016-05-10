require('normalize.css/normalize.css');

import React from 'react';
import userData from '../data/users';

import Link from 'react-router';

import LoginBox from './LoginBox';

function validate(){
	var location = this.props.location;
	
	//do BE Validate here
	

	if (location.state && location.state.nextPathname) {
      this.props.history.replaceState(null, location.state.nextPathname)
    } else {
      this.props.history.replaceState(null, '/student')
    }
}

class LoginPage extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}

	render() {

	    return (
	    	<section className="loginPage">
	    		<LoginBox validate={validate.bind(this)}
	    			dragable/>
		    </section>
	      
	    );
	}
}

export default LoginPage;