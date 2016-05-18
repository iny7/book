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
    books : [
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
    ]
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
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.books, //declare in actions/index.js
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

    
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
