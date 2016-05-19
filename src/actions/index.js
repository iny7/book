import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

/*Each of these functions return an action,and each action is just a descrption of what will happen.
if you wanna do something, that will be not enough. dispatching this action will help you*/

export function filter(text){
	return { type: types.FILTER_BOOK, text}
}

export function search(text){
	return { type: types.SEARCH_BOOK, text}
}
function fetchBooks(){
	return {
		type : types.FETCH_BOOKS_REQUEST,
	    books : 'test'
	 }
}
function receiveBooks(json) {
	console.log('receive:',json)
	return {
	    type: types.RECEIVE_BOOKS,
	    books: json.books,
	    receivedAt: Date.now()
	}
}
export function loadBooks(){
	return (dispatch, getState) => {
		dispatch(fetchBooks());
		return fetch('http://127.0.0.1:8080/books')
	      .then(response => response.json())
	      .then(json => dispatch(receiveBooks(json)))
	}
}

export function showAll() {
	console.log('action show all')
	return { type: types.SHOW_ALL }
}

export function showMine() {
	console.log('action show mine')
  	return { type: types.SHOW_MINE }
}
