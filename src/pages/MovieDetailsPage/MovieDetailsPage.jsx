import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  // завантажую з беку MovieDetails по id
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError('Something went wrong. Please, try again later!');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movieDetails && (
        <>
          <GoBackButton onClick={handleGoBack} />
          <MovieDetailsCard movieDetails={movieDetails} />
          <AdditionalInfo />
          <Outlet />
        </>
      )}
    </main>
  );
};
