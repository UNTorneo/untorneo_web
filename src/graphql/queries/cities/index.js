import { gql } from "@apollo/client";

export const GET_CITIES = gql`
  query Cities {
    cities {
      id
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    id
    name
  }
}
`;