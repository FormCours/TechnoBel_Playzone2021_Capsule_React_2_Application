import { NOTIF_CLOSE, NOTIF_ERROR, NOTIF_SUCCES, NOTIF_WARNING } from '../actions/notif-action';

const initialState = {
    isVisible: false,
    message: null,
    severity: 'success'
};

const notifReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIF_SUCCES:
        case NOTIF_WARNING:
        case NOTIF_ERROR:
            return {
                isVisible: true,
                message: action.payload,
                severity: (action.type === NOTIF_SUCCES && 'success')
                    || (action.type === NOTIF_WARNING && 'warning')
                    || 'error'
            };
        case NOTIF_CLOSE:
            return {
                ...state,
                isVisible: false,
                message: null
            };
        default:
            return state;
    }
};

export default notifReducer;