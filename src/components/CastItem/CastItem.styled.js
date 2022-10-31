import styled from 'styled-components';

export const Item = styled.li`
  padding-bottom: ${p => p.theme.space[3]}px;
  width: calc((100% - 5 * 32px) / 6);
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.secondary};
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  padding: 0 ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  text-align: center;

  color: ${p => p.theme.colors.text};
`;

export const Character = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  padding: 0 ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;

  color: ${p => p.theme.colors.text};
`;
