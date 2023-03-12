import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import {
  Container,
  Header,
  Navigation,
  NavigationLink,
  Footer,
} from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/search">Movies</NavigationLink>
          </Navigation>
        </Container>
      </Header>
      <Outlet />
      <Footer>
        <Container>
          <p>
            &copy; 2023 Iryna Kolesnyk <br />
            All rights reserved.
          </p>
        </Container>
      </Footer>
      <ToastWrapper />
    </>
  );
}

export default Layout;
