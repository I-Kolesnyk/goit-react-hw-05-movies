import MoviesGalleryItem from 'components/MoviesGalleryItem';
import { GalleryList } from './MoviesGallery.styled';

function MoviesGallery({ movies }) {
  return (
    <GalleryList>
      {movies.map(movie => (
        <MoviesGalleryItem key={movie.id} movie={movie}/>
      ))}
    </GalleryList>
  );
}

export default MoviesGallery;
