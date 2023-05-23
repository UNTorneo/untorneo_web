import { gql } from "@apollo/client";

export const GET_COURTS = gql`
  query GET_COURTS {
    getCourts {
      id
      venueId
      sportId
      isActive
      name
    }
  }
`;

export const GET_COURT = gql`
  query GET_COURT($getCourtId: Int!) {
    getCourt(id: $getCourtId) {
      id
      venueId
      sportId
      isActive
      name
    }
  }
`;

// {
//   "getCourtId": null
// }