import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <Box display="flex" gridGap={5} flexWrap="wrap" as="ul">
      {movies?.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
