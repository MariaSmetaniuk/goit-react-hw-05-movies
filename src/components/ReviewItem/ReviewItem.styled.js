import styled from 'styled-components';

export const Author = styled.p`
  padding-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  text-align: justify;
  margin-top: ${p => p.theme.space[4]}px;
`;
