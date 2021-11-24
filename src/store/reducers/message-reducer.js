import { MESSAGE_LOADING, MESSAGE_RETRIEVE } from '../actions/message-action';

const initialData = {
    isLoading: false,
    data: []
};

const messageReducer = (state = initialData, action) => {
    switch (action.type) {
        case MESSAGE_LOADING:
            return {
                isLoading: true,
                data: []
            };
        case MESSAGE_RETRIEVE:
            return {
                isLoading: false,
                data: action.payload
            };
        default:
            return state;
    }
};
export default messageReducer;