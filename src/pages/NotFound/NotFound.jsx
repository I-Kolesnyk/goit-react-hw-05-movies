import pageNotFound from '../../images/404.jpg';
import { Container, HomeLink, Image, Main } from './NotFound.styled';

function NotFoundPage() {
  return (
    <Main>
      <Container>
        <HomeLink to="/">Go Home</HomeLink>
        <Image src={pageNotFound} alt="404 page not found" />
      </Container>
    </Main>
  );
}

export default NotFoundPage;
