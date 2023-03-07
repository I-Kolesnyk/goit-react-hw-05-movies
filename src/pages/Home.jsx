import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'utils/api';

import MoviesGallery from 'components/MoviesGallery';
import Pagination from 'components/Pagination/Pagination';

function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies(page);
        setMovies(trendingMovies.results);
        setTotalPages(trendingMovies.total_pages);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    addTrendingMovies();
  }, [page]);

  useEffect(() => {
    if (params.page > totalPages) {
      return;
    }
    if (location.pathname === '/trending') {
      navigate(`/trending/2`);
      return;
    }
    if (location.pathname === '/trending/1') {
      navigate(`/`);
      setPage(1);
      return;
    }
    if (params.page) {
      setPage(params.page);
      return;
    }
    setPage(1);
  }, [params, totalPages, location, navigate]);

  const changePage = currentPage => {
    navigate(`/${currentPage}`);
    setPage(currentPage);
  };

  return (
    <main>
      <h1>Trending today</h1>
      {status === 'resolved' && <MoviesGallery movies={movies} />}
      {status === 'resolved' && <Pagination page={page} totalPages={totalPages} changePage={changePage} />}
      
    </main>
  );
}

export default Home;
