import { gql } from "@apollo/client";

export const ADD_VENUE = gql`
  mutation ADD_VENUE($venue: AddVenue) {
    ADD_VENUE(venue: $venue) {
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
//   "venue": {
//     "description": null,
//     "isActive": null,
//     "location": null
//   }
// }
export const UPDATE_VENUE = gql`
  mutation UPDATE_VENUE($updateVenueId: Int!, $venue: UpdateVenue!) {
    updateVenue(id: $updateVenueId, venue: $venue) {
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
//   "updateVenueId": 2,
//   "venue": {
//     "description": "description"
//     "isActive": false,
//     "location": "NUEVA LOCATION"
//   }
// }

export const DELETE_VENUE = gql`
  mutation DELETE_VENUE($deleteVenueId: Int!) {
    deleteVenue(id: $deleteVenueId) {
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
//   "deleteVenueId": 4
// }