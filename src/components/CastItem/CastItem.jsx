import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import imgPlaceholder from '../../images/imgPlaceholder.png';
import { Item, Image, Name, Character } from './CastItem.styled';

export const CastItem = ({ castItem }) => {
  const { name, character, profile_path } = castItem;
  return (
    <Item>
      <Box height="250px">
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w400/${profile_path}`
              : imgPlaceholder
          }
          alt="Profile photo"
        />
      </Box>

      <Name>{name ? name : 'Name'}</Name>
      <Character>{character ? character : 'Character'}</Character>
    </Item>
  );
};

CastItem.propTypes = {
  castItem: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    profile_path: PropTypes.string || null,
  }),
};
