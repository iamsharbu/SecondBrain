import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ErrorBoundary } from 'react-error-boundary';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Home from './Home';
import { ErrorFallback } from './ErrorFallback';
import { errorHandler } from '../utils/common';

const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <ErrorBoundary fallback={<ErrorFallback />} onError={errorHandler}>
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
    </ErrorBoundary>
  );
};

export default App;
