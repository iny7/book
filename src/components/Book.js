require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';

class Book extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	/*React v0.12 中，事件处理程序返回 false 不再停止事件传播，
	    取而代之，应该根据需要手动触发 e.stopPropagation() 或 
	    e.preventDefault()。*/

	render() {
		var book = this.props.value;
		var name = book.name;
		var author = book.author;
		var url = book.url;
		
	    return (
    		<figure className="book">
	    		<img src={url} alt={name} />
    			<figcaption>{name}</figcaption>
		    </figure>
	    );
	}
}

export default Book;
