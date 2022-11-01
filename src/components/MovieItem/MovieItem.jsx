import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { Item, Image, Title, ItemLink } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const location = useLocation();

  return (
    <Item>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        <Box height="350px">
          <Image
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            alt="film poster"
          />
        </Box>
        <Box
          display="flex"
          alingItems="center"
          justifyContent="center"
          height="75px"
        >
          <Title>{title}</Title>
        </Box>
      </ItemLink>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
