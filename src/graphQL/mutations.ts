// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation createUser($name: String!) {
    createTask(name: $name) {
      id
    }
  }
`;

export const a = 1;
