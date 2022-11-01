import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.muted};
  border: none;

  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.05rem;
  box-shadow: ${p => p.theme.shadows.secondary};
`;
