import PropTypes from 'prop-types';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button } from './GoBackButton.styled';

export const GoBackButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      <MdKeyboardBackspace />
      GoBack
    </Button>
  );
};

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// GoBackButton.propTypes = {
//   to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
// };
