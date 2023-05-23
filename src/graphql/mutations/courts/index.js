import { gql } from "@apollo/client";

export const ADD_COURT = gql`
  mutation ADD_COURT($court: AddCourt) {
    addCourt(court: $court) {
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
//   "court": {
//     "isActive": true,
//     "name": "name",
//     "venueId": 2,
//     "sportId": "642333e146c55280aeb43f55"
//   }
// }
export const UPDATE_COURT = gql`
  mutation UPDATE_COURT($updateCourtId: Int!, $court: UpdateCourt!) {
    updateCourt(id: $updateCourtId, court: $court) {
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
//   "updateCourtId": null,
//   "court": {
//     "isActive": null,
//     "name": null,
//     "sportId": null,
//     "venueId": null
//   }
// }

export const DELETE_COURT = gql`
  mutation DELETE_COURT($deleteCourtId: Int!) {
    deleteCourt(id: $deleteCourtId) {
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
//   "deleteCourtId": null
// }