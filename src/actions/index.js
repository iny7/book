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
export function loadBooks(){
	return (dispatch, getState) => {
		return dispatch(fetchBooks())
	}
}

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

export function showAll() {
	console.log('action show all')
	return { type: types.SHOW_ALL }
}

export function showMine() {
	console.log('action show mine')
  	return { type: types.SHOW_MINE }
}
