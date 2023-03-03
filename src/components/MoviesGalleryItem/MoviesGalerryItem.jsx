import { getImagePosterPath } from 'utils/getImagePosterPath';
import { GalleryItem, GalleryImage } from './MoviesGalleryItem.styled';

function MoviesGalleryItem ({movie}) {
    const posterPath = getImagePosterPath(movie.poster_path);
    return (<GalleryItem >
        <GalleryImage src={posterPath} alt={movie.title} />
        <p>Title: {movie.title}</p>
        </GalleryItem>)
    
}

export default MoviesGalleryItem;