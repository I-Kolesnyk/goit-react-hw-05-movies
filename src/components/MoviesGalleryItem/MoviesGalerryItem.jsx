import { Link, useLocation } from 'react-router-dom';
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

export default MoviesGalleryItem;
