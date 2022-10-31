import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { CastItem } from 'components/CastItem/CastItem';

export const CastList = ({ cast }) => {
  return (
    <Box display="flex" gridGap={5} flexWrap="wrap" mt={4} as="ul">
      {cast?.map(item => (
        <CastItem key={item.id} castItem={item} />
      ))}
    </Box>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string || null,
    })
  ),
};
