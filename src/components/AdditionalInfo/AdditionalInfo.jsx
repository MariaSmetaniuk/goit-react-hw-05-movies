import { Box } from 'components/Box';
import { Title, StyledLink } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <Box mt={5}>
      <Title>Additional information</Title>
      <Box display="flex" gridGap={4} justifyContent="center" mt={4} as="ul">
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </Box>
    </Box>
  );
};
