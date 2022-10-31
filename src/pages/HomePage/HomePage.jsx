import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);

        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      {loading && <Loader />}
      {error && (
        <p>
          Something went wrong. We can't find trending movies. Please, try again
          later!
        </p>
      )}
      {trendingMovies.length > 0 && (
        <>
          <Title>Trending today</Title>
          <MoviesList movies={trendingMovies} />
        </>
      )}
    </main>
  );
};
