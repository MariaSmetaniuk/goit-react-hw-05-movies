import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  PosterImg,
  MovieTitle,
  Year,
  Text,
  TextTitle,
} from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  return (
    <Box display="flex" bg="muted" boxShadow="secondary">
      <PosterImg
        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
        alt="film poster"
      />
      <Box p={5}>
        <Box display="flex" gridGap={3}>
          <MovieTitle>{title ? title : 'Movie Title'}</MovieTitle>
          <Year>({release_date?.slice(0, 4)})</Year>
        </Box>
        <Text>
          User Score {vote_average ? Math.round(vote_average * 10) : '...'}%
        </Text>
        <TextTitle>Overview</TextTitle>
        <Text>{overview ? overview : '...'}</Text>
        <TextTitle>Genres</TextTitle>
        <Text>{genres?.map(genre => genre.name).join(' ')}</Text>
      </Box>
    </Box>
  );
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string || null,
    vote_average: PropTypes.number,
    overview: PropTypes.string || null,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
