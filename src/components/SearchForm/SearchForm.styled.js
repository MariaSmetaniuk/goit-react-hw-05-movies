import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 450px;
  background-color: ${p => p.theme.colors.muted};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.secondary};
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.muted};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[2]}px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 48px;
  border: none;
  opacity: 0.6;
  background-color: ${p => p.theme.colors.line};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
`;
