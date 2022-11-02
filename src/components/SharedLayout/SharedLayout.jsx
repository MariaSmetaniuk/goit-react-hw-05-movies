import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box';
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Box width="1200px" mx="auto" px={4} as="nav">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Box>
      </Header>
      <Box width="1200px" mx="auto" px={4} py={5}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
