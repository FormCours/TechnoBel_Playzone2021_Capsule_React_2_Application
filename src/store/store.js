import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducers/message-reducer';
import notifReducer from './reducers/notif-reducer';
import todoReducer from './reducers/todo-reducer';

const reducer = combineReducers({
    notif: notifReducer,
    message: messageReducer,
    todo: todoReducer
});


const store = createStore(reducer, applyMiddleware(thunk));
export default store;

// ↓ Pour utiliser le plugin
// export default createStore(reducer, compose(
//     applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
