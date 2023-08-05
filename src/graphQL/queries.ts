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

export const ASK_AI = gql`
  query askAI($prompt: String!){
    askAI(prompt: $prompt){
      response
    }
  }
`;

export const a = 1;
