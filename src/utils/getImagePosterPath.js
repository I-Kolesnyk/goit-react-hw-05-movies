import defaultImage from 'images/no-image.jpg';

export function getImagePosterPath(path) {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
}
