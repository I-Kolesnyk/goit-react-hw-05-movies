import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCast } from 'utils/api';

import Loader from 'components/Loader';
import ActorsGallery from 'components/ActorsGallery';

function Cast() {
  const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const abortController = new AbortController();
    async function addMovieCast() {
      setStatus('pending');
      try {
        const cast = await getMovieCast(movieId, abortController);
        setMovieCast(cast);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }

    addMovieCast(movieId, abortController);

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
      {status === 'resolved' && movieCast.length !== 0 && <ActorsGallery actors={movieCast} />}
    </>
  );
}

export default Cast;
