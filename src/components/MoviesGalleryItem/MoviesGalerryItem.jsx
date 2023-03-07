import { getImagePosterPath } from 'utils/getImagePosterPath';
import { GalleryItem, GalleryImage, MovieTitle } from './MoviesGalleryItem.styled';

function MoviesGalleryItem({ movie }) {
  const posterPath = getImagePosterPath(movie.poster_path);
  return (
    <GalleryItem>
      <GalleryImage src={posterPath} alt={movie.title} />
      <MovieTitle>{movie.title}</MovieTitle>
    </GalleryItem>
  );
}

export default MoviesGalleryItem;
