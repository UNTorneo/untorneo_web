import { gql } from "@apollo/client";

export const START_MATCH = gql`
  mutation Mutation($startMatchId: String!) {
    startMatch(id: $startMatchId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;

export const END_MATCH = gql`
    mutation Mutation($endMatchId: String!) {
        endMatch(id: $endMatchId) {
          ... on SucessResponse {
            message
          }
          ... on ErrorResponse {
            error
          }
        }
      }
`;

