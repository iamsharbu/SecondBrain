/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloProvider,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ErrorFallback } from './ErrorFallback';
import { errorHandler } from '../utils/common';
import SecondBrain from './SecondBrain';
import Spinner from './Spinner';

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
  new HttpLink({ uri: 'https://second-brain-luk9.onrender.com/graphql' }),
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
        {error && <ErrorFallback />}
        {!error && isLoading && <Spinner />}
        {!isLoading && !error && <SecondBrain />}
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default App;
