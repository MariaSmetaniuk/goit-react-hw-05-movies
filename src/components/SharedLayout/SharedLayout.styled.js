import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.background};
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.line};
  box-shadow: ${p => p.theme.shadows.header};

  > nav {
    display: flex;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.border};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  &.active {
    text-shadow: ${p => p.theme.shadows.text};
    color: ${p => p.theme.colors.accent};
  }
`;
