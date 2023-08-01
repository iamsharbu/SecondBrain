/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ErrorBoundary } from 'react-error-boundary';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloProvider,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Home from './Home';
import { ErrorFallback } from './ErrorFallback';
import { errorHandler } from '../utils/common';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line array-callback-return
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:6969/graphql' }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
