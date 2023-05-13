import { gql } from "@apollo/client";

export const GET_CITIES = gql`
  query Cities {
    cities {
      id
      name
    }
  }
`;