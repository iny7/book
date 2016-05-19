import { INVALIDATE_DATA, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, 
        REQUEST_BOOKS, RECEIVE_BOOKS, BORROW_BOOK, 
        FILTER_BOOK, SEARCH_BOOK, SHOW_ALL, SHOW_MINE,
        ADD_TODO, DELETE_TODO, EDIT_TODO, 
        COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';
import * as BOOK_FILTERS from '../constants/FilterNames';
// const initialState = [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   }
// ]
const initialState = {
    text : '' ,
    filter : SHOW_ALL,
    isFetching: false,
    didInvalidate: false,
    books : []
}

export default function(state = initialState, action) {
  switch (action.type) {
    
    //basic action
    case INVALIDATE_DATA:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_BOOKS:
      console.log('get books!!!')
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        books: action.books, //declare in actions/index.js
        lastUpdated: action.receivedAt
      })
    case BORROW_BOOK:
      console.log("jie shu !!!!!!")
      return state;

    //network action
    case FETCH_BOOKS_REQUEST:
      console.log('reducers FETCH_BOOKS_REQUEST')
      return state;
    case SEARCH_BOOK:
      console.log('search:',action.text)
      return state;

    //filter action
    case FILTER_BOOK:

      return Object.assign({}, state, { text : action.text })
    case SHOW_ALL:
      console.log('reducer show all')
      /*I didn't filter data here because I don't want 'show' operation to change 'books',
      In other words, I don't wanna fetch data every time users click on the switch components,
      So, I do filter things in the components*/
      return Object.assign({}, state, { filter : BOOK_FILTERS[SHOW_ALL] });

    case SHOW_MINE:
      console.log('reducer show mine')
      return Object.assign({}, state, { filter : BOOK_FILTERS[SHOW_MINE] });

    default:
      return state
  }
}
