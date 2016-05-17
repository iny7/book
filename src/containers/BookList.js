require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';
import { connect } from 'react-redux';
// import { showAll, showMine } from '../actions';

import Book from '../components/Book'
import Switch from '../components/grain/Switch';
import Button from '../components/grain/Button';
import { SHOW_ALL, SHOW_MINE } from '../constants/BookFilters';

const BOOK_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_MINE]: book => book.belongMe,
}


function loadData(props) {
  
  console.log(props)
}

class BookList extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	    this.state = { text : '' , filter : SHOW_ALL }
	}
	
	componentWillMount() {
		console.log("load data")
	    loadData(this.props)
	}

	search(){
		const text = this.state.text;
		this.props.search(text)
		// this.setState({ text: '' })
	}

	switchOn() {
		var state = Object.assign({}, this.state, { filter : SHOW_ALL })
		this.setState(state)
		// this.props.showAll();
	}

	switchOff(){
		var state = Object.assign({}, this.state, { filter : SHOW_MINE })
		this.setState(state)
		// this.props.showMine();
	}

	handleChange(e){
		var state = Object.assign({}, this.state, { text: e.target.value })
		this.setState(state)
	}	

	// handleSubmit(e) {
	//     const text = e.target.value.trim()
	//     if (e.which === 13) {
	//       this.props.search(text)
	//       if (this.props.newTodo) {
	//         this.setState({ text: '' })
	//       }
	//     }
	// }

	render() {
		
		const { books } = this.props;

		const { text, filter } = this.state
		
		var filteredBooks = books.filter(BOOK_FILTERS[filter])
		if(text){
			filteredBooks = filteredBooks.filter(function(book){
				const { name, author } = book;

				console.log(name.indexOf(text) != -1 || author.indexOf(text) != -1)
	  			return name.indexOf(text) != -1 || author.indexOf(text) != -1
				
			})
		}
			

	    return (
	    	<div>
		    	<div className="toolBar">
	    			<input 
	    				type="text" 
	    				placeholder="请输入书名/作者等关键字" 
	    				// value={this.state.text}
	    				onChange={this.handleChange.bind(this)}
	    				// onKeyDown={this.handleSubmit.bind(this)}
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
		    			filteredBooks.length == 0 ? <p>no books</p> : filteredBooks.map(function(elem, index) {
		    				return <li key={index}><Book value={elem} /></li>
		    			})
		    		}
			    </ul>
	      	</div>
	    );
	}
}

function mapStateToProps(state) {
	const { books : { books } } = state;
	return {
		books : books
	}
}

export default connect(mapStateToProps)(BookList)

