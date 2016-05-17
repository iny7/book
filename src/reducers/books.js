import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';
import { SHOW_ALL, SHOW_MINE } from '../constants/BookFilters';

// const initialState = [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   }
// ]
const initialState = {
      bookFilter: SHOW_ALL,
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
    case SHOW_ALL:
      console.log('reducer show all')
      return Object.assign({}, state, {})

    case SHOW_MINE:
      console.log('reducer show mine')
      return Object.assign({}, state, {bookFilter: SHOW_MINE})
    
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
