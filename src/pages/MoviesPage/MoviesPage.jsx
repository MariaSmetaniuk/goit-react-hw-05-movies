import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // загрузка фільмів при зміні query
  useEffect(() => {
    if (query === '') return;
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);

        const data = await getSearchMovies(query);
        if (data.results.length === 0) {
          setError(
            `Sorry, there are no movies matching ${query}. Please try again!`
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
  }, [query]);

  // при сабміті форми записую searchQuery в параметри пошукового рядка
  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
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

export default MoviesPage;
