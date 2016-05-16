require('styles/student.css');

import React from 'react';

import Banner from './Banner';
import BookList from './BookList';

/*注意在不用Flux的情况下,向this.props.children传props的方法*/
class Student extends React.Component {
	
	constructor(props, context) {

	    super(props, context);
	    
		/*getInitialState was defined on Student, 
		a plain JavaScript class. This is only supported
		 for classes created using React.createClass.
		  Did you mean to define a state property instead?*/
	}
	/*{React.Children.map()*/
/*<BookList books={books}/>*/
	search(text){
		alert(text)
	}
	showAll() {
		alert('showAll')
	}
	showMine(){
		alert('showMine')
	}
	
	render() {

		// var children = React.Children.map(this.props.children, (item) => {
		// 	return React.cloneElement(item, {
		// 		books : books,
		// 		search : this.search,
		// 		showAll : this.showAll,
		// 		showMine : this.showMine
		// 	})
		// })

	    return (
	    	<section className="student">
	    		<Banner />
	    		{this.props.children}
		    </section>
	      
	    );
	}
}

export default Student;
