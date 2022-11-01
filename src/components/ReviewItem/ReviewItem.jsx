import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Author, Text } from './ReviewItem.styled';

export const ReviewItem = ({ review }) => {
  const { author, content } = review;
  return (
    <Box
      p={4}
      bg="muted"
      borderRadius="sm"
      boxShadow="secondary"
      width="100%"
      as="li"
    >
      <Author>Author: {author}</Author>
      <Text>{content}</Text>
    </Box>
  );
};

ReviewItem.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
