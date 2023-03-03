import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  );
}

export default Layout;
