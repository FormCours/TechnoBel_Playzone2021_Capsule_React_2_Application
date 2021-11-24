// Les actions
export const NOTIF_SUCCES = 'NOTIF/SUCCESS';
export const NOTIF_ERROR = 'NOTIF/ERROR';
export const NOTIF_WARNING = 'NOTIF/WARNING';
export const NOTIF_CLOSE = 'NOTIF/CLOSE';

// Méthodes d'actions
export const showNotifSuccess = (message) => ({
    type: NOTIF_SUCCES,
    payload: message
});

export const showNotifError = (message) => ({
    type: NOTIF_ERROR,
    payload: message
});

export const showNotifWarning = (message) => ({
    type: NOTIF_WARNING,
    payload: message
});

export const closeNotif = () => ({
    type: NOTIF_CLOSE
});
