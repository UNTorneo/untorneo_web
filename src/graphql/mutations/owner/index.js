import { gql } from "@apollo/client";

export const ADD_OWNER = gql`
  mutation ADD_OWNER($venueId: Int!, $userId: String!) {
    addOwner(venueId: $venueId, userId: $userId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;
// {
//   "venueId": 2,
//   "userId": "7"
// }

export const DELETE_OWNER = gql`
  mutation DELETE_OWNER($deleteOwnerId: Int!) {
    deleteOwner(id: $deleteOwnerId) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
`;

// {
//   "deleteOwnerId": null
// }