import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Item, Image, Title, ItemLink } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const { id, title, poster_path } = movie;
  return (
    <Item>
      <ItemLink to={`/movies/${id}`}>
        <Box height="350px">
          <Image
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            alt="film poster"
          />
        </Box>
        <Title>{title}</Title>
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
