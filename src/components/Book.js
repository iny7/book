require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';
import Button from './grain/Button';
import {Link} from 'react-router'

class Book extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	/*React v0.12 中，事件处理程序返回 false 不再停止事件传播，
	    取而代之，应该根据需要手动触发 e.stopPropagation() 或 
	    e.preventDefault()。*/
	borrow(id, e) {
		// console.log(arguments)
		e.stopPropagation();
		e.preventDefault();
		alert("borrow"+id)
	}

	render() {
		var book = this.props.value;
		var id = book.id;
		var name = book.name;
		var author = book.author;
		var url = book.url;
		
	    return (
	    	<Link to={'/books/'+id} className="book" href="">
	    		<figure>
	    			<div className="mask">
	    				<Button clickHandler={this.borrow.bind(this, id)} value="借阅"/>
	    			</div>
		    		<img src={url} alt={name} />
	    			<figcaption>{name}</figcaption>
			    </figure>
			</Link>
	    );
	}
}

export default Book;
