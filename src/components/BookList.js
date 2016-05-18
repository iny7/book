require('styles/banner.css')

import React from 'react';

import Book from './Book';

//Component not component!!!!!!!!!!
class BookList extends React.Component {
	
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}

	render() {
		const { books } = this.props;

		return (
			<ul className="bookList">
	    		{
	    			books.length == 0 ? <p>no books</p> : books.map(function(elem, index) {
	    				return <li key={index}><Book value={elem} /></li>
	    			})
	    		}
		    </ul>
		);
	}
}

export default BookList;