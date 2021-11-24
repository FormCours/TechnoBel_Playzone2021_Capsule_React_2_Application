import axios from 'axios';
import { showNotifError, showNotifSuccess } from './notif-action';

export const MESSAGE_LOADING = 'MESSAGE/LOADING';
export const MESSAGE_RETRIEVE = 'MESSAGE/RETRIEVE';


export const loadMessage = () => ({
    type: MESSAGE_LOADING
});

export const retrieveMessage = (data) => ({
    type: MESSAGE_RETRIEVE,
    payload: data
});


export const sendMessage = ({ title, content }) => {
    return (dispatch) => {
        axios.post('http://localhost:3333/message', { title, content })
            .then(() => {
                dispatch(showNotifSuccess('Message envoyé'));
            })
            .catch(() => {
                dispatch(showNotifError('Erreur de l\'envois'));
            });
    };
};

export const fetchMessages = () => {
    return (dispatch) => {
        dispatch(loadMessage());
        axios.get('http://localhost:3333/message')
            .then((response) => {
                dispatch(retrieveMessage(response.data));
            })
            .catch(() => {
                dispatch(retrieveMessage([]));
                dispatch(showNotifError('Erreur de chargement'));
            });
    };
};