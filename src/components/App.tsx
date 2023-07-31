import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Home from './Home';

const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <>
      {error && <p>Error!!!</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
        <div>
          <h1>This is a simple React component</h1>
          <LoginButton />
          <LogoutButton />
          <Home />
        </div>
      )}
    </>
  );
};

export default App;
