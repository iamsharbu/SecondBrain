// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation createTask($name: String!) {
    createTask(name: $name) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
        id
        name
    }
  }
`;

export const a = 1;
