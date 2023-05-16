import { gql } from "@apollo/client";

export const ADD_OWNER = gql`
    mutation AddOwner($venueId: Int!, $userId: String!) {
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

export const ADD_VENUE = `
    mutation AddVenue($venue: AddVenue) {
        addVenue(venue: $venue) {
        ... on SucessResponse {
            message
        }
        ... on ErrorResponse {
            error
        }
        }
}`;

export const UPDATE_VENUE = `
mutation UpdateVenue($updateVenueId: Int!, $venue: UpdateVenue!) {
    updateVenue(id: $updateVenueId, venue: $venue) {
      ... on SucessResponse {
        message
      }
    }
  }
}`;

/*
 "venue": {
    "location": null,
    "description": null,
    "isActive": null
  }
*/

export const ADD_COURT = `
mutation AddCourt($court: AddCourt) {
    addCourt(court: $court) {
      ... on SucessResponse {
        message
      }
      ... on ErrorResponse {
        error
      }
    }
  }
}`;

/*
{
  "court": {
    "venueId": null,
    "sportId": null,
    "isActive": null
  }
}
*/



/*

*/

