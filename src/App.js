import { Container, CssBaseline, Drawer } from '@mui/material';
import { useState } from 'react';
import { useRoutes } from 'react-router';
import Footer from './containers/footer/footer';
import Header from './containers/header/header';
import NavMenu from './containers/nav-menu/nav-menu';
import Notif from './containers/notif/notif';
import { appRoute } from './routes';

function App() {
  const routes = useRoutes(appRoute);
  const [visibilityMenu, setVisibilityMenu] = useState(false);

  return (<>
    <CssBaseline />
    <Header onMenuClick={() => setVisibilityMenu(true)} />
    <Drawer open={visibilityMenu}
      onClose={() => setVisibilityMenu(false)}
      anchor='left'>
      <NavMenu onSelected={() => setVisibilityMenu(false)} />
    </Drawer>
    <Notif />
    <Container >
      {routes}
    </Container>
    <Footer />
  </>);
}

export default App;
