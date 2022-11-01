import { Box } from 'components/Box';
import { Title, StyledLink } from './AdditionalInfo.styled';

export const AdditionalInfo = ({ from }) => {
  return (
    <Box mt={5}>
      <Title>Additional information</Title>
      <Box display="flex" gridGap={4} justifyContent="center" mt={4} as="ul">
        <li>
          <StyledLink to="cast" state={{ from }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from }}>
            Reviews
          </StyledLink>
        </li>
      </Box>
    </Box>
  );
};
