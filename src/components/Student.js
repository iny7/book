require('normalize.css/normalize.css');
require('styles/loginBox.css');

import React from 'react';
import userData from '../data/users'

class Student extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	
	render() {
		
	    return (
	    	<section className="loginBox">
	    		student
		    </section>
	      
	    );
	}
}

export default Student;
