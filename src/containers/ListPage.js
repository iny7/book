require('normalize.css/normalize.css');
require('styles/bookList.css');

import React from 'react';
import { connect } from 'react-redux';
import { showAll, showMine, filter, search } from '../actions';
import { SHOW_ALL, SHOW_MINE, SHOW_KEYWORDS } from '../constants/FilterNames';

import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BOOK_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_MINE]: (book) => book.belongMe,
  //the way of filter books, now is simple ,but it will be complex in future
  [SHOW_KEYWORDS] : (text, book) => {
  	console.log(text, '---------')
  	const { name, author } = book;
	return name.indexOf(text) != -1 || author.indexOf(text) != -1
  }
}

function loadData(props) {
  
  console.log(props)
}

class ListPage extends React.Component {
	//in ES6, you can not use getIntialState() {} to initial react component
	constructor(props, context) {
	    super(props, context);
	 
	}
	
	componentWillMount() {
		console.log("load data")
	    loadData(this.props)
	}

	//keywords filter(local,props.books not change)
	filter(e){
		const { dispatch } = this.props;
		//if input value contains space, I shouldn't delete it, but 
		const text = e.target.value;
		dispatch(filter(text))
		
	}

	//keywords search(net,fetch and change props.books))
	search(e){
		if (e.type === 'click' || e.which === 13) {
			const { text, dispatch } = this.props;
			dispatch(search(text))
		}
	}



	handleSwitchOn(){
		const { dispatch } = this.props;
		dispatch(showAll())
	}

	handleSwitchOff(){
		const { dispatch } = this.props;
		dispatch(showMine())
	}

	render() {

		const { text, filter, search, books } = this.props;

		var filteredBooks = books.filter(BOOK_FILTERS[filter])
		
		var trimText = text.trim();
		if(trimText){
			filteredBooks = filteredBooks.filter(BOOK_FILTERS[SHOW_KEYWORDS].bind(this, trimText))
		}
			

	    return (
	    	<div>
		    	<SearchBar text={text}
		    			placeholder="请输入书名/作者等关键字"
		    			handleChange={this.filter.bind(this)}
		    			handleSubmit={this.search.bind(this)}
		    			switchOn={this.handleSwitchOn.bind(this)}
						switchOff={this.handleSwitchOff.bind(this)}
						value={['所有','我的']} 
						switchStatus={filter === 'SHOW_ALL' ? true : false}/>
		    	
		    	<BookList books={filteredBooks}/>
	      	</div>
	    );
	}
}

function mapStateToProps(state) {
	const { books : { text, filter, books } } = state;
	return {
		text : text,
		filter : filter,
		books : books
	}
}
function mapDispatchToProps(dispatch){
	// {
	// 	showAll,
	// 	showMine
	// }
}

export default connect(mapStateToProps)(ListPage)

