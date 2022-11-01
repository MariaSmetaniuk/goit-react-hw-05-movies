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
    if (quary === '') return;
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);

        const data = await getSearchMovies(quary);
        if (data.results.length === 0) {
          setError(
            `Sorry, there are no movies matching ${quary}. Please try again!`
          );
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
        {error && <p>{error}</p>}
        {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
      </Box>
    </main>
  );
};
