import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const ButtonLink = ({ to, children }) => {
    const nav = useNavigate();

    return (
        <Button variant="contained" onClick={() => nav(to)}>
            {children}
        </Button>
    );
};

export default ButtonLink;