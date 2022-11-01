import { useLocation, useNavigate } from 'react-router-dom';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Box } from 'components/Box';
import { Text } from './NotFoundPage.styled';

export const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  return (
    <Box p={5} as="main">
      <Text>Page is not found :(</Text>
      <GoBackButton onClick={handleGoBack} />
    </Box>
  );
};
