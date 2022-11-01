import styled from 'styled-components';

export const Text = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 40px;
  letter-spacing: 0.05rem;
  color: ${p => p.theme.colors.text};
`;
