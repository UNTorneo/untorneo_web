import { gql } from "@apollo/client";


export const GET_OWNERS = gql`
  query Owners {
      owners {
        id
        venueId
        userId
      }
    }
  `;

export const GET_OWNER_BY_ID = gql`
query Owner($ownerId: Int!) {
    owner(id: $ownerId) {
      id
      venueId
      user {
        
      }
    }
  }
`;




export const GET_OWNER_BY_VENUE_ID = gql`
query OwnerByVenueId($venueId: Int!) {
    ownerByVenueId(venueId: $venueId) {
      id
      venueId
      user {
        
      }
    }
  }
`;

export const GET_VENUES = gql`
query GetVenues {
    getVenues {
      id
      location
      description
      isActive
    }
  }
`;

export const GET_VENUE_BY_ID = gql`
query GetVenue($getVenueId: Int!) {
    getVenue(id: $getVenueId) {
      id
      location
      description
      isActive
    }
  }
`;

export const GET_VENUE_BY_USER_ID = gql`
query GetVenuesByUserId($userId: Int!) {
    getVenuesByUserId(userId: $userId) {
      id
      location
      description
      isActive
    }
  }
`;



export const GET_COURT_BY_ID = gql`
query GetCourt($getCourtId: Int!) {
    getCourt(id: $getCourtId) {
      id
      venueId
      sportId
      isActive
    }
  }
`;

export const GET_COURTS = gql`
query GetCourts {
    getCourts {
      id
      venueId
      sportId
      isActive
    }
  }
`;

export const GET_COURTS_BY_VENUE_ID = gql`
query GetCourtsByVenueId($venueId: Int!) {
    getCourtsByVenueId(venueId: $venueId) {
      id
      venueId
      sportId
      isActive
    }
  }
`;

export const GET_COURTS_BY_SPORT_ID = gql`
query GetCourtsBySportId($sportId: String!) {
    getCourtsBySportId(sportId: $sportId) {
      id
      venueId
      sportId
      isActive
    }
  }
`;





