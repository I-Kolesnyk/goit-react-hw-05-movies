import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { StyledLink } from 'components/LinkButton/LinkButton.styled';
import {
  Main,
  Container,
  MovieInfo,
  Image,
  Navigation,
  MovieInfoWrapper,
  Rate,
} from './Movie.styled';

function Movie({
  movie: { title, posterPath, overview, genres, vote, year },
}) {
  const { state, pathname } = useLocation();

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
                {title} ({year ? year : 'xxxx'})
              </h1>
              {vote !== 0 && <Rate>{vote}</Rate>}
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

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};
export default Movie;
