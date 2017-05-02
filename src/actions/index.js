let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const getUpdatedNames = () => {
  return {
    type: 'GET_UPDATED_NAMES'
  }
}

export const getNames = () => {
  return {
    type: 'GET_NAMES'
  }
}