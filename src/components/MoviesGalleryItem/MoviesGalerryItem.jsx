import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getImagePosterPath } from 'utils/getImagePosterPath';
import {
  GalleryItem,
  GalleryImage,
  MovieTitle,
} from './MoviesGalleryItem.styled';

function MoviesGalleryItem({ movie: { id, title, poster_path } }) {
  const location = useLocation();
  const posterPath = getImagePosterPath(poster_path);
  
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
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MoviesGalleryItem;
