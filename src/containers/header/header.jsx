import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

const Header = ({ onMenuClick }) => {
    return (
        <header>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton onClick={onMenuClick}
                        size="large"
                        edge="start"
                        color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography component='p' variant='h5'>
                        Demo Technobel
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
};

Header.defaultProps = {
    onMenuClick: () => { }
};

Header.propTypes = {
    onMenuClick: PropTypes.func
};

export default Header;