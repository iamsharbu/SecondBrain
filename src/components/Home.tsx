import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated && <p>Success</p>;
};

export default Home;
