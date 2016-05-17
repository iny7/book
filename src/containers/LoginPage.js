require('normalize.css/normalize.css');

import React from 'react';
import userData from '../data/users';
// import $ from 'jquery'
import { connect } from 'react-redux';
import Link from 'react-router';

import LoginBox from '../components/LoginBox';

function validate(){
	var location = this.props.location;
	
	// console.log('pre')
	//do BE Validate here
	// $.get('http://127.0.0.1:8080', function(data){
	// 	console.log(data)
	// })
	// console.log('end')
	

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


