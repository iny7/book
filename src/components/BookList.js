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
	    this.state = {
	      text: this.props.text || ''
	    }
	}
	/*React v0.12 中，事件处理程序返回 false 不再停止事件传播，
	    取而代之，应该根据需要手动触发 e.stopPropagation() 或 
	    e.preventDefault()。*/
	search(){
		const text = this.state.text;
		this.props.search(text)
		this.setState({ text: '' })
	}

	switchOn() {
		this.props.showAll();
	}

	switchOff(){
		this.props.showMine();
	}

	handleChange(e){
		this.setState({ text: e.target.value })
	}	

	handleSubmit(e) {
	    const text = e.target.value.trim()
	    if (e.which === 13) {
	      this.props.search(text)
	      if (this.props.newTodo) {
	        this.setState({ text: '' })
	      }
	    }
	}

	render() {
		
	    return (
	    	<div>
		    	<div className="toolBar">
	    			<input 
	    				type="text" 
	    				placeholder="请输入书名/作者等关键字" 
	    				value={this.state.text}
	    				onChange={this.handleChange.bind(this)}
	    				onKeyDown={this.handleSubmit.bind(this)}
	    			/>
	    			<Button clickHandler={this.search.bind(this)} value="搜索"/>
	    			<Switch 
	    				value={['所有','我的']}
	    				on={this.switchOn.bind(this)}
	    				off={this.switchOff.bind(this)}
	    			/>
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
