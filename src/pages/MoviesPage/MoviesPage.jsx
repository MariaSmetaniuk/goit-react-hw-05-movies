import { useState, useEffect } from 'react';
import { getSearchMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

export const MoviesPage = () => {
  const [quary, setQuary] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        if (quary === '') return;
        setLoading(true);

        const data = await getSearchMovies(quary);
        if (data.results.length === 0) {
          setError('Not found');
          return;
        }

        setSearchMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchMovies();
  }, [quary]);

  const handleSearch = searchQuery => {
    setQuary(searchQuery);
    setError(null);
  };

  return (
    <main>
      {loading && <Loader />}
      <SearchForm onSubmit={handleSearch} />
      <Box mt={5}>
        {error && (
          <p>
            Something went wrong. We can't find trending movies. Please, try
            again later!
          </p>
        )}
        {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
      </Box>
    </main>
  );
};
