import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
  width: calc((100% - 3 * 32px) / 4);
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.secondary};
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${p => p.theme.space[4]}px 0;
  padding: 0 ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.33;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`;
