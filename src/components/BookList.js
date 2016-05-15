require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';
import Book from './Book'
import Switch from './grain/Switch';
import Button from './grain/Button';

class BookList extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	}
	/*React v0.12 中，事件处理程序返回 false 不再停止事件传播，
	    取而代之，应该根据需要手动触发 e.stopPropagation() 或 
	    e.preventDefault()。*/
	search(){
		alert("search")
	}

	render() {
		
	    return (
	    	<div>
		    	<div className="toolBar">
	    			<input type="text" placeholder="请输入书名/作者等关键字"/>
	    			<Button clickHandler={this.search} value="搜索"/>
	    			<Switch value={['所有','我的']}/>
		    	</div>
		    	<ul className="bookList">
		    		{this.props.books.map(function(elem, index) {
		    			return <li key={index}><Book value={elem} /></li>
		    		})}
			    </ul>
	      	</div>
	    );
	}
}

export default BookList;
