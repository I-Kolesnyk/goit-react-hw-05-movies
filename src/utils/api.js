import axios from 'axios';

const API_KEY = '1196368753ba671380e452b9a1020481';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );

  const movies = response.data;
  
  return (movies);
}
