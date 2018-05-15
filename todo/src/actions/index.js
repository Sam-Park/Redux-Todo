export const ADD_TODO = 'ADD_TODO'; 
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODO = 'GET_TODO';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        playload: todo,
    }
}

export const toggleTodo = id => {
    return {
      type: TOGGLE_TODO,
      payload: id
    };
  };
  
  export const removeTodos = () => {
    return {
      type: REMOVE_TODO
    };
  };
  
  export const getTodos = todos => {
    return {
      type: GET_TODO,
      payload: todos
    };
  };