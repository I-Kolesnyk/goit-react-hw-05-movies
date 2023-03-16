import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'utils/api';

import MoviesGallery from 'components/MoviesGallery';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader';

import { Title, Container, Main } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies(page, abortController);
        setMovies(trendingMovies.movies);
        setTotalPages(trendingMovies.totalPages);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }
    addTrendingMovies();

    return () => {
      abortController.abort();
    };
  }, [page]);

  useEffect(() => {
    if (params.page) {
      setPage(params.page);
      return;
    }
    setPage(1);
  }, [params.page]);

  useEffect(() => {
    if(error === 'canceled') {
      return;
    }
    if(error) {
      toast.error(error);
      setError('');
    }
  }, [error])

  const changePage = currentPage => {
    navigate(`/${currentPage}`);
    setPage(currentPage);
  };

  return (
    <Main>
      <Container>
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
        
      </Container>
    </Main>
  );
}

export default Home;
