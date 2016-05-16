import * as types from '../constants/ActionTypes'

export function showAll() {
	console.log("msg")
  return (dispatch, getState) => {

  	const books = [
			{
				'id' : 1,
				'name' : '世界尽头与冷酷仙境',
				'author' : '村上春树',
				'url' : '/images/1.jpg'
			},
			{
				'id' : 2,
				'name' : '了不起的盖茨比',
				'author' : '歪果仁',
				'url' : '/images/2.jpg'
			},
			{
				'id' : 3,
				'name' : '幻夜',
				'author' : '东野圭吾',
				'url' : '/images/3.jpg'
			},
			{
				'id' : 4,
				'name' : '白夜行',
				'author' : '东野圭吾',
				'url' : '/images/4.jpg'
			},
		];
	return {books : books}
  }
}

export function showMine(text) {
  return { type: types.SHOW_MINE, text }
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
