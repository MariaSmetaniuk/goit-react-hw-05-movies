import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const ReviewsList = ({ reviews }) => {
  return (
    <Box display="flex" gridGap={4} flexDirection="column" mt={4} as="ul">
      {reviews?.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </Box>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
