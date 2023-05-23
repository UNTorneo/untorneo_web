import { gql } from "@apollo/client";

export const GET_OWNERS = gql`
  query GET_OWNERS {
    owners {
      id
      venueId
      userId
    }
  }
`;

export const GET_OWNER = gql`
  query GET_OWNER($ownerId: Int!) {
    owner(id: $ownerId) {
      id
      venueId
      user {
        username
        birthday
        email
        id
        isActive
      }
    }
  }
`;