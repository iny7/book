require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';
import { connect } from 'react-redux';
import { showAll, showMine } from '../actions';

import Book from './Book'
import Switch from './grain/Switch';
import Button from './grain/Button';


function loadData(props) {
  props.showAll();
}

class BookList extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {

	    super(props, context);
	   
	    this.state = {
	    	text: this.props.text || ''
	    }
	}
	
	componentWillMount() {
		console.log("load data")
	    loadData(this.props)
	}

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

		const books = this.props.books || [];

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
		    		{
		    			books.length == 0 ? <p>no books</p> : books.map(function(elem, index) {
		    				return <li key={index}><Book value={elem} /></li>
		    			})
		    		}
			    </ul>
	      	</div>
	    );
	}
}

function mapStateToProps(state) {
	console.log(state)
  return { books: state.books };
}

export default connect(mapStateToProps, {
  showAll,
  showMine
})(BookList)

