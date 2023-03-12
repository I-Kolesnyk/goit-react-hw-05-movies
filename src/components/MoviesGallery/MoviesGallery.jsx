import PropTypes from 'prop-types';
import MoviesGalleryItem from 'components/MoviesGalleryItem';
import { GalleryList } from './MoviesGallery.styled';

function MoviesGallery({ movies }) {
  return (
    <GalleryList>
      {movies.map(movie => (
        <MoviesGalleryItem key={movie.id} movie={movie} />
      ))}
    </GalleryList>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      genres: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesGallery;
