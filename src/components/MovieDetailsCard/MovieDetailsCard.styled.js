import styled from 'styled-components';

export const PosterImg = styled.img`
  height: 400px;
  width: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const Year = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  text-align: justify;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TextTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
