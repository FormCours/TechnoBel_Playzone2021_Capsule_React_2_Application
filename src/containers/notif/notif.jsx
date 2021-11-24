import { Alert, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeNotif } from '../../store/actions/notif-action';

const Notif = () => {
    const {isVisible, message, severity} = useSelector(state => state.notif);
    const dispatch = useDispatch();

    const handleCloseNodif = () => {
        dispatch(closeNotif());
    };

    return (
        <Snackbar open={isVisible} autoHideDuration={3000} onClose={handleCloseNodif}>
            <Alert onClose={handleCloseNodif} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notif;