import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { CastList } from 'components/CastList/CastList';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const cast = await getCredits(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError('Something went wrong. Please, try again later!');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movieCast.length > 0 && <CastList cast={movieCast} />}
    </>
  );
};
