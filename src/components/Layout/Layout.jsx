import { Outlet} from 'react-router-dom';
import { Container, Header, Navigation, NavigationLink, Footer } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <Container>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
        </Container>
      </Header>
      <Container>
      <Outlet />
      </Container>
      
      <Footer>
        <Container>
        <p>&copy; 2023 Iryna Kolesnyk <br/>All rights reserved.</p>
        </Container>
        
      </Footer>
    </>
  );
}

export default Layout;
