import { NavLink } from 'react-router-dom';
import pageNotFound from 'images/pageNotFound.jpg';
function NotFoundPage() {
  return (
    <main>
      <p>There are some problems! Try again later.</p>
      <img scr={pageNotFound} alt="404 page not found"/>
      <NavLink to="/" text= "Go Home"/>
    </main>
  );
}

export default NotFoundPage;
