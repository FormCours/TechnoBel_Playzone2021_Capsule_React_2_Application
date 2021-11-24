import { TODO_ADD, TODO_REMOVE, TODO_FINISH } from './../actions/todo-action';

const initialState = {
    tasks: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                tasks: [action.payload, ...state.tasks]
            };
        case TODO_REMOVE:
            return {
                tasks: state.tasks.filter(t => t.id !== action.payload)
            };
        case TODO_FINISH:
            return {
                tasks: state.tasks.map(t => t.id !== action.payload ? t : { ...t, isDone: true })
            };
        default:
            return state;
    }
};
export default todoReducer;