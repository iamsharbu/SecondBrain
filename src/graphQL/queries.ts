// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from '@apollo/client';

export const LOAD_TASKS = gql`
  query {
    tasks {
      id
      name
    }
  }
`;

export const a = 1;
