import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.muted};

  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.05rem;
  box-shadow: ${p => p.theme.shadows.secondary};

  &.active {
    color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.colors.accent};
  }
`;
