import MoviesGallery from 'components/MoviesGallery';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'utils/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies();

        console.log(trendingMovies.results);
        setMovies(trendingMovies.results);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    addTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {status === 'resolved' && <MoviesGallery movies={movies} />}
    </main>
  );
}

export default Home;
