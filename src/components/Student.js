require('normalize.css/normalize.css');
require('styles/student.css');

import React from 'react';

import Banner from './Banner';
import Switch from './Switch';
import BookList from './BookList';

class Student extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	
	render() {
		
	    return (
	    	<section>
	    		<Banner />
	    		<Switch />
	    		<BookList />
		    </section>
	      
	    );
	}
}

export default Student;
