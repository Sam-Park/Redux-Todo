import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, GET_TODO } from '../actions';

export default ( todos = [], action) => {
    switch (action.type){
        case ADD_TODO:
        return [...todos, action.payload];
        case TOGGLE_TODO:
        return todos.map(todo => {
            if (todo.id === action.payload) {
            return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;

    });
        case REMOVE_TODO:
            return todos.filter(todo => !todo.completed);
        case GET_TODO:
            return action.payload;

        default:
            return todos;
}
}