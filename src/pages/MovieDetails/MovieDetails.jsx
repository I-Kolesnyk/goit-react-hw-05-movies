import { useState, useEffect } from 'react';
import {  useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'utils/api';

import Movie from 'components/Movie';
import Loader from 'components/Loader';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const abortController = new AbortController();

    async function addMovieDetails() {
      setStatus('pending');
      try {
        const movie = await getMovieDetails(movieId, abortController);
        setMovieDetails(movie);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }
    addMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  useEffect(() => {
    if(error === 'canceled') {
      return;
    }
    if(error) {
      toast.error(error);
      setError('');
    }
  }, [error])

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Movie movie={movieDetails} />}
    </>
  );
}

export default MovieDetails;
