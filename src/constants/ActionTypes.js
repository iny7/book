//basic action
export const INVALIDATE_DATA = 'INVALIDATE_DATA'
export const REQUEST_BOOKS = 'REQUEST_BOOKS'
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const BORROW_BOOK = 'BORROW_BOOK'

//network action
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'

/*local operation, don't need network requests*/
export const FILTER_BOOK = 'FILTER_BOOK'
export const SEARCH_BOOK = 'SEARCH_BOOK'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_MINE = 'SHOW_MINE'


export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
