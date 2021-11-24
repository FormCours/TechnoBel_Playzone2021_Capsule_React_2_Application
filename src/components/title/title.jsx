import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Title = ({text}) => {
    return (
        <Typography component='h1' variant='h4' marginTop={3}>
             {text}
        </Typography >
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;