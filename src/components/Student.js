require('styles/student.css');

import React from 'react';

import Banner from './Banner';
import BookList from './BookList';

/*注意在不用Flux的情况下,向this.props.children传props的方法*/
class Student extends React.Component {
	/*getInitialState was defined on Student, 
	a plain JavaScript class. This is only supported
	 for classes created using React.createClass.
	  Did you mean to define a state property instead?*/
	constructor(props, context) {
	    super(props, context);
	    var books = [
			{
				'id' : 1,
				'name' : '世界尽头与冷酷仙境',
				'author' : '村上春树',
				'url' : '/images/1.jpg'
			},
			{
				'id' : 2,
				'name' : '了不起的盖茨比',
				'author' : '歪果仁',
				'url' : '/images/2.jpg'
			},
			{
				'id' : 3,
				'name' : '幻夜',
				'author' : '东野圭吾',
				'url' : '/images/3.jpg'
			},
			{
				'id' : 4,
				'name' : '白夜行',
				'author' : '东野圭吾',
				'url' : '/images/4.jpg'
			},
		];
		this.state = {
			books : books
		}
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
		var books = this.state.books;

		var children = React.Children.map(this.props.children, (item) => {
			return React.cloneElement(item, {
				books : books,
				search : this.search,
				showAll : this.showAll,
				showMine : this.showMine
			})
		})

	    return (
	    	<section className="student">
	    		<Banner />
	    		{children}
		    </section>
	      
	    );
	}
}

export default Student;
