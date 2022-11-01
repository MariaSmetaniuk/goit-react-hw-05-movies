import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const firstRender = useRef(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = true;
      return;
    }
    const query = searchParams.get('query') ?? '';
    setSearchQuery(query);
  }, [searchParams]);

  // загрузка фільмів при зміні searchQuery
  useEffect(() => {
    if (searchQuery === '') return;
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);

        const data = await getSearchMovies(searchQuery);
        if (data.results.length === 0) {
          setError(
            `Sorry, there are no movies matching ${searchQuery}. Please try again!`
          );
          setSearchMovies([]);
          return;
        }

        setSearchMovies(data.results);
      } catch (error) {
        setError('Something went wrong. Please, try again later!');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchMovies();
  }, [searchQuery]);

  // при сабміті форми записую searchQuery в state
  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setError(null);
  };

  return (
    <main>
      {loading && <Loader />}
      <SearchForm onSubmit={handleSubmit} />
      <Box mt={5}>
        {error && <p>{error}</p>}
        {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
      </Box>
    </main>
  );
};
