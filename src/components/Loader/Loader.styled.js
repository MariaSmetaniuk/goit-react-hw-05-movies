import { FiLoader } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LoaderStyled = styled(FiLoader)`
  fill: ${p => p.theme.colors.text};
  width: 100px;
  height: 100px;
  animation: ${loaderAnimation} 1500ms linear infinite;
`;
