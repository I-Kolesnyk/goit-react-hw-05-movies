import { Outlet, useLocation } from 'react-router-dom';
import { getImagePosterPath } from 'utils/getImagePosterPath';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { StyledLink } from 'components/LinkButton/LinkButton.styled';
import { Main, Container, MovieInfo, Image, Navigation, MovieInfoWrapper, Rate } from './Movie.styled';

function Movie({
  movie: { title, poster_path, overview, genres, vote_average, release_date },
}) {
  const { state, pathname } = useLocation();
  const posterPath = getImagePosterPath(poster_path);
  const vote = vote_average.toFixed(1);  
  const year = release_date.slice(0, 4);

  return (
    <Main>
      <Container>
        <StyledLink to={state?.from ?? '/'}>
          <IoIosArrowRoundBack />
          Go back
        </StyledLink>
        <MovieInfo>
          <Image src={posterPath} alt={title} />
          <div>
            <MovieInfoWrapper>
            <h1>
              {title} ({release_date? year : 'xxxx'})
            </h1>
            {vote_average !== 0 && <Rate>{vote}</Rate>}
            </MovieInfoWrapper>
            <h2>Overview</h2>
            {overview ? <p>{overview}</p> : 'Information is not available'}
            <h2>Genres</h2>
            {genres ? <p>{genres}</p> : 'Information is not available'}
          </div>
        </MovieInfo>
        <Navigation>
          <StyledLink
            to={pathname.includes('cast') ? '' : 'cast'}
            state={{ from: state?.from ?? '/' }}
          >
            {pathname.includes('cast') ? 'Hide Cast' : 'Show Cast'}
          </StyledLink>
          <StyledLink
            to={pathname.includes('reviews') ? '' : 'reviews'}
            state={{ from: state?.from ?? '/' }}
          >
            {pathname.includes('reviews') ? 'Hide Reviews' : 'Show Reviews'}
          </StyledLink>
        </Navigation>
        <Outlet />
      </Container>
    </Main>
  );
}

export default Movie;
