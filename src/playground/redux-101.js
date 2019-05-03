import { createStore } from 'redux'

// Action generators - functions that return action object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({count} = {}) => ({
  type: 'SET',
  count
})


// Reducers
// 1. Reducers are pure function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

// Subscribe to changes...To unsubscribe call unsubscribe()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// Action - an object that gets sent to the store

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

store.dispatch(setCount({count: 101}))
