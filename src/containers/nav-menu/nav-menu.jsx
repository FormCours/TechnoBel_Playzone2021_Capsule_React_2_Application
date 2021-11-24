import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MessageIcon from '@mui/icons-material/Message';
import NavigationIcon from '@mui/icons-material/Navigation';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavLink, useMatch } from 'react-router-dom';
import style from './nav-menu.module.css';
import PropTypes from 'prop-types';

const navRoute = [
    { to: '', text: 'Home', icon: <HomeIcon /> },
    { to: 'about', text: 'About', icon: <InfoIcon /> },
    { to: 'msg', text: 'Messages', icon: <MessageIcon /> },
    { to: 'todo', text: 'Todo App', icon: <PlaylistAddCheckIcon /> },
    { to: 'router', text: 'Router', icon: <NavigationIcon /> },
];

const NavMenuItem = ({ to, text, icon }) => {
    const match = useMatch({
        path: to,
        caseSensitive: false,
        end: to === ''
      });

    return (
        <ListItemButton
            selected={match !== null}
            component={NavLink} to={to}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    );
};

const NavMenu = ({ onSelected }) => {
    return (
        <nav className={style.nav}>
            <List onClick={onSelected}>
                {navRoute.map((elem, index) => <NavMenuItem key={index} {...elem} />)}
            </List>
        </nav>
    );
};

NavMenu.defaultProps = {
    onSelected: () => { }
};

NavMenu.propTypes = {
    onSelected: PropTypes.func
};

export default NavMenu;