import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
  query ExampleQuery {
    getMatches {
      id
      tournamentId {
        id
        name
      }
      homeTeam {
        id
        name
      }
      visitingTeam {
        id
        name
      }
      homeTeamScore
      visitingTeamScore
      date
      status
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