import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  text-shadow: ${p => p.theme.shadows.text};
  color: ${p => p.theme.colors.accent};
`;
