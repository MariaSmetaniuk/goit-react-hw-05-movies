import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      {loading && <Loader />}
      {error && (
        <p>
          Something went wrong. We can't find trending movies. Please, try again
          later!
        </p>
      )}
      {movieDetails.id && <MovieDetailsCard movieDetails={movieDetails} />}
    </main>
  );
};
