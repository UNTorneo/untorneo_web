import { gql } from "@apollo/client";

export const GET_VENUES = gql`
  query GET_VENUES {
    getVenues {
      id
      location
      description
      isActive
    }
  }
`;

export const GET_VENUE = gql`
  query GET_VENUE($getVenueId: Int!) {
    getVenue(id: $getVenueId) {
      id
      location
      description
      isActive
    }
  }
`;
