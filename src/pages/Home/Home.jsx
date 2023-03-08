import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTrendingMovies } from 'utils/api';

import MoviesGallery from 'components/MoviesGallery';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader';
import NetworkError from 'components/NetworkError';

import { Title } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies(page);
        setMovies(trendingMovies.results);
        setTotalPages(trendingMovies.total_pages);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setStatus('rejected');
      }
    }
    addTrendingMovies();
  }, [page]);

  const changePage = currentPage => {
    navigate(`/${currentPage}`);
    setPage(currentPage);
  };

  return (
    <main>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Title>Trending today</Title>}
      {status === 'resolved' && <MoviesGallery movies={movies} />}
      {status === 'resolved' && (
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      )}
      {status === 'rejected' && error === 'Network Error' && <NetworkError />}
    </main>
  );
}

export default Home;
