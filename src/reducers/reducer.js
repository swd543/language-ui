import { addTodo } from 'src/actions/actions'
import { ADD_TODO } from 'src/actions/actions'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (addTodo) {
    case ADD_TODO:
      console.log('here')
      return { ...state, ...payload }

    default:
      return state
  }
}
