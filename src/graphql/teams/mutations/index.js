
import { gql } from "@apollo/client";

export const JOIN_TO_TEAM = gql`
mutation RegisterMember($teamId: String!, $userId: String!) {
    registerMember(teamId: $teamId, userId: $userId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;
