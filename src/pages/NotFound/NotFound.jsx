import pageNotFound from '../../images/404.jpg';
import { Container, HomeLink, Image } from './NotFound.styled';

function NotFoundPage() {
  return (
    <main>
      <Container>
        <HomeLink to="/">Go Home</HomeLink>
        <Image src={pageNotFound} alt="404 page not found" />
      </Container>
    </main>
  );
}

export default NotFoundPage;
