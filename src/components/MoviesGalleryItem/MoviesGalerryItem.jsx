import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryImage,
  MovieTitle,
} from './MoviesGalleryItem.styled';

function MoviesGalleryItem({ movie: { id, title, posterPath } }) {
  const location = useLocation();
  
  return (
    <GalleryItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <GalleryImage src={posterPath} alt={title} />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </GalleryItem>
  );
}

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
  }).isRequired,
};

export default MoviesGalleryItem;
